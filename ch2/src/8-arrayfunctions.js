// 1. forEach()

// let's parse string ("banana=10&apple=20&orange=30")
function parse1(qs) {
  var queryString = qs.substr(1);
  var chunks = queryString.split('&')
  var result = {};

  for (var i = 0; i < chunks.length; i++) {
    var parts = chunks[i].split('=');
    var key = parts[0];
    var value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
    result[key] = value;
  }
  return result;
}

function parse2(qs) {
  const queryString = qs.substr(1);
  const chunks = queryString.split('&');
  let result = {};
  chunks.forEach((chunk) => {
    const parts = chunk.split['='];
    const key = parts[0];
    const value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
    result[key] = value;
  });
  return result;
}

function parse3(qs) {
  const queryString = qs.substr(1);
  const chunks = queryString.split('&');
  let result = {};
  chunks.forEach((chunk) => {
    const [ key, value ] = chunk.split('=');
    result[key] = value;
  });
  return result;
}

// map: immutable
function parse4(qs) {
  const queryString = qs.substr(1);
  const chunks = queryString.split('&');
  const result = chunks.map((chunk) => {
    const [key, value] = chunk.split('=');
    return { key: key, value: value };
  });
  return result;
}

// reduce: obj
function sum1(numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
sum1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

function parse5(qs) {
  const queryString = qs.substr(1);
  const chunks = queryString.split('&');
  return chunks.map((chunk) => {
    const [ key, value ] = chunk.split('=');
    return { key, value };
  })
  .reduce((result, item) => {
    result[item.key] = item.value;
    return result;
  }, {})
}