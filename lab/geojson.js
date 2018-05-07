var mapdot = [
    {
        "type": "Feature",
        "properties": {
            "name": "teste1"
        },
        "geometry": {
            "type":"Point",
            "coordinates": [-48.67327210,-26.91146930]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "teste2"
        },
        "geometry": {
            "type":"Point",
            "coordinates": [-48.67511430,-26.92226570]
        }
    }
];
//console.log(mapdot[0].type);
mapdot[0].crs = { 'type': 'name', 'properties': { 'name': 'urn:ogc:def:crs:EPSG::31982' } }
console.log(mapdot)