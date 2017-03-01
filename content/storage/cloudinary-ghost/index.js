/**
 * Created by Huang on 2017/3/1.
 */
var Promise = require('bluebird');
var cloudinary = require('cloudinary');
var util = require('util');

baseStore = require('../../../core/server/storage/base');

function Cloudinary(config){
    baseStore.call(this);
    this.config = config || {};
    cloudinary.config(config);
}

util.inherits(Cloudinary,baseStore);

Cloudinary.prototype.save = function(image){

    return new Promise(function(resolve){
        cloudinary.uploader.upload(image.path, function(result) {
            resolve(result.url);
        });
    });
};

Cloudinary.prototype.delete = function (){
    //delete will not be called in this function
    //TODO: Maybe just return a true Promise?
    return new Promise(function (resolve) {
        resolve(true);
    });
};

Cloudinary.prototype.serve = function(){
    //doesn't need to serve anything(absolute URL)
    //passthrough express framework
    return function (req, res, next) {
        next();
    };
};

Cloudinary.prototype.exists = function(filename){
    //right now won't be called.So resolve false
    //TODO : 1. manage to convert filename to id, and query id on cloudinary
    return new Promise(function (resolve) {
        resolve(false);
    });
};

module.exports = Cloudinary;
