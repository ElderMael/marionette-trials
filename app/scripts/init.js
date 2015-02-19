require.config({
	baseUrl: "/scripts",

	deps: ['application', 'main'],

	shim: {
		lodash: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		bootstrap: {
			deps: ['jquery'],
			exports: 'jquery'
		},
		hbs: {
			deps: ['handlebars.runtime'],
			exports: 'handlebars'
		},
		handlebarsRuntime: {
			exports: 'handlebarsRuntime'
		}
	},

	map: {
		'tmpl': {
			'handlebars': 'hbs'
		}
	},

	paths: {
		jquery: '../lib/jquery/dist/jquery',
		underscore: '../lib/lodash/lodash',
		backbone: '../lib/backbone-amd/backbone',

		'backbone.marionette': '../lib/backbone.marionette/lib/backbone.marionette',

		hbs: 'handlebars.patch',
		'handlebars.runtime': '../lib/handlebars/handlebars.amd',
		text: '../lib/requirejs-text/text',
		tmpl: '../templates/templates',

		bootstrap: '../lib/bootstrap/dist/js/bootstrap',
		core: 'core'
	}
});
