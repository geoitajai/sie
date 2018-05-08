## Google Sheets QUERY

- Por data, maior igual a data atual:
```sql
=QUERY(LAI!A3:P; "where F >= date'"&TEXT(TODAY();"yyyy-mm-dd")&"'AND N IS NOT null AND O IS NOT null"; 0)
```
- Múltiplas planilhas externas:

```sql
=QUERY ({importrange("1SC0LkbYc0_q_1Xba0RLtkjsthRSpyrLO_jw6FTCKVIc","'LAI'!A2:L");
importrange("1SC0LkbYc0_q_1Xba0RLtkjsthRSpyrLO_jw6FTCKVIc","'LAP'!A2:L");
importrange("1SC0LkbYc0_q_1Xba0RLtkjsthRSpyrLO_jw6FTCKVIc","'AUA'!A2:L");
importrange("1SC0LkbYc0_q_1Xba0RLtkjsthRSpyrLO_jw6FTCKVIc","'AuC'!A2:L");
importrange("1SC0LkbYc0_q_1Xba0RLtkjsthRSpyrLO_jw6FTCKVIc","'LAO'!A2:L");
importrange("1SC0LkbYc0_q_1Xba0RLtkjsthRSpyrLO_jw6FTCKVIc","'Lic.Munic.'!A2:L");
importrange("1SC0LkbYc0_q_1Xba0RLtkjsthRSpyrLO_jw6FTCKVIc","'DANC'!A2:L");
importrange("1SC0LkbYc0_q_1Xba0RLtkjsthRSpyrLO_jw6FTCKVIc","'Certidão'!A2:L")
}; "select Col1, Col11, Col12 where Col11 is not null and Col12 is not null label Col1 'nome', Col11 'latitude', Col12 'longitude'", 0)
```