module.exports = {
    "test": /(\.js|\.jsx)?$/,
    "exclude": [/node_modules/],
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ],
    "plugins": [
        [
            "@babel/plugin-transform-runtime",
            {
                "regenerator": true
            }
        ]
    ]
}