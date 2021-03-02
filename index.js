

const fetch= require("node-fetch")

/*fetch("http://localhost:8080/accreditamento", {
    method: "post", //header col metodo della richiesta
    body: JSON.stringify({
      nome: "Luca Bergognoni" //stringify trasforma l'object che passi in una stringa che ha sintassi di un json
    }),
    headers: {
      "Content-Type": "application/json" //definisci che tipo di dato passi
    },
})
.then(res => res.json()) //trasformi la risposta in un json
.then(resBody => console.log(resBody))
.catch(err => console.log(err)) */



fetch("http://localhost:8080/esercizi/12", {
        headers: {
          "x-data": "true"
        },
    })
    .then(res => res.json())
    .then(resBody => {
      console.log(resBody)
      lista=resBody.data //ricordati di usare lista finale result

      //svolgi qua l'es
      

      /*return fetch("http://localhost:8080/esercizi/12", {
        method: "post",
        body: JSON.stringify({
          data: result
        }),
        headers: {
          "Content-Type": "application/json"
        }  
      })
    })
    .then(res => res.json())
    .then(resBody => console.log(resBody))
    .catch(err => console.log(err)) */

    }) //ricordati di togliere quando invii l 'es

  







