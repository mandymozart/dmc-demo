/**
 * Your app here
 **/

/**
 * Override the backbone.marionette templatemanager to compile handlebars templates
 */
var HandleBarsTemplateCache = {};
Backbone.Marionette.TemplateManager.loadTemplate = function (templateId, callback) {
    var template = HandleBarsTemplateCache[templateId];

    if (template === undefined) {
        var tpl = $(templateId).html();
        template = HandleBarsTemplateCache[templateId] = Handlebars.compile(tpl);
    }

    callback.call(this, template);
};

/**
 * @class HandleBarsView
 * @extends Backbone.Marionette.ItemView
 */
var HandlebarsView = Backbone.Marionette.ItemView.extend(
    /** @lends HandlebarsView */
    {
        /**
         * Render a template using handlebars. The compiled template is returned by the TemplateManager.
         *
         * @param template the compiled template function
         * @param data the data
         *
         * @return the evaluated template
         */
        renderTemplate: function (template, data) {
            if (!template) {
                var err = new Error("A template must be specified");
                err.name = "NoTemplateError";
                throw err;
            }

            return template(data);
        }
    });

/***************************************************************************
 *
 * The actual application
 *
 ***************************************************************************/

var MainView = HandlebarsView.extend({
    template: "#main-template"
});

var NavigationView = HandlebarsView.extend({
    template: "#navigation-template"
});

var ImpressumView = HandlebarsView.extend({
    template: "#impressum-template"
});

var ReleaseView = HandlebarsView.extend({
    template: "#release-template"
});

var RestinfoView = HandlebarsView.extend({
    template: "#restinfo-template"
});

var AppRouter = Backbone.Marionette.AppRouter.extend({
    appRoutes: {
        "":            "showMain",
        "impressum":   "showImpressum",
        "release":     "showRelease",
        "restinfo":    "showRestinfo"
    }
});

var App = new Backbone.Marionette.Application({
    Views: {
        mainView: new MainView(),
        navigationView: new NavigationView(),
        impressumView: new ImpressumView(),
        releaseView:  new ReleaseView(),
        restinfoView: new RestinfoView
    },

    Routers: {
    }
});

App.addRegions({
    navigationRegion: ".navigation",
    mainRegion: ".container"
});

var AppController = {
    showRestinfo: function () {
        App.mainRegion.show(App.Views.restinfoView);
    },

    showMain: function () {
        App.mainRegion.show(App.Views.mainView);
    },

    showRelease: function () {
        App.mainRegion.show(App.Views.releaseView);
    },

    showImpressum: function () {
        App.mainRegion.show(App.Views.impressumView);
    }
};

App.addInitializer(function (options) {
    this.mainRegion.show(this.Views.mainView);
    this.navigationRegion.show(this.Views.navigationView);

    /* create router */
    this.Routers.appRouter = new AppRouter({controller: AppController});
    if (Backbone.history) {
        Backbone.history.start();
    }
});

App.start({debug: true});