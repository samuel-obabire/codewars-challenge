// https://www.codewars.com/kata/545cedaa9943f7fe7b000048

function isPangram(string) {
  // a range generator function
  const range = (start, stop, step) =>
    Array.from({length: (stop - start) / step + 1}, (_, i) => start + i * step)

  // generate the 26 letters of the alphabets
  const alps = range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x =>
    String.fromCharCode(x),
  )

  return alps.every(alp => string.toUpperCase().includes(alp))
}
