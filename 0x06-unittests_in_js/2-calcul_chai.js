module.exports = calculateNumber = (type, a, b) => {
    if (type === 'SUM') return Math.round(a) + Math.round(b);
    if (type === 'SUBTRACT') return Math.round(a) - Math.round(b);
    if (type === 'DIVIDE') {
      if (Math.round(b) == 0) throw new Error('Error');
      return Math.round(a) / Math.round(b);
    } else if (type !== 'SUM' && type !== 'SUBTRACT' && type !== 'DIVIDE')
      throw new Error('Error');
  };


//   console.log(calculateNumber('DIVIDE', 15, 0));
