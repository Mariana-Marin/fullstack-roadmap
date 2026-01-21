const xmlhttprequest = require ("xmlhttprequest")
const API = "http://api.escuelajs.co/api/v1"

function fetchData(urlApi, callback){
    let xhttp = new xmlhttprequest();

    xhttp.open("GET", urlApi, true)
    xhttp.onreadystatechange = function(event){
        if(xhttp.readyState === 4){
            
        }
    }
}