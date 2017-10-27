const toNum = (val) => {
  const num = (typeof val === 'string') ? parseInt(val, 10) : val;
  if (Number.isNaN(num)) throw Error(messages.notNumber)
  return num || 0
}

const sum = (a, b) => toNum(a) + toNum(b);

const substract = (a, b) => toNum(a) - toNum(b);

const messages = {
  notNumber: '인자가 Number이거나 숫자형식의 String이어야 함'
}

module.exports = {sum, substract, messages}