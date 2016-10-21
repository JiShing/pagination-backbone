define(['jquery', 'backbone', 'template'], function($, Backbone, Template) {
    var PageView = Backbone.View.extend({
        el: '.pagination',
        template: Template('pagination-template'),
        events: {
            'click .prev': 'prev',
            'click .next': 'next',
            'click .quick-jump .confirm': 'quickJump',
            'click .page-jump .num': 'pageJump'
        },
        initialize: function(){
            this.listenTo(this.model, 'loaded', this.render);
            this.listenTo(this.model, 'jump', this.render);
            this.listenTo(this.model, 'error', this.showError);
        },
        render: function(){
            this.$el.empty();
            this.$el.html(this.template(this.model.toJSON()));
        },
        prev: function(){
            this.model.prev();
        },
        next: function(){
            this.model.next();
        },
        quickJump: function(){
            var pageNum = this.$el.find('.go-to').val();
            this.model.go(pageNum);
        },
        pageJump: function(e){
            var pageNum = $(e.currentTarget).text();
            this.model.go(pageNum);
        },
        showError: function(){
            this.$el.find('.go-to').val(this.model.get('current'));
            alert('wrong page number!');
        }
    });
    return PageView;
});