const express             = require('express');
const router              = express.Router();
const highlightController = require('../controllers/highlight');

router.get('/', (req, res) => res.render('statics/home'));

router.route('/highlight')
.get(highlightController.index)
.post(highlightController.create);
router.route('highlight/new')
.get(highlightController.new);
router.route('/highlight/:id')
.get(highlightController.show)
.put(highlightController.update)
.delete(highlightController.delete);
router.route('/highlight/:id/edit')
.get(highlightController.edit);

module.exports = router;
