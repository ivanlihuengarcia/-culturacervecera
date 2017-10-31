var myvids = [];
var valid = [];
var myvid = document.getElementById('myvideo');
var activeVideo = 0;


function play(){
  myvid.addEventListener('ended', addVideos);
}

function addVideos(e){
  if(activeVideo+1 === myvids.length){
    myvid.removeEventListener('ended', addVideos)
  }
  // update the video source and play
  myvid.src = myvids[activeVideo];
  myvid.play();
  // update the new active video index
  activeVideo = (++activeVideo);
}

function macerar(){
  myvids.push("videos/maceracion.mp4");
  valid.push(1);
  appendInstruction("Macerar");
}
function hervir(){ 
  myvids.push("videos/hervor.mp4");
  valid.push(2);
  appendInstruction("Hervir");
}
function enfriar(){
  myvids.push("videos/enfriado.mp4");
  valid.push(3);
  appendInstruction("Enfriar");
}
function fermentar(){
  myvids.push("videos/fermentacion.mp4");
  valid.push(4);
  appendInstruction("Fermentar");
}
function madurar(){
  myvids.push("videos/maduracion.mp4");
  valid.push(5);
  appendInstruction("Madurar");
}
function embotellar(){
  myvids.push("videos/embotellamiento.mp4");
  valid.push(6);
  appendInstruction("Embotellar");
}

function check(){
  for(var i=0;i<6;++i){
    if(valid[i] != i+1){
      myvids.push("videos/wrong.mp4");
      break;
    }
  }
}

function appendInstruction(text) {
    var node = document.createElement("LI");
    var textnode = document.createTextNode(text);
    node.appendChild(textnode);
    document.getElementById("pasoAPaso").appendChild(node);
}



function KÖLSCHInfo() {
  document.getElementById('cuadro').innerHTML = "Existen muchas cervezas doradas y refrescantes. Pero frutadas y con destellos finales de lúpulo, sólo hay un estilo: la KÖLSCH. En Antares rescatamos la antigua receta de la cerveza favorita de los bebedores en Colonia, Alemania y los horamos desde 1998. En nuestra cocina, su legado sigue intacto.   ALCOHOL: 5,0% | IBU: 22% |   AMARGOR RELATIVO: MODERADO |  O.G: 1.045 |   DORADA-FRESCA-SUAVE-FRUTADA" 

}
function SCOTCHInfo() {
  document.getElementById ('cuadro').innerHTML = "Escocia es tierra de cebada y la Scotch Ale lleva ese paisaje impregnado en su código genético. Rubí intenso. Seis grados de alcoho, dulce y maltosa. Una fórmula, a prueba del paso del tiempo.   ALCOHOL: 6,0% | IBU: 18% |   AMARGOR RELATIVO: BAJO |  O.G: 1056 |   RUBÍ-MALTOSA-FÁCIL DE TOMAR" 
  
}
function PORTERInfo() {
  document.getElementById ('cuadro').innerHTML = "Maltas oscuras. Sabor y aroma penetrante y nocturno. Chocolate, azúcar negro y café. La porter es la cerveza tributo de Antares a la cultura de los primeros pubs en el puerto de Londres.   ALCOHOL: 5,5% | IBU: 27% |   AMARGOR RELATIVO: MODERADO |  O.G: 1.052 |   MARRÓN OSCURA-CHOCOLATE-MALTA TOSTADA" 
  
}
function HONEYBEERInfo() {
  document.getElementById ('cuadro').innerHTML = "Babilonia antigua. Tras la boda, el padre de la novia convida al futuro yerno con cerveza de miel a lo largo de un mes. Así lo dicta la tradición. Nuestra HONEY BEER recoge la historia que dio origen a “luna de miel” y lo celebra con notas mentoladas y frutales. Y, por su puesto, una inmersión de miel pura para abrir los corazones.   ALCOHOL: 7,5% | IBU: 22% |   AMARGOR RELATIVO: BAJO |  O.G: 1.062 |   BRONCE - MIEL - SUAVE - FÁCIL DE TOMAR" 
  
}
function BARLEYWINEInfo() {
  document.getElementById ('cuadro').innerHTML = "De elevada graduación alcohólica, nuestra cerveza vestida de vino. Una hermandad de malta y licor, con rasgos de nuez, caramelo y dulce de leche. BARLEY WINE, cuando la uva se vuelve cebada.   ALCOHOL: 10,0% | IBU: 53% |   AMARGOR RELATIVO: MEDIO |  O.G: 1.090 |   BRONCE - ALCOHOL - FUERTE - CORPULENTA"
  
}
function  IMPERIALSTOUTInfo() {
  document.getElementById ('cuadro').innerHTML = "Catalina la Grande amaba las emociones fuertes. Por eso, la IMPERIAL STOUT, negra y tostada, empapada de alcohol y pasas, amarga y ahumada, era su cerveza favorita. Esencia inglesa de exportación. Timidos, abstenerse.   ALCOHOL: 8,5% | IBU: 49% |   AMARGOR RELATIVO: MEDIO |  O.G: 1.075 |   NEGRA - FUERTE - TOSTADA - LICOROSA - FRUTAS SECAS "
  
}
function INDIAPALEALEInfo() {
  document.getElementById ('cuadro').innerHTML = "De Inglaterra a India hay un largo recorrido. En 1780, Mr. Hodgson descubrió que elevando el lúpulo y la graduación alcohólica, la cerveza llegaba a destino intacta. Bautizó a su fórmula INDIA PALE ALE. En Antares, le sumamos lúpulos americanos con presencia de flores y cítricos. Nuestra cerveza viajera.   ALCOHOL: 6,5% | IBU: 58% |   AMARGOR RELATIVO: ALTO |  O.G: 1.060 |   ÁMBAR - AMARGOR - AROMA CÍTRICO "
  
}
function CREAMSTOUTInfo() {
  document.getElementById ('cuadro').innerHTML = "Es una cerveza negra de origen Irlandés. En ella se descubren sabores de chocolate y nueces en el paladar, con un licoroso y placentero post-gusto. Es muy curpulenta, de espuma cremosa e increíblemente fácil de tomar debido a que posee menos gas carbónico que las cervezas tradicionales.   ALCOHOL: 7,0% | IBU: 35% |   AMARGOR RELATIVO: MODERADO |  O.G: 1.064 |   NEGRO PROFUNDO - CON NITRÓGENO - CREMOSA "
  
}
function PLAYAGRANDEInfo() {
  document.getElementById ('cuadro').innerHTML = "Al elegir una cerveza para verano quisimos una de trigo, porque tienen un toque levemente ácido ideal para acompañar el verano. Creamos un estilo propio a base de trigo con un poco de avena, cáscara de naranja, coriandro y jengibre que la hacen más cítrica, complejo y refrescante. Como es tradicional con las cervezas de trigo, no la filtramos, por que se ve turbia debido a la avena y trigo. Nuestro homenaje a la Playa emblemática de Mar del Plata donde el relax, la práctica de deportes y la diversión son una forma de vida.   ALCOHOL: 5,0% | IBU: 14% |   AMARGOR RELATIVO: BAJO |  O.G: 1.046 |   DORADA - TURBIA - TRIGO - CÍTRICA - REFRESCANTE "
  
}
function SUDESTADAInfo() {
 document.getElementById ('cuadro').innerHTML = "Llego el otoño. En Mar del Plata es sinónimo de Sudestada: viento, frío, las mejores olas. Una cerveza ámbar profundo estilo American Red Ale, con aromas y sabores a caramelos que se entrelazan con los cítricos y resinosos que aporta el lúpulo, la compañía ideal para la estación.   ALCOHOL: 4,5% | IBU: 25% |   AMARGOR RELATIVO: MODERADO |  O.G: 1.045 |    OTOÑO - ÁMBAR - LÚPULO "
 
}
function CARAVANAInfo() {
  document.getElementById ('cuadro').innerHTML = "Llega la primavera. Cambiamos la ropa, hacemos más deporte. El lúpulo empieza a brotar apasionado. En Mar del Plata sacamos la bicicleta y salimos en Caravana. Una cerveza con alcohol bajo y muchísimo aroma y sabor a lúpulo, inspirada en las Session IPA americanas. Para refrescarnos y seguir pedaleando.   ALCOHOL: 4,2% | IBU: 30% |   AMARGOR RELATIVO: MEDIO |  O.G: 1.040 |    MUCHÍSIMO AROMA - BAJO ALCOHOL - SABOR A LÚPULO"

}


