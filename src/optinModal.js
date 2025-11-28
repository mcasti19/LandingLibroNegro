const modal = document.getElementById( 'modal-ghl' );

export function openModal() {
    const modal = document.getElementById( 'modal-ghl' );
    const progressWrapper = document.getElementById( 'progress-wrapper' );

    if ( modal ) {
        modal.classList.remove( 'hidden' );
        modal.classList.add( 'flex' );

        if ( progressWrapper ) {
            // Reiniciar a 0%
            progressWrapper.classList.remove( 'is-loaded' );
            // Forzar reflow para que la transición pueda aplicarse desde 0%
            void progressWrapper.offsetWidth;
            // Disparar la transición inmediatamente después del reflow
            setTimeout( () => {
                progressWrapper.classList.add( 'is-loaded' );
            }, 50 );
        }
    }
    return false;
}

function closeModal() {
    if ( modal ) {
        modal.classList.add( 'hidden' );
        modal.classList.remove( 'flex' );

        // Reiniciar a 0% cuando se cierra
        const progressWrapper = document.getElementById( 'progress-wrapper' );
        if ( progressWrapper ) {
            progressWrapper.classList.remove( 'is-loaded' );
        }
    }
}

// Cerrar modal si el usuario hace clic fuera del dialog (overlay)
function closeModalOnClick( event ) {
    if ( event && event.target && event.target.id === 'modal-ghl' ) {
        closeModal();
    }
}
document.addEventListener( 'keydown', function ( event ) {
    if ( event.key === 'Escape' && modal && !modal.classList.contains( 'hidden' ) ) {
        closeModal();
    }
} );




// document.addEventListener( 'DOMContentLoaded', function () {
//     // Obtener el modal
//     var modal = document.getElementById( "miModal" );

//     // Obtener el botón que abre el modal
//     var btn = document.getElementById( "abrirModal" );

//     // Obtener el elemento <span> que cierra el modal
//     var span = document.getElementsByClassName( "cerrar-modal" )[ 0 ];

//     // Cuando el usuario hace clic en el botón, abre el modal
//     btn.onclick = function () {
//         modal.style.display = "flex"; // Usamos flex para centrar el contenido
//     }

//     // Cuando el usuario hace clic en <span> (x), cierra el modal
//     span.onclick = function () {
//         modal.style.display = "none";
//     }

//     // Cuando el usuario hace clic en cualquier lugar fuera del contenido del modal, lo cierra
//     window.onclick = function ( event ) {
//         if ( event.target == modal ) {
//             modal.style.display = "none";
//         }
//     }

//     // Opcional: Para hacer que el modal aparezca automáticamente después de unos segundos
//     setTimeout( function () {
//         modal.style.display = "flex";
//     }, 3000 ); // Aparece después de 3 segundos
// } );