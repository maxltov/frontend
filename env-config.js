
const prod = process.env.BACKEND_URL === 'production'

module.exports = {
  'process.env.BACKEND_URL': process.env.BACKEND_URL ? process.env.BACKEND_URL : 'https://localhost:5000'
}
