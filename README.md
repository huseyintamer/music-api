Nodejs, Express, Mongodb music-api
# music-api
| Route                 | HTTP Verb           | Post Body                             | Description| 
| --- | --- | --- | --- |
| /api/musics/             | `GET`                   | E                                 | LIST ALL SONG| 
| /api/musics/             | `POST`        | title,category,country,year,group,score     | ADD SONG| 
| /api/musics/:music_id    | `GET`                   | E                                 | GET A SONG| 
| /api/musics/:music_id    | `PUT`                                                       | UPDATE SONG| 
| /api/musics/:music_id    | `DELETE`                | E                                 | DELETE SONG| 
| /api/musics/top10        | `GET`                   | E                                 | GET TOP 10 | 
| /api/musics/between/:start_year/:end_year | `GET`  | E                                 | musics between years| 