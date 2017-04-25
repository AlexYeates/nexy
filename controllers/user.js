const User = require('../models/user');

function userShow(req, res) {
  User
  .findById(req.session.id)
  .populate()
  .exec()
  .then(user => {
    if (!user) return res.status(404).render('error', { error: 'No user found.' });
    res.render('user/show', { user });
  })
  .catch(err => {
    res.status(500).render('error', { error: err });
  });
}

module.exports = {
  show: userShow
};
