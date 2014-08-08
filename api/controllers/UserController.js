/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    'new':function(req,res) {
        res.locals.flash = _.clone(req.session.flash);
        res.view();
        req.session.flash = {};
    },

    create: function(req, res, next) {
        User.create( req.params.all(), function userCreated(err, user) {

            //If there's an error
            //if(err) return next(err);
            if(err){
                console.log(err);
                req.session.flash = {
                    err: err
                }

                return res.redirect('/user/new');
            }

            //After successfully creating the user, redirect to the show action
            res.json(user);
            req.session.flash = {};
        })
    }
};

