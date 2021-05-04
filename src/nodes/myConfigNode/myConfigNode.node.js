const MyConfigNode = require('./myConfigNode.schema')

const node = new MyConfigNode()
const fn = (RED) => node.config(RED)
module.exports = fn