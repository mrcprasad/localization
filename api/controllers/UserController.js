/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	'user':function(req,res){
     var lang = res.getLocale();
		 if(lang === "en"){
			 req.setLocale('es');
		 }else{
			 req.setLocale('en');
		 }

		 res.view();
	},

	'home':function(req,res){
     var lang = res.getLocale();
		 if(lang === "en"){
			 req.setLocale('es');
		 }else{
			 req.setLocale('en');
		 }

		 res.redirect('/');
	}
};
