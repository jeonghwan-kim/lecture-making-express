const debugEnabled = process.env.DEBUG || false

const debug = tag => {
  return msg => {
    tag ? console.log(tag, msg) : console.log(msg)
  }
}

module.exports = debug