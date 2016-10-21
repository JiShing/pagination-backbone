define(['jquery', 'backbone'], function($, Backbone) {
    var ServiceModel = Backbone.Model.extend({
        initialize: function(){},
        load: function(){
            this.trigger('success');
        }
    });
    return ServiceModel;
});