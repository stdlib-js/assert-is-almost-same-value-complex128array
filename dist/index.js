/** @license Apache-2.0 */

'use strict';

/**
* Test if two arguments are both Complex128Arrays and contain respective elements which are approximately the same value within a specified number of ULPs (units in the last place).
*
* @module @stdlib/assert-is-almost-same-value-complex128array
*
* @example
* var Complex128Array = require( '@stdlib/array-complex128' );
* var isAlmostSameValueComplex128Array = require( '@stdlib/assert-is-almost-same-value-complex128array' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var y = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
*
* var out = isAlmostSameValueComplex128Array( x, y, 0 );
* // returns true
*
* @example
* var Complex128Array = require( '@stdlib/array-complex128' );
* var isAlmostSameValueComplex128Array = require( '@stdlib/assert-is-almost-same-value-complex128array' );
*
* var x = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0 ] );
* var y = new Complex128Array( [ 1.0, 2.0, 4.0, 4.0 ] );
*
* var out = isAlmostSameValueComplex128Array( x, y, 1 );
* // returns false
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
