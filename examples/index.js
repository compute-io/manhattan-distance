'use strict';

var manhattan = require( './../lib' );

var x = new Array( 100 ),
	y = new Array( 100 );

for ( var i = 0; i < x.length; i++ ) {
	x[ i ] = Math.round( Math.random()*10 );
	y[ i ] = Math.round( Math.random()*10 );
}

console.log( manhattan( x, y ) );
