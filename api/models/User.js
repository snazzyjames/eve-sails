/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {
        email: {
            type: 'string',
            required: true,
            email: true,
            unique: true
        },
        password: { type: 'string' },
        keyid: {
            type: 'string',
            unique: true
        },
        vcode: {
            type: 'string',
            unique: true
        }
    },
};

