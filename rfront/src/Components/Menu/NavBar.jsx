import React, {useState, useEffect} from 'react'
import { Button, Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import logoheader from '../../assets/Home/logoheader.svg';
import "./NavBar.css"


export default function NavBar(){
    // const [state, setstate] = useState({
    //     longitud: 4.627354,
    //     latitud: -74.082807,
    //     zoom: 13,
    //     minZoom: 5
    // })


    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition(
    //         function (position) {
    //             setstate({
    //                 longitud: position.coords.longitude,
    //                 latitud: position.coords.latitude,
    //                 zoom: 18,
    //                 minZoom: 8
    //             })


    //         },
    //         function (error) {
    //             console.log(error)
    //         },
    //         {
    //             enableHighAccuracy: true
    //         }
    //     );
    // })

    return (
        <div>
            <Navbar className='nav' fixed="top" variant='dark' expand="lg">
                <Container>
                    <Navbar.Brand href="Inicio">
                        <img src={logoheader} alt="HoneyPet +" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" >
                        <Nav>
                            <Nav.Link href="Inicio">Inicio</Nav.Link>
                            <Nav.Link href="Proveedores">Proveedores</Nav.Link>
                            {/* <Nav.Link href={{pathname:'/Mapa',state}}>Mapa</Nav.Link> */}
                            <Nav.Link href="Perfil">Perfil</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    )

}
