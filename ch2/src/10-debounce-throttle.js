export function debounce(func, delay) {
 let inDebounce;
 return function(...args) {
  if (inDebounce) {
    clearTimeout(inDebounce);
  }
  inDebounce = setTimeout(
    () => func(...args), delay
  );
 }
}

const run = debounce(val => console.log(val), 100);

run('a');
run('b');
run(2);


// 2. Throttle: works like debounce but call func with given delay in spite of continuous inputs
// i.e. keep scrolling like infinity scroll - fetch should be done more than debouncing for seamless experience.
export function throttle(func, delay) {
  let lastFunc;
  let lastRan;
  return function(...args) {
    const context = this;
    if (!lastRan) {
      func.call(context, ...args);
      lastRan = Date.now();
    } else {
      if (lastFunc) clearTimeout(lastFunc);
      lastFunc = setTimeout(function() {
        // check call is over delay and run
        if ((Date.now() - lastRan) >= delay) {
          func.call(context, ...args);
          lastRan = Date.now();
        }
      }, delay - (Date.now() - lastRan));
    }
  }
}

var checkPosition = () => {
  const offset = 500;
  const currentScrollPosition = window.pageYOffset;
  const pageBottomPosition = document.body.offsetHeight - window.innerHeight - offset;
  if (currentScrollPosition >= pageBottomPosition) {
    // do jobs like fetch()
    console.log("load next page");
  }
};

var infiniteScroll = throttle(checkPosition, 300);
window.addEventListener('scroll', infiniteScroll);