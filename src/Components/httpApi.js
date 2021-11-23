
// esta es una funcion asincrona la cual usaremos más de una vez en la aplicación porlo cual decidimos añadirla como una funcion importada

//La api nececita de un codigo de autenticacion para funcionar
 export async function getApi(path) {
  return fetch("https://api.themoviedb.org/3" + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMTlmMzgxZGQ3YjY3ZWVlMWVhOGI4MTY0YSIsInN1YiI6IjVlM2ExNmU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93tbzr6-rxD0760tssAAaSppyjRv9anArs",
      "Content-Type": "application/json;charset=utf-8",//codigo de autenticacion
    },
  }).then((result) => result.json());
}
