        proj4.defs('EPSG:31982', '+proj=utm +zone=22 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
        var geojson = {
            'type': "FeatureCollection",
            'features': [
			{//01
				'type': 'Feature',
				'geometry': {
					'type': 'Point', 'coordinates': [731065, 7021246]
				},
				'properties': {
					'name': '01'
				},
				'crs': { 'type': 'name', 'properties': { 'name': 'urn:ogc:def:crs:EPSG::31982' } }
			},
			{//02
				'type': 'Feature',
				'geometry': {
					'type': 'Point', 'coordinates': [730860, 7020053]
				},
				'properties': {
					'name': '02'
				}/*,
				'crs': { 'type': 'name', 'properties': { 'name': 'urn:ogc:def:crs:EPSG::31982' } }*/
			}
        ]};
        //aparentemente ele encotra a primeira projeção e utiliza para a camada como um todo.
        console.log(geojson.features['0'].crs);
        //adiciona os parâmetros da projeção a camada.
        geojson.features["0"].crs2 = { 'type': 'name', 'properties': { 'name': 'urn:ogc:def:crs:EPSG::31982' } };
        console.log(geojson);
        L.Proj.geoJson(geojson, {
			'pointToLayer': function (feature, latlng) {
				return L.marker(latlng).bindPopup('teste');
			}
        });.addTo(map);

        //Exemplo com um csv externo.
        //teste csv
		$.ajax({
			type: "GET",
			url: "lab/datasirgas.tsv",
			dataType: "text",
			success: function (data) {
                csv2geojson.csv2geojson(data,
                {
                    latfield: 'latitude',
                    lonfield: 'longitude',
                    delimiter: '\t'
                },
                function(err, data) {
                    proj4.defs('EPSG:31982', '+proj=utm +zone=22 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
                    console.log(data);
                    data.features["0"].crs = { 'type': 'name', 'properties': { 'name': 'urn:ogc:def:crs:EPSG::31982' } }; //parametros da projeção passados para a primeira feição.
                    L.Proj.geoJson(data, {
			            'pointToLayer': function (feature, latlng) {
				            return L.marker(latlng).bindPopup('teste');
			            }
                    }).addTo(map);
                    //L.geoJSON(data).addTo(map);
                    console.log(data);
                });
            }
        });