const {
    Node,
    Schema
} = require('@mayahq/module-sdk')

class MyConfigNode extends Node {
    static schema = new Schema({
        name: 'my-config-node',
        category: 'config',
        isConfig: true,
        fields: {
            // Whatever custom fields the node needs.
        },
        redOpts: {
            credentials: {
                someSecret: {
                    type: String
                }
            }
        }

    })

    onInit() {
        console.log('Hello I am a config node')
    }
}

module.exports = MyConfigNode