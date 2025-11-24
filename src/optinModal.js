document.addEventListener( 'DOMContentLoaded', function () {
    // Obtener el modal
    var modal = document.getElementById( "miModal" );

    // Obtener el botón que abre el modal
    var btn = document.getElementById( "abrirModal" );

    // Obtener el elemento <span> que cierra el modal
    var span = document.getElementsByClassName( "cerrar-modal" )[ 0 ];

    // Cuando el usuario hace clic en el botón, abre el modal
    btn.onclick = function () {
        modal.style.display = "flex"; // Usamos flex para centrar el contenido
    }

    // Cuando el usuario hace clic en <span> (x), cierra el modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // Cuando el usuario hace clic en cualquier lugar fuera del contenido del modal, lo cierra
    window.onclick = function ( event ) {
        if ( event.target == modal ) {
            modal.style.display = "none";
        }
    }

    // Opcional: Para hacer que el modal aparezca automáticamente después de unos segundos
    setTimeout( function () {
        modal.style.display = "flex";
    }, 3000 ); // Aparece después de 3 segundos
} );