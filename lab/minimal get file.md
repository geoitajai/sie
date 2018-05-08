```javascript
let xhr = new XMLHttpRequest();
xhr.open('GET', 'uk_outline.geojson');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        L.geoJSON(JSON.parse(xhr.responseText)).addTo(map);
    }
};
xhr.send();

//Another example
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
                var arrayWithValues = xhttp.responseText.trim().split('\t');
                console.log(arrayWithValues);
        };
};
xhttp.open("GET", "/some.tsv", true);
xhttp.send();

```