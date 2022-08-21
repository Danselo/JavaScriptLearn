//create arrays 
const ingresos = [
    new Ingreso('Salary',2100),
    new Ingreso('Sale Car',1500),
];

const egresos = [
    new Egreso ('Apartament rent',1900),
    new Egreso('Clothing',400)
];

let cargarApp = () =>{
    cargarCabecero();
        //refresh page 
    cargarIngresos();
    cargarEgresos();

    
}

let totalIngresos = () =>{
    let totalIngreso = 0;
    for (let ingreso of ingresos){
        totalIngreso += ingreso.value;
    }
    return totalIngreso;
}
let totalEgresos = ()=>{
    let totalEgreso = 0;
    for(let egreso of egresos){
        totalEgreso += egreso.value;
    }
    return totalEgreso;
}

let cargarCabecero= ()=> {
    //update elements of HTML
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos()/totalIngresos();
    document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
    document.getElementById("porcentaje").innerHTML= formatoPorcentaje(porcentajeEgreso);
    document.getElementById("ingresos").innerHTML = formatoMoneda(totalIngresos());
    document.getElementById("egresos").innerHTML = formatoMoneda(totalEgresos());
}
const formatoMoneda  = (valor)=>{
   return valor.toLocaleString('en-US',{style: 'currency',currency: 'COP' , minimumFractionDigits: 2}); //especific the formtat
}
const formatoPorcentaje= (valor)=>{
    return valor.toLocaleString('en-US',{style:'percent',minimumFractionDigits:2})
}
//lista de ingresos

const cargarIngresos = ()=>{
    let ingresosHTMl = '';
    for (let ingreso of ingresos){
        ingresosHTMl += crearIngresoHTML(ingreso);
    }
    document.getElementById('lista-ingreso').innerHTML = ingresosHTMl;
}
const crearIngresoHTML= (ingreso)=>{
    let ingresoHTML = `
            <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${ingreso.description}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">+ ${formatoMoneda(ingreso.value)}</div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar--btn">
                        <ion-icon name="close-circle-outline" 
                        onclick='eliminarIngreso(${ingreso.id})'></ion-icon>
                    </button>
                </div>
            </div>
        </div>
    
    `
    return ingresoHTML;
}
const eliminarIngreso=(id)=>{
   let indiceEliminar =  ingresos.findIndex(ingreso => ingreso.id ===id );
   ingresos.splice(indiceEliminar,1); // remove element
   cargarCabecero();
   cargarIngresos(); 
}
const cargarEgresos = ()=>{
    let egresosHTML = '';
    for (let egreso of egresos){
        egresosHTML += crearEgreso(egreso);
    }
    document.getElementById('lista-egresos').innerHTML = egresosHTML;
}
const crearEgreso = (egreso)=>{
    let egresoHTML = `
            <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${egreso.description}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">- ${formatoMoneda(egreso.value)}</div>
                <div class="elemento_porcentaje">${formatoPorcentaje(egreso.value/totalEgresos())}</div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar--btn">
                        <ion-icon name="close-circle-outline"
                        onclick=eliminarEgreso(${egreso.id})></ion-icon>
                    </button>
                </div>
            </div>
        </div>
    `
    return egresoHTML;
}
const eliminarEgreso = (id)=>{
    let indiceEliminar = egresos.findIndex(egreso => egreso.id === id);
    egresos.splice(indiceEliminar, 1); //remove one element from egresos
    cargarCabecero();
    cargarEgresos();
}
const agregarDato= ()=>{
    let forma = document.forms['forma'];
    let tipo =forma['tipo'];
    let descripcion = forma['descripcion'];
    let valor= forma['valor'];
    if (descripcion.value !== '' && valor.value !== '') {
        if(tipo.value === 'ingreso'){
            ingresos.push(new Ingreso(descripcion.value, +valor.value)); //el mas convierte a valor numero una cadena de forma simplificada 
            cargarCabecero();
            cargarIngresos();
        }else if(tipo.value === 'egreso'){
            egresos.push(new Egreso(descripcion.value, +valor.value));
            cargarCabecero();
            cargarEgresos();
        }
    }
}