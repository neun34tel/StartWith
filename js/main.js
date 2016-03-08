/**
 * This is the main entry point of the application
 */
require.config( {
    paths : {
        underscore : '../bower_components/underscore/underscore',
        jQuery     : '../bower_components/jquery/dist/jquery'
    }
} );

require( [ 'app' ], function ( App ) {
} );