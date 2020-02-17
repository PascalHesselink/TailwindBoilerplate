import Vue from 'vue';

new Vue({
    el : '#app',
    data() {
        return {
            links : [
                {
                    name : 'Tailwind',
                    url  : 'https://tailwindcss.com/'
                },
                {
                    name : 'Vue.js',
                    url  : 'https://vuejs.org/'
                },
                {
                    name : 'Sass',
                    url  : 'https://sass-lang.com/'
                },
                {
                    name : 'Laravel Mix',
                    url  : 'https://laravel.com/docs/6.x/mix'
                },
                {
                    name : 'PurgeCSS',
                    url  : 'https://purgecss.com/'
                }
            ]
        }
    }
});
