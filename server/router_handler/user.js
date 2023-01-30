exports.age = (req, res) => {
  console.log('req', req.query)
  res.send('user.age')
}
