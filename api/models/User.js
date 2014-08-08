/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {
        id: {
            type: 'int',
            primaryKey: true,
            unique: true
        },
        email: {
            type: 'string',
            required: true,
            email: true,
            unique: true
        },
        password: { type: 'string' },
        keyId: {
            type: 'string',
            unique: true
        },
        vCode: {
            type: 'string',
            unique: true
        }
    },

    beforeCreate: function(attrs, next) {

    },

    toJSON: function() {
        var obj = this.toObject();
        delete obj.passsword;
        delete obj.confirmation;
        delete obj.encryptedPassword;
        delete obj._csrf;
        return obj;
    }
};

