let VINCI = 0;

function difficolta(id){
    document.getElementById('gioco').classList.remove('d-none');
    document.getElementById('scelta').classList.add('d-none');
    if(id == 'facile'){
        VINCI = 0.7;
    }
    else if(id == 'medio'){
        VINCI = 0.5;
    }
    else if(id == 'difficile'){
        VINCI = 0.3;
    }
}





function moneta(id){
    let testa = 1;
    if(id == 'testa'){
        document.getElementById(id).classList = 'btn btn-success';
        document.getElementById('croce').classList = 'btn';
    }
    else{
        document.getElementById(id).classList = 'btn btn-success';
        document.getElementById('testa').classList = 'btn';
    }
}



function lancia(){
    document.getElementById('ris').innerHTML = '';
    giocatore = document.getElementsByClassName('btn-success')[1].id;

    let vin = Math.random();
    if(vin <= VINCI){
        if(giocatore == 'testa'){
            document.getElementById('ris').innerHTML = '<h2><img src="img/testa.png" style="width:15%" alt="">  HAI VINTO </h2>';
            let value = document.getElementById('ut').innerHTML;
            document.getElementById('ut').innerHTML = parseInt(value) + 1;
        }
        else{
            document.getElementById('ris').innerHTML = '<h2><img src="img/crecie.png" style="width:15%" alt="">  HAI VINTO </h2>';
            let value = document.getElementById('ut').innerHTML;
            document.getElementById('ut').innerHTML = parseInt(value) + 1;
        }
    }
    else{
        if(giocatore == 'testa'){
            document.getElementById('ris').innerHTML = '<h2><img src="img/crecie.png" style="width:15%" alt="">  HAI PERSO </h2>';
            let value = document.getElementById('co').innerHTML;
            document.getElementById('co').innerHTML = parseInt(value) + 1;
        }
        else{
            document.getElementById('ris').innerHTML = '<h2><img src="img/testa.png" style="width:15%" alt="">  HAI PERSO </h2>';
            let value = document.getElementById('co').innerHTML;
            document.getElementById('co').innerHTML = parseInt(value) + 1;
        }
    }
}