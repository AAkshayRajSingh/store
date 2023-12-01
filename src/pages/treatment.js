import React from "react";
import { Link } from "react-router-dom";
import "./treatment.css"; // Import your custom CSS file
import imgsrc1 from "/Users/a.akshayrajsingh/Desktop/ecommerce/store/src/images/treatment_hospi.png";
import imgsrc2 from "/Users/a.akshayrajsingh/Desktop/ecommerce/store/src/images/chat.png";
import imgsrc3 from "/Users/a.akshayrajsingh/Desktop/ecommerce/store/src/images/search.png";
import imgsrc4 from "/Users/a.akshayrajsingh/Desktop/ecommerce/store/src/images/tick.png";
import imgsrc5 from "/Users/a.akshayrajsingh/Desktop/ecommerce/store/src/images/results.png";
import pharma1 from "/Users/a.akshayrajsingh/Desktop/ecommerce/store/src/images/pharma1.png";
import imgsrc from "/Users/a.akshayrajsingh/Desktop/ecommerce/store/src/images/symptoms classifier.png";
import "./treatment.css"; // Import your custom CSS file
import videoBackground5 from '/Users/a.akshayrajsingh/Desktop/ecommerce/store/src/images/welcome1.mp4';

export default function Treatment() {
  const functionalityData = [
    {
      name: "Symptoms Classifier",
      imageSrc: imgsrc, // Replace with your image URL
      link: "http://localhost:8866/voila/render/Downloads/Ipywidgets_Tasks%202/Task1_classifySymptoms.ipynb?",
    },
    {
      name: "Treatment Recommendation",
      imageSrc: imgsrc1, // Replace with your image URL
      link: "http://localhost:8866/voila/render/Downloads/Ipywidgets_Tasks%202/Task2_TreatmentRecommendations.ipynb?",
    },
    {
      name: "Disease Information Search",
      imageSrc: imgsrc3, // Replace with your image URL
      link: "http://localhost:8866/voila/render/Downloads/Ipywidgets_Tasks%202/Task3_DiseaseSearchEngine.ipynb?",
    },
    {
      name: "Disease Spelling Correction",
      imageSrc: imgsrc4, // Replace with your image URL
      link: "http://localhost:8866/voila/render/Downloads/Ipywidgets_Tasks%202/Task4_SpellingCorrector_SearchEngine.ipynb?",
    },
    {
      name: "Interactive Chat",
      imageSrc: imgsrc2, // Replace with your image URL
      link: "http://localhost:8866/voila/render/Downloads/Ipywidgets_Tasks%202/Task5_InteractiveChatbot.ipynb?",
    },
    
    {
      name: "Buy From Pharmacy",
      imageSrc: pharma1, // Replace with your image URL
      link: "/store" // Remove the trailing comma here
    },
    {
      name: "Results Evaluation",
      imageSrc: imgsrc5, // Replace with your image URL
      link: "http://localhost:8866/voila/render/Downloads/Ipywidgets_Tasks%202/ResultEvaluation_InfoRetrievalProject.ipynb?",
    }
  ];

  return (
    <div className="container">
   
  <div className="video-wrapper">
  <video autoPlay muted loop id="video-background" className="video-background">
  <source src={videoBackground5} type="video/mp4" />
</video>
</div>
      <h1
        style={{
          fontSize: "40px",
          color: "Black",
          textAlign: "center",
          padding: "10px",
          fontFamily: "Playfair Display",
        }}
      >
        Welcome to SymptoCare
      </h1>
      <p
        style={{
          fontSize: "30px",
          color: "Green",
          textAlign: "center",
          padding: "10px",
          fontFamily: "Playfair Display",
        }}
      >
        SymptoCare is your trusted healthcare companion. 
      </p>
      <p
      style={{
        fontSize: "30px",
        color: "Green",
        textAlign: "center",
        padding: "10px",
        fontFamily: "Playfair Display",
      }}
    >
      Explore our services and features!
    </p>
      <div className="grid-container">
        {functionalityData.map((functionality, index) => (
          <div className="grid-item" key={index}>
            <a href={functionality.link} target="_blank" rel="noopener noreferrer">
              <img
                src={functionality.imageSrc}
                alt={functionality.name}
                className="functionality-image"
      
              />
              <div className="functionality-name">{functionality.name}</div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
