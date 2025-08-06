// The old ways of doing async works
function oldWork1(onDone) {
  setTimeout(() => onDone('Done!'), 100);
}
function oldWork2(onDone) {
  setTimeout(() => onDone('Done!'), 200);
}
function oldWork3(onDone) {
  setTimeout(() => onDone('Done!'), 300);
}

oldWork1(function (msg1) {
  console.log("Done after 100ms:" + msg1);
  oldWork2(function (msg2) {
    console.log("Done after 300ms:" + msg2);
    oldWork3(function (msg3) {
      console.log("Done after 600ms:" + msg3);
    });
  });
});
oldUrgentWork();
// Which ends up to "callback hell"

const newWork1 = () => new Promise((resolve) => {
    setTimeout(() => resolve("Done!"), 100);
  });


const nextWorkOnDone = (msg1) => {
  console.log('done after 100ms:' + msg1);
  return newWork2();
}

newWork1()
  .then(nextWorkOnDone)
  .then((msg2) => {
    console.log('done after 200ms:' + msg2);
    return newWork3();
  })
  .then((msg3) => {
    console.log('done after 600ms:' + msg3);
  });
oldUrgentWork();