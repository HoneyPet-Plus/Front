import Perfil from "./favperfil";

function Pusuario() {
    return(
        <>
            <header>header</header>
            <h1>card del perfil</h1>
            <h2>favoritos</h2>
            <Perfil direccion="cr 123 11" descripcion="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic illum consequatur totam quis optio nesciunt sunt nostrum nobis. Commodi eum possimus sint repellendus nemo molestias suscipit accusamus odit doloremque cum." nombre="perre" foto="https://loremflickr.com/150/150/dog"/>
            <Perfil direccion="calle 12 cs2" descripcion="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic illum consequatur totam quis optio nesciunt sunt nostrum nobis. Commodi eum possimus sint repellendus nemo molestias suscipit accusamus odit doloremque cum." nombre="honeyhoney" foto="https://loremflickr.com/150/150/cat"/>
            
            <footer>footer</footer>
            
        </>
        )
    }

export default Pusuario;