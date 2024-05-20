//Selectores
const canchafutbol = document.getElementById("canchafutbol");
const canchasintetica = document.getElementById("canchasintetica");
const canchavoley = document.getElementById("canchavoley");
const canchabasket = document.getElementById("canchabasket");
const biblioteca = document.getElementById("biblioteca");
const humanitas = document.getElementById("humanitas");
const aleteia = document.getElementById("aleteia");
const kabai = document.getElementById("kabai");
const dabar = document.getElementById("dabar");
const porteria = document.getElementById("porteria");
const buenanueva = document.getElementById("buenanueva");
const kiosco = document.getElementById("kiosko");

//Modales
var canchafutbolModal = new bootstrap.Modal(document.getElementById('canchafutbolModal'), {
    keyboard: false
  })

var buenanuevaModal = new bootstrap.Modal(document.getElementById('buenanuevaModal'), {
    keyboard: false
  })

  var dabarModal = new bootstrap.Modal(document.getElementById('dabarModal'), {
    keyboard: false
  })

  var kabaiModal = new bootstrap.Modal(document.getElementById('kabaiModal'), {
    keyboard: false
  })

  var aleteiaModal = new bootstrap.Modal(document.getElementById('aleteiaModal'), {
    keyboard: false
  })

  

  var bibliotecaModal = new bootstrap.Modal(document.getElementById('bibliotecaModal'), {
    keyboard: false
  })

  var humanitasModal = new bootstrap.Modal(document.getElementById('humanitasModal'), {
    keyboard: false
  })


  var porteriaModal = new bootstrap.Modal(document.getElementById('porteriaModal'), {
    keyboard: false
  })

 

  var kioscoModal = new bootstrap.Modal(document.getElementById('kioscoModal'), {
    keyboard: false
  })


//Listeners

canchafutbol.addEventListener('click', ()=> canchafutbolModal.toggle());
canchasintetica.addEventListener('click',()=> canchafutbolModal.toggle());
canchavoley.addEventListener('click',()=> canchafutbolModal.toggle());
canchabasket.addEventListener('click',()=> canchafutbolModal.toggle());
buenanueva.addEventListener('click',()=> buenanuevaModal.toggle());
dabar.addEventListener('click',()=> dabarModal.toggle());
kabai.addEventListener('click',()=> kabaiModal.toggle());
aleteia.addEventListener('click',()=> aleteiaModal.toggle());
biblioteca.addEventListener('click',()=> bibliotecaModal.toggle());
humanitas.addEventListener('click',()=> humanitasModal.toggle());
porteria.addEventListener('click',()=> porteriaModal.toggle());
kiosco.addEventListener('click',()=> kioscoModal.toggle());

//funciones





