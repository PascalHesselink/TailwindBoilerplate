import Vue from 'vue';

new Vue({
    el: '#app',
    data() {
        return {
            message: 'Tailwind Boilerplate',
            versionMessage: 'Using Tailwind {version}',
            dependenciesMessage: 'Vue, Sass & Laravel-Mix',
            tailwindVersion: '1.0.4',
        };
    },
});
