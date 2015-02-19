define([
	'core',
	'views/siteHeader'
], function(Core, SiteHeader) {
	'use strict';
	var RootLayout = Backbone.Marionette.LayoutView.extend({
			el: 'body',
			template: Core.Templates['app/templates/mainLayout.hbs'],

			regions: {
				header: '#header'
			}
		}),
		App = new Core.Marionette.Application();


	App.addInitializer(function() {
		this.rootView = new RootLayout();
		this.rootView.render();
		this.rootView.getRegion('header').show(new SiteHeader());
	});

	return App;
});
