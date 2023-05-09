const formatearDinero = (cantidad) => {
    const dineroFormateado = new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'EUR',
    })


    return dineroFormateado.format(cantidad)
}


const calcularIntereses = (cantidad, mes) => {
    let total;


    if(cantidad > 1000) {
        total = cantidad * 1.1;
    }else if(cantidad >= 1000 && cantidad <=5000) {
        total = cantidad * 1.2;
    }else if(cantidad >= 5000 && cantidad < 10000) {
        total = cantidad * 1.3;
    }else if(cantidad >= 10000 && cantidad < 15000) {
        total = cantidad * 1.4;
    }else{
        total = cantidad * 1.5;
    }


    if(mes === "6") {
        total *= 1.1;
    }else if(mes === "12") {
        total *= 1.2;
    }else {
        total *= 1.3;
    }



    return total

}


export {
    formatearDinero,
    calcularIntereses
}