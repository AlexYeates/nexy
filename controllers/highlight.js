const Highlight = require('../models/highlight');
const User      = require('../models/user');

function highlightIndex(req, res) {
  User
  .findById(res.locals.user._id)
  .exec()
  .then(user => {
    return Highlight
    .populate(user, { path: 'highlights'});
  })
  .then(user => {
    res.render('highlight/index', { user });
  })
  .catch(err => {
    res.status(500).render('error', { error: err });
  });
}

function highlightCreate(req, res){
  Highlight
  .findOneOrCreate({ title: req.body.title }, req.body)
  .then(highlight => {
    return User
    .findByIdAndUpdate(res.locals.user._id, {
      $addToSet: {
        highlights: [highlight._id]
      }
    }, {
      new: true
    })
    .exec();
  })
  .then(user => res.status(200).json({ message: 'Success' }))
  .catch(err => {
    console.log(err);
    res.status(500).json({ message: 'Fail' });
  });
}

function highlightDelete(req, res) {
  Highlight
  .findByIdAndRemove(req.params.id)
  .exec()
  .then(highlight => {
    if (!highlight) return res.status(404).render('error', { error: 'No highlight found.' });
    return highlight.remove();
  })
  .then(() => {
    User.findById(res.locals.user._id)
    .exec()
    .then(user => {
      user.highlights.remove(req.params.id);
      user.save();
    });
  })
  .then(() => {
    res.redirect('/highlights');
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
