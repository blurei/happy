define(function(require) {
    "use strict";

    var WithCloseableView = {

        close: function() {
            console.log("closing view " + this.cid);

            this.trigger("close");
            
            this.onClose();
            this.remove();
            this.unbind();
        }
        
    };

    return WithCloseableView;
});