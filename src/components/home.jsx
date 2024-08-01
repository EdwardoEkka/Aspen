import "./home.css";
const Home = () => {
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
        <div style={{ position: "absolute", bottom: "48px", color: "white" }}>
          <div
            style={{
              width: "100vw",
              display: "flex",
              flexDirection: "column",
              paddingLeft: "36px",
              paddingRight: "36px",
            }}
          >
            <div className="mb-3">
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
                  paddingTop: "18px",
                  paddingBottom: "18px",
                  paddingLeft: "44px",
                  paddingRight: "44px",
                  width: "100%",
                }}
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
