const {
    Node,
    Schema
} = require('@mayahq/module-sdk')
const MyConfigNode = require('../myConfigNode/myConfigNode.schema')

class MyNormalNode extends Node {
    static schema = new Schema({
        name: 'my-normal-node',
        category: 'maya-test-module',
        isConfig: false,
        fields: {
            content: {
                type: String,
                defaultVal: 'hehe'
            },
            myConfig: MyConfigNode
        },

    })

    onInit() {
        // Do something on initialization of node
    }

    async onMessage(msg, vals) {
        const { myConfig } = this.credentials
		msg.someSecret = myConfig.someSecret // Add the secret to msg
		msg.content = vals.content // Add the content field to the msg

        return msg
    }
}

module.exports = MyNormalNode