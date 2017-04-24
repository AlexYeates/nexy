const User = require('../models/user');

function userShow(req, res) {
  User
  .findById(req.session.id)
  .populate()
  .exec()
  .then(highlight => {
    if (!highlight) return res.status(404).render('error', { error: 'No highlight found.' });
    res.render('user/show', { highlight });
  })
  .catch(err => {
    res.status(500).render('error', { error: err });
  });
}

module.exports = {
  show: userShow
};

// the userShow needs to have the logged in user's id and to find the correct user's array from the local server db
// it will then need to render the correct page, which will be the views/user/show page
