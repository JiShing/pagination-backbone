require.config({
    baseUrl: 'static/js/',
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        template: {
            exports: 'Template'
        }
    },
    paths: {
        jquery: 'lib/jquery',
        underscore: 'lib/underscore',
        backbone: 'lib/backbone',
        template: 'lib/template-native-debug',
        PageModel: 'page/pageModel',
        PageView: 'page/pageView',
        ServiceModel: 'service/serviceModel'
    }
});
require(['jquery', 'PageModel', 'PageView', 'ServiceModel'], function($, PageModel, PageView, ServiceModel){
    var serviceModel = new ServiceModel;
    var pageModel = new PageModel;
    var pageView = new PageView({model: pageModel});
    pageModel.on('jump', function(){
        serviceModel.load();
    });
    serviceModel.on('success', function(){
        console.log('success!');
    });
    pageModel.load({
        current: 1,
        total: 20
    });
});