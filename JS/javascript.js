
//************funcion de fancybox para galeria de fotos*************
 Fancybox.bind('[data-fancybox="gallery"]', {
});

/********DESPLAZAMIENTO DEL MENU DE NAVEGACION *******/
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); // Evita el comportamiento por defecto
    const targetId = link.getAttribute('href').substring(1); // Obtén el ID del destino
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
  });
});

/*Menu para dispositivos moviles */

$(document).ready(function () {
  // Abrir menú
  $('#menu-icon').on('click', function () {
    $('#nav-menu').addClass('active');
  });

  // Cerrar menú
  $('#close-menu').on('click', function () {
    $('#nav-menu').removeClass('active');
  });

  // Cerrar menú al hacer clic en un enlace
  $('.nav-menu a').on('click', function () {
    $('#nav-menu').removeClass('active');
  });
});



//**********************funcion modal******************* 
//crear funcion modal 
$("#boton_modal").click(function () {
  $("#modal").addClass("mostrar");
})

// cerrar funcion modal
$("#cerrar_modal").click(function () {
  $("#modal").removeClass("mostrar");
})

// tiempo de  3 segundos
// function tiempo() {
//   $("#modal").addClass("mostrar");
// }
// setTimeout(tiempo, 3000);


// click por fuera
window.onclick = function (event) {
  if (event.target == modal) {
    $("#modal").removeClass("mostrar");
  }
};

// click tecla ESC
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    $("#modal").removeClass("mostrar");
  }
});

// scroll mas de 1200px
// function onScroll() {
//   const scrollTop = window.scrollY;
//   if (scrollTop > 2000) {
//     $("#modal").addClass("mostrar");
//   }
  
// }

//window.addEventListener('scroll', onScroll);

//**** codigo para implementar el acordeon ****/
$(document).ready(function () {
  $(".service-icon").click(function () {
    // Alternar la visibilidad del contenido
    $(this).siblings(".service-details").slideToggle();

    // Cambiar el ícono "+" a "-" 
    $(this)
      .find("i")
      .toggleClass("fa-plus fa-minus");
  });
});

//ancla para el scroll
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $("#scrollToTop").fadeIn(); // Mostrar el botón
    } else {
      $("#scrollToTop").fadeOut(); // Ocultar el botón
    }
  });

  $("#scrollToTop").click(function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 600);
  });
});
