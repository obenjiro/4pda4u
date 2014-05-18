modules.define('i-bem__dom', function (provide, DOM){
	
	DOM.decl('header', {
		onSetMod: {
			'js': function() {
				console.log('yey');
			}
		}
	});

	provide(DOM);
});