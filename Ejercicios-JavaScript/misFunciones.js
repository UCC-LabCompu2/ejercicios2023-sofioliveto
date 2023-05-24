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