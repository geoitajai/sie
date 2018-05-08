## Google Sheets QUERY

- Por data, maior igual a data atual
```sql
=QUERY(LAI!A3:P; "where F >= date'"&TEXT(TODAY();"yyyy-mm-dd")&"'AND N IS NOT null AND O IS NOT null"; 0)
```