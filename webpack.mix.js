let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');

require('laravel-mix-purgecss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('src/js/app.js', 'dist/js')
    .sass('src/sass/app.scss', 'dist/css')
    .options({
        processCssUrls: false,
        postCss: [tailwindcss('tailwind.js')],
    })
    .copy('src/img/', 'dist/img/');

if (mix.inProduction()) {
    mix.purgeCss({
        extensions: ['js', 'vue'],
        folders: ['src/js/', 'src/sass/'],
    });
}
