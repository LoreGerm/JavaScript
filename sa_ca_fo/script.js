function start(scelta){

    document.getElementById('home').classList.remove('d-none');
    document.getElementById('gioco').classList.add('d-none');

    const VIT_UT = 0;
    const VIT_PC = 1;
    const PARI = 2;

    const MOSSE = ['sasso', 'forbice', 'carta'];
    const MOSSA_PC = {
        'sasso': ['PAREGGIO', 'HAI VINTO', 'HAI PERSO'],
        'carta': ['HAI VINTO', 'HAI PERSO', 'PAREGGIO'],
        'forbice': ['HAI PERSO', 'PAREGGIO', 'HAI VINTO']
    }

    let mossa_pc = Math.floor(Math.random() * MOSSE.length);
    let ris = MOSSA_PC[scelta][mossa_pc]

    let x = 'img/'+MOSSE[mossa_pc]+'.png';
    document.getElementById('ris').innerHTML = '<img src="'+x+'" alt=""> <h2 style="background-color: rgb(0, 174, 255);"> '+ ris +' </h2>';

}


function home(){
    document.getElementById('home').classList.add('d-none');
    document.getElementById('gioco').classList.remove('d-none');    
}