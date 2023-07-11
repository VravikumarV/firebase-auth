const mongoose = require('mongoose');

const muserSchema = new mongoose.Schema({
        name: String,
        fatherName: String,
        motherName: String,
        familyName: String,
        maidenName: String,
        gothram: String,
        sakha: String,
        tob: String,
        dob: String,
        pob: String,
        birthStar: String,
        height: String,
        education: String,
        jobOccupation: String,
        company: String,
        salaray: String,
        areaBelongsTo: String,
        requirements: String,
        contactNumber: String,
        altContactNumber: String,
        siblings: String
});

/*muserSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `userprofiles/musers/${this._id}`;
});*/

  const mProfilesModel = mongoose.model('bride_groom_profiles', muserSchema);

  module.exports = mProfilesModel;