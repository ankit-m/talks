module.exports = function (req, res, next) {
  console.log('heeer');
  if (!req.params.hasOwnProperty('userId')) {
    console.log('oookkkk');
    return next();
  }

  if (req.params.userId === req.me.id) {
    return next();
  }

  return res.forbidden();
};
