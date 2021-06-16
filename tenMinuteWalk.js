const tenMinuteWalk = (directions) => {
  let ns = 0,
    ew = 0;

  directions.forEach((el) => {
    if (el === "n") {
      ns += 1;
    }
    if (el === "s") {
      ns -= 1;
    }
    if (el === "w") {
      ew += 1;
    }
    if (el === "e") {
      ew -= 1;
    }
  });

  return ns === 0 && ew === 0;
};

module.exports = tenMinuteWalk;
