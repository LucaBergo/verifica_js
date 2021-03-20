const fetch= require("node-fetch")

/*fetch("http://192.168.1.231:8080/accreditamento", {
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



fetch("http://192.168.1.231:8080/esercizi/5", {
        headers: {
          "x-data": "true"
        },
    })
    .then(res => res.json())
    .then(resBody => {
      console.log(resBody)
      
      lista=resBody.data //ricordati di usare lista finale result
      let result=[]

      let lista1=lista.sort(function(a,b){return a-b})
      console.log(lista)

      for (let i=0;i<lista1.length;i++){
          if(i!=0){
              if(lista[i]==lista[i-1]){
                  if(lista[i]!=lista[i+1]){
                      result.push(lista[i])
                  }
              }
          }
      }
      console.log(result)
     




     


      
      //svolgi qua l'es
      

      return fetch("http://192.168.1.231:8080/esercizi/5", {
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
    .catch(err => console.log(err)) 

    //}) //ricordati di togliere quando invii l 'es
