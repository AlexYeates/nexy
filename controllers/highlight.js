const Highlight = require('../models/highlight');
const User      = require('../models/user');

function highlightIndex(req, res) {
  User
  .findById(res.locals.user._id)
  .populate('highlights')
  .exec()
  .then(user => {
    res.render('highlight/index', { user });
  })
  .catch(err => {
    res.status(500).render('error', { error: err });
  });
}

function highlightCreate(req, res){
  Highlight
  .create(req.body)
  .then(highlight => {
    User
    .findById(res.locals.user._id)
    .exec()
    .then(user => {
      if (!user.highlights.includes(highlight._id)) user.highlights.push(highlight._id);
      user.save(err => {
        if (err) console.log(err);
        res.redirect('/');
      });
    });
  });
}

function highlightDelete(req, res) {
  Highlight
  .findById(req.params.id)
  .exec()
  .then(highlight => {
    if (!highlight) return res.status(404).render('error', { error: 'No highlight found.' });
    return highlight.remove();
  })
  .then(() => {
    res.redirect('/highlight');
  })
  .catch(err => {
    res.status(500).render('error', { error: err });
  });
}

module.exports = {
  index: highlightIndex,
  create: highlightCreate,
  delete: highlightDelete
};
