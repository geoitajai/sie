let mapdot = {
    "features": [
        {
            "type": "Feature",
            "properties": {
                "name": "teste1"
            },
            "geometry": {
                "type":"Point",
                "coordinates": [7021246,731065]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "teste2"
            },
            "geometry": {
                "type":"Point",
                "coordinates": [7020053,-26.92226570]
            }
        }],
    "type": "FeatureCollection",
    "crs": {
        "type": "name",
        "properties":{
            "name":"urn:ogc:def:crs:EPSG::31982"
        }
    }
};
//console.log(mapdot[0].type);
//mapdot[0].crs = { 'type': 'name', 'properties': { 'name': 'urn:ogc:def:crs:EPSG::31982' } }
console.log(mapdot)