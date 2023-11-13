document.addEventListener("DOMContentLoaded", function () {
    // Tu código JavaScript aquí
    const boton1 = document.getElementById("boton2");
    const ambiente = document.getElementById("numero");
    const boton2 = document.getElementById("boton1")
    const tierra = document.getElementById("numero2")
    var mostrarGraficosBtn = document.getElementById("botonG");

    // Agregar un evento de clic al botón
    mostrarGraficosBtn.addEventListener("click", function () {
        // Redirigir a la página de gráficos
        window.location.href = "graf.html";
    });
    

    function cambiarDato() {
        let num = "50 grados";
        

        ambiente.innerText = num;
        
    }
function cambiarDato2(){
    let Thumen = "20 grados";
    tierra.innerText = Thumen;
}


    boton1.addEventListener("click", cambiarDato);
    boton2.addEventListener("click", cambiarDato2);
}

);