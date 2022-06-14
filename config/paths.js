const path = require('path')

module.exports = {
    // Source files
    src: path.resolve(__dirname, '../src'),

    // App files
    app: path.resolve(__dirname, '../src/app'),

    // Components
    components: path.resolve(__dirname, '../src/app/components'),

    // Elements
    UI: path.resolve(__dirname, '../src/app/componentsUI'),

    // Icons
    icons: path.resolve(__dirname, '../src/app/images/icons'),

    // Store
    store: path.resolve(__dirname, '../src/app/store'),

    // Api
    api: path.resolve(__dirname, '../src/app/api'),



    // Production build files
    build: path.resolve(__dirname, '../dist'),

    // Static files that get copied to build folder
    public: path.resolve(__dirname, '../public'),
}