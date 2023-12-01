import {Row, Col} from 'react-bootstrap';
import { productsArray } from '../productsStore';
import ProductCard from '../components/ProductCard';
import React from 'react';
import videoBackground6 from '/Users/a.akshayrajsingh/Desktop/ecommerce/store/src/images/pharmacy.mp4';
import { useLocation } from 'react-router-dom';
function Store() {
    const pageStyle = {
         // Set the background color to blue
        // Add other styles as needed
    };
    const location = useLocation();
    const boxStyle = {
        backgroundColor: 'white',
        padding: '20px',
        margin: '20px auto',
        maxWidth: '800px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    };
    return (
        <>
        <div style={pageStyle}>
        <video autoPlay muted loop id="video-background" className="video-background">
        <source src={videoBackground6} type="video/mp4" />
      </video>
      <div style={boxStyle}>
      <h1 style={{ fontSize: '40px', color: 'Black', textAlign: 'center', padding: '30px', fontFamily: 'Playfair Display' }}>Welcome to the SymptoCare Pharma!</h1>
      <h1 style={{ fontSize: '30px', color: 'green', textAlign: 'center', padding: '20px', fontFamily: 'Playfair Display' }}>A Onestop Shop for medical needs</h1> 
      </div>
    
             <Row xs={1} md={3} className="g-4">
                {productsArray.map((product, idx) => (
                    <Col align="center" key={idx}>
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row>
        </div>
        </>
    )
}  

export default Store;