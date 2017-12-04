const toNum = (val) => {
  const num = (typeof val === 'string') ? parseInt(val, 10) : val;
  if (Number.isNaN(num)) throw Error(messages.notNumber)
  return num || 0
}

const math = {
  sum(a, b) {
    return toNum(a) + toNum(b);
  }
}

const messages = {
  notNumber: '인자가 Number이거나 숫자형식의 String이어야 함'
}

module.exports = math;
module.exports.messages = messages;
