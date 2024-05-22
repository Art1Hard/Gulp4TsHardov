import browserify from "browserify";
import source from "vinyl-source-stream";
import bufer from "vinyl-buffer";
import tsify from "tsify";
import terser from "gulp-terser";
import sourceMaps from "gulp-sourcemaps";

export const ts = () => {
	return browserify({
		basedir: ".",
		debug: true,
		entries: [app.path.src.ts],
		cache: {},
		packageCache: {},
	})
		.plugin(tsify)
		.bundle()
		.pipe(source("app.min.js"))
		.pipe(bufer())
		.pipe(app.plugins.if(app.isDev, sourceMaps.init({ loadMaps: true })))
		.pipe(terser())
		.pipe(app.gulp.dest(app.path.build.js))
		.pipe(app.plugins.browsersync.stream());
}