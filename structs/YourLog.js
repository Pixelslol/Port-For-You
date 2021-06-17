module.exports = {
  Log(data) {
    console.log(`[\x1b[35;1mYour Dev Name\x1b[0m]: ${data}\x1b[0m`)
  },
  Error(data) {
    console.log(`[\x1b[31mYourDevNameError\x1b[0m]: ${data}\x1b[0m`)
  }
}