// Coding Challenge 3

const calcAverageHumanAge = (ages) => {
  const checkHumanAge = ages
    .map((age) => {
      if (age <= 2) {
        return 2 * age;
      } else {
        return 16 + age * 4;
      }
    })
    .filter((hAge) => hAge > 18)
    .reduce((acc, hAge , i ,arr) => acc + hAge / arr.length , 0);

    return checkHumanAge
};


console.log(calcAverageHumanAge( [5, 2, 4, 1, 15, 8, 3]));


