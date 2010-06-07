/**
    Copyright (C) 2010 Massimo Santini

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
**/

function init() {
	var metadata = loadMetadata();
	points = metadata.getElementsByTagName('Point');
	for ( var i = 0; i < points.length ; i++ ) disegna( points[ i ] );
}

function disegna( point ) {
	lat_lng = point.firstChild.firstChild.nodeValue.split( ',' );
	title = point.parentNode.getElementsByTagName( 'name' )[ 0 ].firstChild.nodeValue;
	description = point.parentNode.getElementsByTagName( 'description' )[ 0 ].firstChild.nodeValue;
	src = "/img/" + parseInt( point.parentNode.attributes.getNamedItem('xml:id').value.split( '_' )[ 1 ] );
	marker( new Point( lat_lng[ 0 ], lat_lng[ 1 ] ), title, description, src );
}