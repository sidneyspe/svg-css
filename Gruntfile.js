/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    meta: {
      version: '0.1.0'
    },
    grunticon: {
      icons: {
        files: [{
          expand: true,
          cwd: 'icons/source',
          src: ['*.svg', '*.png'],
          dest: "icons/output"
        }],
        options: {
          previewTemplate: 'template/preview.hbs',
          cssprefix: ".icon-",
          datasvgcss: "icons-svg.css",
          datapngcss: "icons-png.css",
          defaultWidth: "40px",
          defaultHeight: "40px"
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-grunticon');

  // Default task.
  grunt.registerTask('default', ['grunticon:icons']);

};
