let formulario = document.querySelector(".fale-conosco");
        let mascara = document.querySelector(".mascara-form");

        function cliqueiNoBotao() {
            formulario.style.left = "50%";
            formulario.style.transform = "translateX(-50%)"
            mascara.style.visibility = "visible";
        }

        function sumirFormulario() {
            formulario.style.left = "-320px";
            formulario.style.transform = "translateX(0)"
            mascara.style.visibility = "hidden";
        }