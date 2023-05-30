/**
 * Convierte unidades en metros, pulgadas, pies y yardas
 * @method cambiarUnidades
 * @param {string} id - Id del elemento input del html
 * @param {number} valor - Contiene el valor del input que ingresa el usuartio
 */

function cambiarUnidades (id,valor){
    if (id=="metro"){
        document.unidades.unid_pulgada.value = valor*39.37;
        document.unidades.unid_pie.value = valor*3.28;
        document.unidades.unid_yarda.value = valor*1.09;
    }
    if (isNaN(valor)){
        alert ("El valor ingresado debe ser un número");
        document.unidades.unid_pulgada.value = "";
        document.unidades.unid_pie.value = "";
        document.unidades.unid_yarda.value = "";
    }
}

function convertirAngulos (id){
    if (id=="grados"){
        let gr = document.getElementById("grados").value;
        document.getElementById("radianes").value = (gr*Math.PI)/180;
    } else if (id=="radianes"){
        let rad= document.getElementById("radianes").value;
        document.getElementById("grados").value=(rad*180)/Math.PI;
    }
}

/*
let sumar = () => {
    let re, s1, s2;
    s1 = Number(document.operacionesMat.sum_num1.value)
    s2 = Number(document.operacionesMat.sum_num2.value);
    if (isNaN(s1)) {
        alert("El valor ingresado es incorrecto");
        s1 = "";
    }
    if (isNaN(s2)) {
        alert("El valor ingresado es incorrecto");
        s2 = "";
    }
    re = s1 + s2;
    document.operacionesMat.sum_total.value = re;
}
 */

let generarurl = () => {
    const dist = document.getElementById("distancia").value;
    const uni = document.getElementsByName("unidades")[0].value;

    const urlcompl = `segundaWeb.html#${dist}#${uni}`;
    window.open(urlcompl);
}

let cargarvalor = () => {
    let urlcompleta = window.location.href;
    console.log(urlcompleta);
    urlcompleta = urlcompleta.split("#");

    const distancia = urlcompleta[1];
    const unidad = urlcompleta[2];
    document.getElementById("dist").value= `${distancia} ${unidad}`;
}

let guardarLS = () => {
    const dist = document.getElementById("distancia").value;
    const uni = document.getElementsByName("unidades")[0].value;

    localStorage.setItem("distanciaLS",dist);
    localStorage.setItem("unidadesLS",uni);
}

let dibujar = () =>{
    const canvas=document.getElementById("myCanvas");
    const ctx=canvas.getContext("2d") //contexto¿

    let xmax=canvas.width; //obtenes ancho maximo del canvas
    let ymax=canvas.height;

    //dibujo circulo
    ctx.fillStyle= "#333";
    ctx.arc(xmax/2,ymax/2,120,0,2 * Math.PI);
    ctx.stroke();
    ctx.fill();

    //dibujo rectangulo
    let margen=5;
    ctx.fillRect(margen,ymax-120-margen,130,120);
}

let dibujarCuadriculado = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx=canvas.getContext("2d");

    const anchoMax=canvas.width;
    const alturaMax=canvas.height; //parametrizamos el codigo para que cuando necesitemos cambiar algun valor, cambiemos esto y no cada vez que aparece el numero
    const intervalo=20;
    let ejeX=-24;
    let ejeY=-14;

    //lineas verticales
    for (let i=intervalo; i<anchoMax; i+=intervalo) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, 600);
        ctx.strokeStyle = "#030303";
        ctx.stroke();
        ctx.font="10px Arial";
        ctx.fillStyle="#721072"
        ctx.fillText(ejeX,i,alturaMax/2)
        ctx.closePath();
        ejeX++;
    }

    //lineas horizontales
    for (let i=intervalo; i<alturaMax; i+=intervalo) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(anchoMax, i);
        ctx.strokeStyle = "#030303";
        ctx.stroke();
        ctx.font="10px Arial";
        ctx.fillStyle="#721072"
        ctx.fillText(ejeY,anchoMax/2,i)
        ctx.closePath();
        ejeY++;
    }

    //eje x
    ctx.beginPath();
    ctx.moveTo(0, alturaMax/2);
    ctx.lineTo(anchoMax, alturaMax/2);
    ctx.strokeStyle = "#ff0707";
    ctx.stroke();
    ctx.closePath();

    //eje y
    ctx.beginPath();
    ctx.moveTo(anchoMax/2, 0);
    ctx.lineTo(anchoMax/2, alturaMax);
    ctx.strokeStyle = "#ff0707";
    ctx.stroke();
    ctx.closePath();
}

let dibujarImagen = (posicionX, posicionY) => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const anchoMax=canvas.width;
    const alturaMax=canvas.height;

    console.log(posicionX, posicionY);
    let img = new Image();
    img.src = "images/auto.png";

    if (posicionX < 0 || posicionY < 0 || posicionX>=anchoMax || posicionY>=alturaMax) {
        abrirDialog();
    } else {
        img.onload = function () { //esto lo hacemos pq la imagen tarda un rato en cargarse, entonces esto nos sirve para q recien cuando se cargue la foto se dibuje de una
            ctx.drawImage(img, posicionX, posicionY);
        }
    }
}

let cerrarDialogo = () => {
    const dialog = document.getElementById("myDialog");
    dialog.close();
}

let abrirDialog = () => {
    const dialog = document.getElementById("myDialog");
    dialog.showModal();
}