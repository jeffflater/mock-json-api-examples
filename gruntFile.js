/**
 * Created by flaterje on 7/29/2014.
 */
module.exports = function(grunt) {

    grunt.task.loadNpmTasks('grunt-mock-json-api');

    // Project configuration.
    grunt.initConfig({
        mockjsonapi: {
            clean: {
                jsonStore: 'test/data/store.json'
            },
            test: {
                mocks: [
                    'test/mocks/'
                ]
            },
            docs: {
                publish: 'test/apidocs/'
            }
        }
    });

    grunt.registerTask('default', ['mockjsonapi:clean', 'mockjsonapi:test', 'mockjsonapi:docs']);

};