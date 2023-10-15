const router = require('express').Router();
const mongoose = require('mongoose');
const connection =  require('mongoose').connection;

const fs = require("fs");


console.log('Controller:  '+connection);

    let mProfilesModel = require('../models/mProfiles');

    router.route('/mock').get(function (req, res) {
      //  This is working, http://localhost:8181/api/signup/userprofiles/mock
      fs.readFile("./SAN1001.json", "utf8", (error, data) => {
        if (error) {
          console.log(error);
          return;
        }
        console.log(JSON.parse(data));
        res.status(200).json(JSON.parse(data));
        //res.status(200).json(JSON.stringify(data, null, 2));

      });
  });


      router.route('/').get(function (req, res) {
            //  This is working, http://localhost:8181/api/signup/userprofiles/
            const estimatedDocumentCount = mProfilesModel.estimatedDocumentCount();
              console.log('there are %d estimatedDocumentCount', estimatedDocumentCount);
            const countDocuments =  mProfilesModel.countDocuments();
                       console.log('there are %d countDocuments', countDocuments);
               const count =  mProfilesModel.count();
            mProfilesModel.estimatedDocumentCount({}, function (err, count) {
              console.log('there are %d mprofile users', count);
            });
            mProfilesModel.find({}, function(err, musers) {
            if (err) {
                console.log('error :  '+err)
              res.status(500).send({ message: err });
              return;
            }
            if (musers) {
                console.log('users found');
                res.status(200).json(musers);
                return;
            }
        });
    });


    router.route('/saveUserProfile').post(function (req, res) { // working, http://localhost:8181/api/signup/userprofiles/saveUserProfile
      let users = require('../models/mProfiles');
      /*const { firstName,lastName,middleName,fatherName,motherName,mothersMaiden,height,weight,complexion,gender,bodyType,skinTone,userEmail,
      userPhone,userAdhaar,door,street,area,city,state,country,postalPin,googlePin,facebook,instagram,twitter,userStatus } = req.body;
      let user = new users({ firstName,lastName,middleName,fatherName,motherName,mothersMaiden,height,weight,complexion,gender,bodyType,skinTone,
      userEmail,userPhone,userAdhaar,door,street,area,city,state,country,postalPin,googlePin,facebook,instagram,twitter,userStatus});
      console.log('saveUserProfile, req.body..... '+user);*/
      console.log(req.body);
      let user = new users(req.body);
      user.save(function (err) {
        if (err) return  res.status(400).json('Error: ' + err);
        res.json(user);
      });
    });

    router.route('/updateUserProfile').put(function (req, res) {
        console.log('req.body.firstName..... '+req.body.firstName);

    const { firstName,lastName,middleName,fatherName,motherName,mothersMaiden,height,weight,complexion,gender,bodyType,skinTone,userEmail,userPhone,userAdhaar,door,street,area,city,state,country,postalPin,googlePin,facebook,instagram,twitter,userStatus } = req.body;
    let newUser = new users({ firstName,lastName,middleName,fatherName,motherName,mothersMaiden,height,weight,complexion,gender,bodyType,skinTone,userEmail,userPhone,userAdhaar,door,street,area,city,state,country,postalPin,googlePin,facebook,instagram,twitter,userStatus});

    //const { firstName, middleName, lastName } = req.body;
    //let newUser = new users({firstName,middleName,lastName});

        console.log('userProfile..... '+newUser);

    newUser.save().then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));  
    });

    router.route('/musers/:_id').get(function (req, res) {
          console.log(' userProfileId, req.params._id is '+req.params._id);
          const userProfileId = mongoose.Types.ObjectId(req.params._id);
          console.log(' getLoginDataForUsers..... '+userProfileId);
            mProfilesModel.findById(userProfileId, function (err, userProfile) {        // working, http://localhost:8181/api/signup/userprofiles/musers/634f5afcac9be46e9ae5e79c
                if(err) {
                    console.log('Error occured whilst getting user for _id: '+userProfileId);
                    res.status(400).json('Error: ' + err)
                }
                //console.log('userprofile:  '+userProfile, JSON.stringify(userProfile));
                if(userProfile) {
                    res.status(200).json(userProfile);
                }
            });
      });

  router.route('/:_id').delete(function (req, res) {        //Working, http://localhost:8181/api/signup/userprofiles/634f556bd222536beb13a240
    const userProfileId = req.params._id;
    console.log('Delete User Profile ..... '+userProfileId);
    mProfilesModel.deleteOne({_id: mongoose.Types.ObjectId(userProfileId)}, function(err) {
          if(err) {
            console.log('Error while deleting: '+err);
            res.status(400).json('Error while deleting: '+err);
            return;
          }
          res.status(400).json('Succefully deleted the user profile: '+userProfileId);
      })
      .catch(err => res.status(400).json('Error whilst deleting user: ' + err));  
    });


module.exports = router;
