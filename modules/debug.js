const colors = [
  {name: 'cyan',     value: '\x1b[36m'},
  {name: 'yellow',   value: '\x1b[33m'},
  {name: 'red',      value: '\x1b[31m'},
  {name: 'green',    value: '\x1b[32m'},
  {name: 'magenta',  value: '\x1b[35m'},
]
const resetColor = '\x1b[0m'

const debug = tag => {
  const dbg = (...msg) => {
    console.log(dbg.coloredTag, ...msg)
  }

  dbg.coloredTag = (()=> {
    const randIdx = Math.floor(Math.random() * colors.length) % colors.length
    const color = colors[randIdx]
    return `${color.value}[${tag}]${resetColor}`
  })()

  return dbg
}

module.exports = debug