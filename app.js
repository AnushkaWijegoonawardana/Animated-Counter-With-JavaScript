const counters = document.querySelectorAll(".data-counter");
const copyRightYearSpan = document.querySelector("#getYear");
const countSpeed = 100;

counters.forEach(counter => {
  const updateCount = () => {
    const countertarget = +counter.getAttribute("data-target");
    const initialCount = +counter.innerText;

    const increment = countertarget / countSpeed;

    if (initialCount < countertarget) {
      counter.innerText = Math.ceil(initialCount + increment);
      setTimeout(updateCount, 5);
    } else {
      counter.innerText = countertarget;
    }
  };

  updateCount();
});

(() => {
  const copyRightYear = new Date().getFullYear();
  //   console.log(copyRightYearSpan);

  copyRightYearSpan.innerText = copyRightYear;
})();
