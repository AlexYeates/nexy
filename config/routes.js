const express                = require('express');
const router                 = express.Router();
const highlightController    = require('../controllers/highlight');
const registrationController = require('../controllers/registrations');
const sessionsController     = require('../controllers/sessions');

function secureRoute(req, res, next) {
  if (!req.session.userId) {
    return req.session.regenerate(() => {
      req.flash('danger', 'You have to be loggin in to do that...');
      req.redirect('/login');
    });
  }
  next();
}

router.get('/', (req, res) => res.render('statics/home'));

router.route('/highlight')
  .get(highlightController.index)
  .post(secureRoute, highlightController.create);
router.route('/highlight/:id')
  .delete(secureRoute, highlightController.delete);
  
router.route('/register')
.get(registrationController.new)
.post(registrationController.create);

router.route('/login')
.get(sessionsController.new)
.post(sessionsController.create);

router.route('/logout')
.get(sessionsController.delete);

module.exports = router;
