const fs = require('fs')

module.exports.connect = () => {
  fs.readFile('credentials.json', (err, content) => {
    if (err) return console.log('Error: ', err)

    return content
  })
}
