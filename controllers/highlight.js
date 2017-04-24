const Highlight = require('../models/highlight');
const User      = require('../models/user');

function highlightIndex(req, res) {
  Highlight
    .find()
    .exec()
    .then(highlight => {
      res.render('highlight/index', { highlight });
    })
    .catch(err => {
      res.status(500).render('error', { error: err });
    });
}

function highlightShow(req, res) {
  Highlight
  .findById(req.params.id)
  .exec()
  .then(highlight => {
    if (!highlight) return res.status(404).render('error', { error: 'No highlight found.' });
    res.render('highlight/show', { highlight });
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

function highlightEdit(req, res) {
  Highlight
  .findById(req.params.id)
  .exec()
  .then(highlight => {
    if (!highlight) return res.status(404).render('error', { error: 'No highlight found.' });
    res.render('highlight/edit', { highlight });
  })
  .catch(err => {
    res.status(500).render('error', { error: err });
  });
}

function highlightUpdate(req, res) {
  Highlight
  .findById(req.params.id)
  .exec()
  .then(highlight => {
    if (!highlight) return res.status(404).render('error', { error: 'No highlight found.' });

    for (const field in req.body) {
      highlight[field] = req.body[field];
    }
    return highlight.save();
  })
  .then(highlight => {
    res.redirect(`/highlight/${highlight.id}`);
  })
  .catch(err => {
    res.status(500).render('error', { error: err });
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
  show: highlightShow,
  create: highlightCreate,
  edit: highlightEdit,
  update: highlightUpdate,
  delete: highlightDelete
};
