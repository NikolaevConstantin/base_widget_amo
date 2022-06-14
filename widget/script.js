window.reactBaseWidget = {};
window.reactBaseWidget.sourceUrl = 'http://localhost:8081/';
window.reactBaseWidget.productSysname = 'reactBaseWidget';

define([
    "jquery",
    window.reactBaseWidget.sourceUrl + 'main.bundle.js',
], function(mainBundle) {
    const Widget = function () {

        const self = this;              // для доступа к объекту из методов
        self.system = this.system();    //Данный метод возвращает объект с переменными системы.
        self.langs = this.langs;        //Объект локализации с данными из файла локализации (папки i18n)

        /*Init App*/
        const App = window.appWidget;
        console.log('React app:');
        console.log(App);

        /** @private **/
        this.callbacks = {
            render: function() {
                console.log('render');
                App.render(self);
                return true;
            },
            init: function () {
                console.log('init');
                App.init(self);
                return true;
            },
            bind_actions: function () {
                App.bind_actions(self);
                return true;
            },
            settings: function () {
                console.log('settings');
                App.settings(self);
                return true;
            },
            dpSettings: function () {
                console.log('dpSettings');
                App.dpSettings(self);
            },
            advancedSettings: function () {
                console.log('advancedSettings');
                App.advancedSettings(self);
                return true;
            },
            onSave: function () {
                App.onSave(self);
                return true;
            },
            destroy: function() {
                App.destroy(self);
                return true;
            }
        };

        return this;

    };

    return Widget;

});
