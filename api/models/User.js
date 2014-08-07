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
        email: { type: 'string' },
        password: { type: 'string' },
        keyId: { type: 'string' },
        vCode: { type: 'string' }
    },

    beforeCreate: function(attrs, next) {

    }
};

