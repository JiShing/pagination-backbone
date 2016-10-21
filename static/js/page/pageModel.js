define(['jquery', 'backbone'], function($, Backbone) {
    var PageModel = Backbone.Model.extend({
        defaults: function(){
            return {
                current: 1,
                total: 1
            }
        },
        initialize: function(){},
        load: function(data){
            this.set(data);
            this.trigger('loaded');
        },
        prev: function(){
            this.go(this.get('current') - 1);
        },
        next: function(){
            this.go(this.get('current') + 1);
        },
        go: function(pageNum){
            pageNum = parseInt(pageNum) || 1;
            if(pageNum < 1 || pageNum > this.get('total')){
                this.trigger('error');
            } else {
                this.set('current', pageNum, {silent: true});
                this.trigger('jump');
            }
        }
    });
    return PageModel;
});