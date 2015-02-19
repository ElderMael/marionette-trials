define([
	'core'
], function(Core) {
	'use strict';

	return Core.Marionette.ItemView.extend({
		template: Core.Templates['app/templates/siteHeader.hbs']
	});
});
