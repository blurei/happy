define(function(require) {
    "use strict";

	var warnViewNotClosedProperly = function() {
		console.warn("you may not have unbound event handlers. override onClose to do proper cleanup.")	
	}
	
    var WithCloseableView = {

        close: function() {
            console.log("closing view " + this.cid);

            this.trigger("close");
            
            this.onClose();
            this.remove();
            this.unbind();
        },
        
        onClose: warnViewNotClosedProperly
        
    };

    return WithCloseableView;
});