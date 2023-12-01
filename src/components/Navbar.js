import { Button, Container, Navbar, Modal } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { CartContext } from "../CartContext";
import CartProduct from './CartProduct';
import cartIcon from '/Users/a.akshayrajsingh/Desktop/ecommerce/store/src/images/download (1).png'; // Import the cart image
import logo from '/Users/a.akshayrajsingh/Desktop/ecommerce/store/src/images/symtocare.png';

function NavbarComponent() {
    const cart = useContext(CartContext);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const checkout = async () => {
        await fetch('http://localhost:4000/checkout', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ items: cart.items })
        }).then((response) => {
            return response.json();
        }).then((response) => {
            if (response.url) {
                window.location.assign(response.url); // Forwarding user to Stripe
            }
        });
    }

    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

    // Define a style for the cart button
    const cartButtonStyle = {
        backgroundColor: 'cyan', // Background color to cyan
        borderColor: 'cyan', // Border color to cyan
        color: 'black', // Text color to white
    };

    return (
        <>
             <Navbar expand="sm">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} style={{ width: '150px', height: '100px' }} />
                    </Navbar.Brand>
                    <Button onClick={handleShow} style={cartButtonStyle} className="ml-auto">
                        <img src={cartIcon} alt="Cart" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                        Cart ({productsCount} Items)
                    </Button>
                </Container>
                <Navbar.Toggle />
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {productsCount > 0 ?
                        <>
                            <p>Items in your cart:</p>
                            {cart.items.map((currentProduct, idx) => (
                                <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                            ))}

                            <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

                            <Button variant="success" onClick={checkout}>
                                Purchase items!
                            </Button>
                        </>
                        :
                        <h1>There are no items in your cart!</h1>
                    }
                </Modal.Body>
            </Modal>
        </>
    )
}

export default NavbarComponent;
