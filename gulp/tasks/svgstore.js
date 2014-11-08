/**
 * Creates an SVG Store
 * and store it in Kirby's snippet dir
 * for easy insertion where needed
 */

 var  gulp         = require('gulp'),
      config       = require('../config').svgstore,
      errorHandler = require('../util/errorHandler');

gulp.task('svgstore', ['svgo'], function() {

    return gulp.src(config.src)

        .pipe(plugins.svgstore({
            fileName: 'sprites.svg',
            prefix: 'icon-',
            inlineSvg: true,
            transformSvg: function (svg, done) {
                svg.attr('style', 'display:none');
                svg.find('[fill]').removeAttr('fill');
                done(null, svg);
            }
        }))

        .on('error', errorHandler)

        .pipe(gulp.dest(config.dest))
});
