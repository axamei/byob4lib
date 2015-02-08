module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        compass: {
            options: {
                config: 'config.rb',
                bundleExec: true,
                require: ['singularitygs','breakpoint']
            },
            dist: {
                options: {
                    sassDir: 'scss',
                    cssDir: 'css'
                }
            }
        },

        connect: {
            server: {
                options: {
                    port: 9001,
                    base: '.',
                    livereload: true,
                    open: true
                }
            }
        },

        watch: {
            options: {
                livereload: true
            },
            sass: {
                files: ['scss/**/*.scss'],
                tasks: 'compass'
            },
            html: {
                files: ['index.html']
            }
        }

    });

    // Plug-ins we're using
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Tasks for robots, not humans
    grunt.registerTask('default', ['compass']);
    grunt.registerTask('serve', ['connect', 'watch']);

};
