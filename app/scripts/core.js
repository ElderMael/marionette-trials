define([
	'hbs',
	'backbone',
	'backbone.marionette',
	'tmpl'
], function(Handlebars, Backbone, Marionette, JST) {
	return {
		'Handlebars': Handlebars,
		'Backbone': Backbone,
		'Marionette': Marionette,
		'Templates': JST
	};
});
