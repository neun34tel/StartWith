/**
 * Created by Kay on 3/7/2016.
 */
require( 'jquery' );
console.log( 'app.js, Model definition' );
module.exports = Backbone.Model.extend( {
    defaults : {
        name : 'Kay',
        lastName : 'Peikert'
    }
} );