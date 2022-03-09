function start(scelta){

    document.getElementById('home').classList.remove('d-none');
    document.getElementById('gioco').classList.add('d-none');

    let risultato = Math.floor(Math.random() * 3);
    const SASSO = 0;
    const FORBI = 1;
    const CARTA = 2;

    
    if(scelta == SASSO){
        if(risultato == SASSO){
            document.getElementById('ris').innerHTML = '<img src="img/sasso.png" alt=""> <h2>HAI PAREGGIATO </h2>';
        }
        else if(risultato == FORBI){
            document.getElementById('ris').innerHTML = '<img src="img/forbice.png" alt=""> <h2>HAI VINTO </h2>';
        }
        else{
            document.getElementById('ris').innerHTML = '<img src="img/carta.png" alt=""> <h2>HAI PERSO </h2>';
        }
    }
    else if(scelta == FORBI){
        if(risultato == SASSO){
            document.getElementById('ris').innerHTML = '<img src="img/sasso.png" alt=""> <h2>HAI PERSO </h2>';
        }
        else if(risultato == FORBI){
            document.getElementById('ris').innerHTML = '<img src="img/forbice.png" alt=""> <h2>HAI PAREGGIATO </h2>';
        }
        else{
            document.getElementById('ris').innerHTML = '<img src="img/carta.png" alt=""> <h2>HAI VINTO </h2>';
        }
    }
    else if(scelta == CARTA){
        if(risultato == SASSO){
            document.getElementById('ris').innerHTML = '<img src="img/sasso.png" alt=""> <h2>HAI VINTO </h2>';
        }
        else if(risultato == FORBI){
            document.getElementById('ris').innerHTML = '<img src="img/forbice.png" alt=""> <h2>HAI PERSO </h2>';
        }
        else{
            document.getElementById('ris').innerHTML = '<img src="img/carta.png" alt=""> <h2>HAI PAREGGIATO </h2>';
        }

    }
}

function home(){

    document.getElementById('home').classList.add('d-none');
    document.getElementById('gioco').classList.remove('d-none');    
}