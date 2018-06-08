const env = {
  'process.env.fetchUrl': 'admin.academyux.com'
}

module.exports = {
  "presets": [ "next/babel" ],
  "plugins": [
    [ "inline-react-svg" ],
    ["transform-define", env],
    ["dynamic-import-node"]
  ]
}
