import React from "react";
import "./creators.css"; // Import your custom CSS file
import akshay from "/Users/a.akshayrajsingh/Desktop/ecommerce/store/src/images/axay2.jpeg";
import Amina from "/Users/a.akshayrajsingh/Desktop/ecommerce/store/src/images/tick.png";
import Ruhee from "/Users/a.akshayrajsingh/Desktop/ecommerce/store/src/images/tick.png";
import Manish from "/Users/a.akshayrajsingh/Desktop/ecommerce/store/src/images/tick.png";
import videoBackground6 from '/Users/a.akshayrajsingh/Desktop/ecommerce/store/src/images/welcome1.mp4';

export default function Creators() {
  return (
    <div className="container">
    <video autoPlay muted loop id="video-background" className="video-background">
    <source src={videoBackground6} type="video/mp4" />
  </video>
      <h1
        style={{
          fontSize: "40px",
          color: "Black",
          textAlign: "center",
          padding: "10px",
          fontFamily: "Playfair Display",
        }}
      >
        Meet the Creators of SymptoCare
      </h1>
      <div className="creator-info">
        <div className="creator">
        
          <h1>Akshay Raj Singh.A</h1>
          <h2>Machine Learning Engineer</h2>
          <p
            style={{
              fontSize: "20px",
              color: "green",
              textAlign: "center",
              padding: "10px",
              fontFamily: "Playfair Display",
            }}
          >
            Hi, I'm Akshay Raj Singh, a Machine Learning Engineer on our team. I play a vital role in developing two core functionalities. Firstly, I'm responsible for the Treatment Recommendations feature, where I create the functionality that provides tailored treatment recommendations based on established medical guidelines and the latest research. Additionally, my focus lies in developing the Interactive Chat System, which facilitates direct communication between patients and healthcare providers, fostering patient engagement and improving their overall experience.
          </p>
        </div>
        <div className="creator">
       
          <h1>Amina Firdouse</h1>
          <h2>Information Retrieval Engineer</h2>
          <p
            style={{
              fontSize: "20px",
              color: "green",
              textAlign: "center",
              padding: "10px",
              fontFamily: "Playfair Display",
            }}
          >
            Hi, I'm Amina Firdouse, In my role as the Information Retrieval Specialist, I will take charge of two critical project components. Firstly, I will design and implement the Disease Information Search Engine, enabling healthcare providers to access comprehensive and up-to-date disease information swiftly. Additionally, I will focus on the Symptom-Based Diagnosis feature, ensuring that the system efficiently analyzes patient-reported symptoms and delivers preliminary diagnoses to streamline the diagnostic process.
          </p>
        </div>
        <div className="creator">
     
          <h1>Syed Ruhee Alfroz</h1>
          <h2>Data Collector</h2>
          <p
            style={{
              fontSize: "20px",
              color: "green",
              textAlign: "center",
              padding: "10px",
              fontFamily: "Playfair Display",
            }}
          >
            Hi, I'm Ruhee Afroz Syed, As Data Collector, my role primarily focuses on data collection. I will be responsible for acquiring and managing the essential healthcare datasets or source data required for our project. My duties include data gathering, data preprocessing, and data cleaning, ensuring that the data is well-organized and ready for use by other team members in various project components.
          </p>
        </div>
        <div className="creator">
       
          <h1>Manish Cheruku</h1>
          <h2>UI Designer</h2>
          <p
            style={{
              fontSize: "20px",
              color: "green",
              textAlign: "center",
              padding: "10px",
              fontFamily: "Playfair Display",
            }}
          >
            Hi, I'm Manish Cheruku, In my role as the UI Designer, I will concentrate on designing the user interface for our healthcare decision support system. My responsibilities will revolve around creating an intuitive and user-friendly interface that seamlessly integrates all project components. I will ensure that the user interface aligns with healthcare providers' needs and preferences, ultimately enhancing the overall user experience within our system.
          </p>
        </div>
      </div>
    </div>
  );
}
