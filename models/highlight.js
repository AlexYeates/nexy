const mongoose = require('mongoose');

const highlightSchema = new mongoose.Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String, required: true }
});

highlightSchema.statics.findOneOrCreate = function(condition, data) {
  const model = this;

  return new Promise((resolve, reject) => {
    model.findOne(condition, (err, result ) => {
      if (err) return reject(err);
      if (result) return resolve(result);
      model.create(data, (err, result) => {
        if (err) return reject(err);
        return resolve(result);
      });
    });
  });
};

module.exports = mongoose.model('Highlight', highlightSchema);
