module.exports = calculateNumber = (type, a, b) => {
  if (type === 'SUM') return Math.round(a) + Math.round(b);
  if (type === 'SUBTRACT') return Math.round(a) - Math.round(b);
  if (type === 'DIVIDE') {
    if (Math.round(b) == 0) throw new Error;
    return Math.round(a) / Math.round(b);
  }
};


// console.log((calculateNumber('DIVIDE', 15, 0)));
