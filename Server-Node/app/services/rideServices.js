'use strict';

const mongoose = require('mongoose');
const Ride = mongoose.model('Ride');


exports.save = function(params){
   
    const newRide = new Ride(ride);
    const promise = newRide.save();
    
    return promise;
}

exports.saveRide = function(ride){
    const newRide = new Ride(ride);
    const promise = newRide.save();
    
    return promise;
}

exports.get = function(username){
    const promise = Ride.findById(id).exec();
    return promise;
}

exports.searchUserRides = function(username){
    const promise = Ride.find({
        username: {$eq: username}
    }).exec();

    return promise;
}



