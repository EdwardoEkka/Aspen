import "./home.css";
import {useNavigate } from "react-router-dom";
const Home = () => {
  const navigate=useNavigate();
  return (
    <div
      style={{
        overflowY: "hidden",
        position: "relative",
        zIndex: 0,
      }}
      className="home"
    >
      <img
        style={{ height: "100vh", position: "fixed", right: "0" }}
        src="./cover.jpg"
        alt="home"
      ></img>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ position: "absolute", top: "93px", color: "white" }}>
            <h1 className="main-head">Aspen</h1>
        </div>
        <div style={{ position: "absolute", bottom: "48px", color: "white",  width: "100%",}}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "36px",
              paddingRight: "36px",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "24px",
                  margin: "0rem",
                  padding: "0",
                }}
              >
                Plan your
              </h2>
              <h1 style={{ fontSize: "40px", margin: "0rem" }}>Luxurious</h1>
              <h1 style={{ fontSize: "40px", padding: "0" }}>Vacation</h1>
            </div>
            <div>
              <button
                type="button"
                aria-label="Explore our products"
                style={{
                  color: "white",
                  backgroundColor: "#176FF2",
                  borderRadius: "16px",
                  border: "none",
                  padding: "18px 44px",
                  width: "100%",
                }}
                onClick={()=>{navigate('/explore')}}
              >
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
