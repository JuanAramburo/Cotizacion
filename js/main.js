//Cotizacion
const btnCalcular3 = document.getElementById("btnCalcular3");
const btnLimpiar3 = document.getElementById("btnLimpiar3");
const labelError3 = document.getElementById("error3");

function calcular2(){
    const opcion2 = document.getElementById("cmbplanes").value;
    let val = document.getElementById("txtValor").value;
    labelError3.textContent="";
    
    let opc2 = parseFloat(opcion2);
    let totalfin = 0;
    let pagomensual = 0;

    //validar
    if(!val){
        labelError3.textContent="Inserta el valor del automovil";
    }
    else{
        let enganche = val * 0.3;
        document.getElementById("txtEnganche").value = enganche;

        let totalen = val - enganche;
        switch(opc2){
            case 1: totalfin = (val * 0.125) + totalen; break;
            case 2: totalfin = (val * 0.172) + totalen;break;
            case 3: totalfin = (val * 0.21) + totalen;break;
            case 4: totalfin = (val * 0.26) + totalen;break;
            case 5: totalfin = (val * 0.45) + totalen;break;
        }
        document.getElementById("txtFinanciar").value = totalfin;
        switch(opc2){
            case 1: pagomensual = totalfin / 12;break;
            case 2: pagomensual = totalfin / 18;break;
            case 3: pagomensual = totalfin / 24;break;
            case 4: pagomensual = totalfin / 36;break;
            case 5: pagomensual = totalfin / 48;break;
        }

        document.getElementById("txtPago").value = pagomensual.toFixed(2);

    }
};

function limpiar3(){
    document.getElementById("txtValor").value = "";
    document.getElementById("txtEnganche").value = "";
    document.getElementById("txtFinanciar").value = "";
    document.getElementById("txtPago").value = "";
    labelError3.textContent = "";
}

btnCalcular3.addEventListener('click', calcular2);
btnLimpiar3.addEventListener('click', limpiar3);