// middleware.js
module.exports = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Origin, Accept, Authorization, Content-Length, X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS')
  next()
}