function start(scelta){

    document.getElementById('home').classList.remove('d-none');
    document.getElementById('gioco').classList.add('d-none');

    const MOSSE = ['sasso', 'forbice', 'carta'];
    const MOSSA_PC = {
        'sasso': ['PAREGGIO', 'HAI VINTO', 'HAI PERSO'],
        'carta': ['HAI VINTO', 'HAI PERSO', 'PAREGGIO'],
        'forbice': ['HAI PERSO', 'PAREGGIO', 'HAI VINTO']
    }

    let mossa_pc = Math.floor(Math.random() * MOSSE.length);

    let img = 'img/'+MOSSE[mossa_pc]+'.png';
    document.getElementById('ris').innerHTML = '<img src="'+ img +'" alt=""> <h2 style="background-color: rgb(0, 174, 255); border-radius: 25px;"> '+ MOSSA_PC[scelta][mossa_pc] +' </h2>';

}


function home(){
    document.getElementById('home').classList.add('d-none');
    document.getElementById('gioco').classList.remove('d-none');    
}