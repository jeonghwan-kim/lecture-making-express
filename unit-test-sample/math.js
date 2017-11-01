const toNum = (val) => {
  const num = (typeof val === 'string') ? parseInt(val, 10) : val;
  if (Number.isNaN(num)) throw Error(messages.notNumber)
  return num || 0
}

const math = {
  sum(a, b) {
    return toNum(a) + toNum(b);
  },

  substract(a, b) {
    return toNum(a) - toNum(b);
  },

  multiply(a, b) {
    let ret = 0
    for(let i = 0; i < b; i++) {
      ret = this.sum(ret, a)
    }
    return ret;
  },
}

const messages = {
  notNumber: '인자가 Number이거나 숫자형식의 String이어야 함'
};

module.exports = math;
module.exports.messages = messages;
