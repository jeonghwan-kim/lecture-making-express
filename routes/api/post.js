const lorem = 'Lorem ipsum dolor sit amet, sumo partiendo has no, nonumy utamur sit ex. Possit inimicus mel te. Ei vel alii porro debitis, simul percipit ius id. Et duo rebum eleifend expetenda, eu eam malis etiam assueverit.\n';
const posts = [
  {id: 7, title: 'post 7', body: lorem, author: 'alice@gmail.com'},
  {id: 6, title: 'post 6', body: lorem, author: 'chirs@gmail.com'},
  {id: 5, title: 'post 5', body: lorem, author: 'alice@gmail.com'},
  {id: 4, title: 'post 4', body: lorem, author: 'bek@gmail.com'},
  {id: 3, title: 'post 3', body: lorem, author: 'bek@gmail.com'},
  {id: 2, title: 'post 2', body: lorem, author: 'daniel@gmail.com'},
  {id: 1, title: 'post 1', body: lorem, author: 'chirs@gmail.com'},
]

const index = (req, res, next) => {
  res.json({list: posts})
}

module.exports = {index}