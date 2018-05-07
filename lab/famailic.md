**Email 25/04**

>Bom dia Jaceguay,
>
>conforme conversamos segue a relação dos demais tipos de licenças que irão constar na tabela e para a criação dos ícones:
>
>- AUA
>- AuC
>- LAP
>- LAI (já consta)
>- LAO
>- Licença Municipal
>- DANC
>- Certidão
>
>Fico no aguardo para a criação do mapa base para os dados da FAMAI no servidor, e do usuário do Postgis, caso necessário mais alguma informação fico à disposição também.
>
>Atenciosamente,
>
>--
>Marcelo Eduardo Bauke
>Analista Ambiental - Engenheiro Ambiental
>Fundação do Meio Ambiente de Itajaí - FAMAI

## Tabela

[Tabela principal](https://drive.google.com/open?id=1i5fubeyqduQXZaofCW61X26WLGg3Whcvy_F0nc7Vpm4)
[Tabela auxiliar](https://drive.google.com/open?id=1UFENbUDWuOTiQpmpgrbzkIhwvW5JhVVVNx2XgxynoRM)

## Colunas

| id | tipolic | num | ano | dataemi | datavali	| nproc	| ativtipo |  ativdescr | req	| end	| bairro | analista	| longitude	| latitude | sirgaslat	| sirgaslong |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |

## Mapa

## SQL notepad

```sql
=QUERY (importrange("1SC0LkbYc0_q_1Xba0RLtkjsthRSpyrLO_jw6FTCKVIc";"'LAI'!B2:M"); "select * where Col11 is not null or Col12 is not null label Col1 'num', Col2 'dataemi', Col3 'datavali', Col4 'nproc', Col5 'ativtipo', Col6 'ativdescr', Col7 'req', Col8 'end', Col9 'bairro', Col10 'analista', Col11 'latitude', Col12 'longitude'"; 0)


```