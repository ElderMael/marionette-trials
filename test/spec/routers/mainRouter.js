(function() {
	'use strict';

	var root = this;

	root.define([
		'routers/mainRouter'
		],
		function( Mainrouter ) {

			describe('Mainrouter Router', function () {

				it('should be an instance of Mainrouter Router', function () {
					var mainRouter = new Mainrouter();
					expect( mainRouter ).to.be.an.instanceof( Mainrouter );
				});

				it('should have more test written', function(){
					expect( false ).to.be.ok;
				});
			});

		});

}).call( this );