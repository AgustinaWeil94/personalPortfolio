/* ---------------------------------------------
      IMÁGENES Y VIDEOS VENTANA MODAL POP UP
--> Para hacer click en la preview y que aparezca la imagen seleccionada o video seleecionado
----------------------------------------------- */

// Imágenes
function imageGallery() {
    const highlight = document.querySelector(".img-grande");
    const highlight2 = document.querySelector(".img-grande2");
    const highlight3 = document.querySelector(".img-grande3");
    const highlight4 = document.querySelector(".img-grande4");
    const previews = document.querySelectorAll(".work-preview img");
  
    previews.forEach(preview => {
      preview.addEventListener("click", function() {
        const smallSrc = this.src;
        const bigSrc = smallSrc.replace("small", "big");
        previews.forEach(preview => preview.classList.remove("img-active"));
        highlight.src = bigSrc;
        highlight2.src = bigSrc;
        highlight3.src = bigSrc;
        highlight4.src = bigSrc;
        preview.classList.add("img-active");
      });
    });
  }
  
  imageGallery();

// Videos
function videoGallery() {
    const highlight = document.querySelector(".video-grande3");
    const previews = document.querySelectorAll(".work-preview video");

    previews.forEach(preview => {
      preview.addEventListener("click", function() {
        const smallSrc = this.src;
        const bigSrc = smallSrc.replace("small", "big")
        previews.forEach(preview => preview.classList.remove("video-active"));
        highlight.src = bigSrc;
        preview.classList.add("video-active");
      })
    })
}

videoGallery();


/* ---------------------------------------------
                MENÚ HAMBURGUESA
----------------------------------------------- */

  const navToggle = document.querySelector(".nav-toggle");
  const navToggleClose = document.querySelector(".nav-toggle-close");
  const navMenu = document.querySelector(".nav-menu");
  
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
  
    if (navMenu.classList.contains("nav-menu_visible")) {
      navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
      navToggle.setAttribute("aria-label", "Abrir menú");
    }
  });
  
  navToggleClose.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
  
    if (navMenu.classList.contains("nav-menu_visible")) {
      navToggleClose.setAttribute("aria-label", "Abrir menú");
    } else {
      navToggleClose.setAttribute("aria-label", "Cerrar menú");
    }
  });



/* ---------------------------------------------
            VALIDACIÓN DEL FORMULARIO
----------------------------------------------- */

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("formulario").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
  evento.preventDefault();
  
  // Validación del nombre
  var nombre = document.getElementById('nombre').value;
  if (nombre.length == 0) {
      alert("Hey... you have a name, right? Let me know you!")
      return;
  }

  // Validación del apellido
  var apellido = document.getElementById('apellido').value;
  if (apellido.length == 0) {
      alert("Hey... you have a lastname, right? Write it, we can make a family tree illustration haha")
      return;
  }

  // Validación de la edad. Tiene que ser entero y mayor que 18
  var edad = document.getElementById('edad').value;
  if (edad == "") {
      alert("You did not put your age. I hope you have one, otherwise you would be a ghost. Or a vampire. Or a robot. HAHA")
      return;
  } else {
      if (edad < 18) {
          alert("I am sorry, you need to be 18 years old. But... pssst... listen... If you are under 18 years old and you like what I do, follow me on INSTAGRAM (link is under the form)!")
          return;
      }
  }

  // Validación del cumpleaños
  var cumpleaños = document.getElementById('cumpleaños').value;
  if (cumpleaños.length == 0) {
      alert('Complete your birthdate! I have an exclusive and tasty 3D birthday cake and a nice digital card for you;)');
      return;
  }

  // Validación de los términos y condicones
  var terminos = document.getElementById('terminos')
  if (formulario.terminos.checked == true) {
  } else{
      alert('Do not forget the Terms and Conditions!');
      return;
  }

  // Validación del interés - CORREGIR PORQUE NO FUNCIONA
  function validate(e) {	
    e.preventDefault();

		var formulario = document.formulario;
		var al_menos_uno = false;

		for (var i = 0; i < formulario.options.length; i++) {
			if (formulario.options[i].checked) {
				al_menos_uno = true;
			}
		}

		if (!al_menos_uno){
			alert ('debes seleccionar al menos una opción');
			if (e.preventDefault) {
				e.preventDefault();
			} else {
			  e.returnValue = false;
			}
		}
	}

  //Validación del mail --> Validado con el type="email" escrito en el html

 

  // Validación del usuario
  var usuario = document.getElementById('usuario').value;
  if (usuario.length == 0) {
      alert('An username is needed. I know the know is enough but i am a gamer, and gamers like usernames haha');
      return;
  }

  // Validación de la clave
  var clave = document.getElementById('clave').value;
  if (clave.length < 7) {
      alert('The password must be 7 characters or more. 7 because is my favourite number. 3 is my other favourite number, i know you wanted to know such and important fact.');
      return;
  }

  // Validación del disfrute de la página
  var enjoy = document.getElementById('enjoyweb').value;
  if (formulario.enjoy[0].checked == true ||
    formulario.enjoy[1].checked == true ||
    formulario.enjoy[2].checked == true) {
  } else{
      alert('You did not tell me if you enjoyed the website!');
      return;
  }

  // Validación de los servicios - NO FUNCIONA y si lo activo, no me envía el formulario
//   var interes = document.getElementById('interes').value;
//   if (interes.selectedIndex == 0) {
//     alert("Debe seleccionar un motivo de su contacto.");
//     return;
// }

  alert("thanks for filling out the form and allowing me to show you a bit of myself. Cheers buddy! Come back as many times as you want, i am always developing new stuff!");
  this.submit();

};


/* ---------------------------------------------
            TOGGLE DARK MODE
----------------------------------------------- */

const container = document.querySelector('body');
const checkbox = document.querySelector('input');
checkbox.addEventListener('click', function(){
  if ( this.checked ) {
    container.classList.add('dark');
  } else {
    container.classList.remove('dark');
  }
});


// --- Otra opción con otro formato de switch ---

// let themeToggler = document.querySelector('#dark-mode-toggle');

// themeToggler.onclick = () =>{
//     themeToggler.classList.toggle('fa-sun');
//     if(themeToggler.classList.contains('fa-sun')){
//         document.body.classList.add('active');
//     }else{
//         document.body.classList.remove('active');
//     }
// };






