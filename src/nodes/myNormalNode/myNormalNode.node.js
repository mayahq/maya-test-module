const MyNormalNode = require('./myNormalNode.schema')

const node = new MyNormalNode()
const fn = (RED) => node.config(RED)
module.exports = fn