# music-api
Node.js music-api

Route                 HTTP Verb           Post Body                             Description

/api/music/getAll       GET                   E                                 LIST ALL SONG
/api/music/             POST        title,category,country,year,group,score     ADD SONG
/api/music/:driver_id   GET                   E                                 GET A SONG
/api/music/:driver_id   PUT                                                     UPDATE SONG
/api/music/:driver_id   DELETE                E                                 DELETE SONG
/api/music/top10        GET                   E                                 GET TOP 10 