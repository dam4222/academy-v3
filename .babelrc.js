const env = {
  'process.env.fetchUrl': 'admin.academyux.com',
  'process.env.mailUrl': 'https://peq1z8fxbh.execute-api.us-east-1.amazonaws.com/test/email',
}

module.exports = {
  "presets": [ "next/babel" ],
  "plugins": [
    [ "inline-react-svg" ],
    ["transform-define", env],
    ["dynamic-import-node"],

  ]
}
