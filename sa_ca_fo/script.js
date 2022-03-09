function start(scelta){

    document.getElementById('home').classList.remove('d-none');
    document.getElementById('gioco').classList.add('d-none');

    let risultato = Math.floor(Math.random() * 3);
    const SASSO = 0;
    const FORBI = 1;
    const CARTA = 2;

/*
    if(scelta == risultato){
        let src ='img/' + document.getElementById(scelta).value + '.png';
        document.getElementById('ris').innerHTML = '<img src="' + src + '" alt=""> <p> PAREGGIO </p>';
    }
    
*/
    if(scelta == SASSO){
        if(risultato == SASSO){
            document.getElementById('ris').innerHTML = '<img src="img/sasso.png" alt=""> <p> PAREGGIO </p>';
        }
        else if(risultato == FORBI){
            document.getElementById('ris').innerHTML = '<img src="img/forbice.png" alt=""> <p> VINTO </p>';
        }
        else{
            document.getElementById('ris').innerHTML = '<img src="img/carta.png" alt=""> <p> PERSO </p>';
        }
    }
    else if(scelta == FORBI){
        if(risultato == SASSO){
            document.getElementById('ris').innerHTML = '<img src="img/sasso.png" alt=""> <p> PERSO </p>';
        }
        else if(risultato == FORBI){
            document.getElementById('ris').innerHTML = '<img src="img/forbice.png" alt=""> <p> PAREGGIO </p>';
        }
        else{
            document.getElementById('ris').innerHTML = '<img src="img/carta.png" alt=""> <p> VINTO </p>';
        }
    }
    else if(scelta == CARTA){
        if(risultato == SASSO){
            document.getElementById('ris').innerHTML = '<img src="img/sasso.png" alt=""> <p> VINTO </p>';
        }
        else if(risultato == FORBI){
            document.getElementById('ris').innerHTML = '<img src="img/forbice.png" alt=""> <p> PERSO </p>';
        }
        else{
            document.getElementById('ris').innerHTML = '<img src="img/carta.png" alt=""> <p> PAREGGIO </p>';
        }

    }
}

function home(){

    document.getElementById('home').classList.add('d-none');
    document.getElementById('gioco').classList.remove('d-none');    
}