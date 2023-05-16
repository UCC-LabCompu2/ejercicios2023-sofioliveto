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