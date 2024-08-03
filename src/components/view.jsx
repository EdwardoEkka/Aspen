import Visits from "../data/data";
import React, { useState } from "react";
import "./view.css";
import { useNavigate } from "react-router-dom";

const icons = [
  { src: "./icons/wifi.png", alt: "wifi", name:"1 Heater" },
  { src: "./icons/food.png", alt: "food", name:"Dinner"},
  { src: "./icons/bath tub.png", alt: "bath", name:"1 Tub"},
  { src: "./icons/Frame.png", alt: "Frame", name:"Pool"},
];

const View = () => {
  const currentPageUrl = window.location.href;
  const urlObject = new URL(currentPageUrl);
  const params = new URLSearchParams(urlObject.search);
  const id = params.get("id");
  const visit = Visits.find((visit) => visit.id === parseInt(id));
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  return (
    <div style={{ margin: "20px" }} className="view">
      {visit ? (
        <>
          <div
            style={{
              width: "100%",
              height: "340px",
              marginBottom: "40px",
              position: "relative",
            }}
          >
            <img
              src={visit.image}
              alt={visit.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "20px",
              }}
            />
            <div
              style={{
                width: "44px",
                height: "44px",
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "80%",
                boxShadow: "0 2px 4px #D0E7FF",
                position: "absolute",
                bottom: "-25px",
                right: "15px",
              }}
            >
              <img
                src="./icons/Like.png"
                alt="Like"
                style={{ width: "24px", height: "24px" }}
              ></img>
            </div>
            <div
              onClick={() => {
                navigate("/explore");
              }}
              style={{
                cursor: "pointer",
                width: "40px",
                height: "40px",
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
                position: "absolute",
                top: "15px",
                left: "15px",
              }}
            >
              <img
                src="./icons/Vector.png"
                alt="Vector"
                style={{ width: "7px", height: "14px" }}
              ></img>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between",alignItems:"center" }}>
            <h1 style={{ fontSize: "24px" }}>{visit.name}</h1>
            <p style={{ color: "#176FF2", fontWeight: "bold",fontSize:"14px"}}>Show More</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "10px",
            }}
          >
            <img
              src="./icons/star.png"
              alt="star"
              style={{ width: "11.33px", height: "12px" }}
            ></img>
            <p style={{ margin: "0px",fontSize:"12px" }}>
              {visit.rating} ({visit.reviews} Reviews)
            </p>
          </div>
          <div style={{ marginBottom: "24px" }}>
            <div class={show ? "non-description" : "description"}>
              <p style={{fontSize:"14px"}}>{visit.description}</p>
            </div>
            {
              <p
                style={{
                  color: "#176FF2",
                  fontWeight: "600",
                  cursor: "pointer",
                  fontSize:"14px"
                }}
                onClick={() => {
                  setShow(!show);
                }}
              >
                {show ? "Read Less" : "Read More"}
              </p>
            }
          </div>
          <div style={{marginBottom:"18px"}}>

          <h1 style={{fontSize:"18px",marginBottom:"18px"}}>Facilities</h1>
          <div
            style={{
              display: "flex",
              overflowX: "scroll",
              scrollbarWidth: "none",
              WebkitOverflowScrolling: "touch",
              gap: "14px",
            }}
          >
            {icons.map((icon, index) => (
              <div
                key={index}
                style={{
                  height: "74px",
                  minWidth: "72px",
                  borderRadius: "16px",
                  backgroundColor: "#F3F8FE",
                  display: "flex",
                  justifyContent: "center", 
                  alignItems: "center", 
                  flexDirection:"column",
                  gap:"10px"
                }}
              >
                <img src={icon.src} height="32px" width="32" alt={icon.alt} />
                <p style={{fontSize:"10px",margin:"0px"}}>{icon.name}</p>
              </div>
            ))}
          </div>
          </div>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div style={{display:"flex",flexDirection:"column",gap:"5px"}}>
              <p style={{marginBottom:"0px",fontSize:"12px",fontWeight:"600"}}>Price</p>
              <h1 style={{fontSize:"24px", color:"#2DD7A4"}}>{visit.price}</h1>
            </div>
            <button 
            type="button"
            aria-label="Explore our products"
            style={{
              color: "white",
              backgroundColor: "#176FF2",
              borderRadius: "16px",
              border: "none",
              padding: "16px 32px",
              width:"223px",
              display:"flex",
              gap:"15px",
              justifyContent:"center"
            }}
            >
              <div>Book Now</div>
              <img src="./icons/arrow_right.png" alt="arrow right" height="15px" width="12.33px"></img>
            </button>
          </div>
        </>
      ) : (
        <p>Visit not found</p>
      )}
    </div>
  );
};

export default View;
