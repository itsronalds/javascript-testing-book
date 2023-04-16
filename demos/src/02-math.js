function sum(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return null;
  }

  return a / b;
}

function average(...grades) {
  const gradesLength = grades.length;
  let total = 0;

  for (let i = 0; i < gradesLength; i += 1) {
    const grade = grades[i];

    if (typeof grade !== 'number') {
      throw new Error('Values must be a number.');
    }

    total += grade;
  }

  const gradeAverage = String(total / gradesLength);

  const dodIndex = gradeAverage.indexOf('.');

  const result = gradeAverage.slice(0, dodIndex + 2);

  return Math.round(result * 10) / 10;
}

module.exports = {
  sum,
  multiply,
  divide,
  average,
};
