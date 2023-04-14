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

function average(...notes) {

  const totalOfNotes = notes.length;
  let total = 0;

  for (const note of notes) {

    if (typeof note !== 'number') {
      throw new Error('Values must be a number.');
    }

    total += note;
  }

  const average = String(total / totalOfNotes);

  const indexOfDod = average.indexOf('.');

  const result = average.slice(0, indexOfDod + 2);

  return Math.round(result * 10) / 10;
}

module.exports = {
  sum,
  multiply,
  divide,
  average,
};
