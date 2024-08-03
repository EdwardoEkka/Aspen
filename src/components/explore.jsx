import Navbar from "./navbar";
import Chip from "./chip";
import VisitCard from "./Visit_card";
import Visits from "../data/data";
import './explore.css';
import PlaceCard from "./Place_card";

const Categories = [
  { id: 1, name: "Location" },
  { id: 2, name: "Hotels" },
  { id: 3, name: "Food" },
  { id: 4, name: "Adventure" },
  { id: 5, name: "Transportation" },
  { id: 6, name: "Events" },
  { id: 7, name: "Activities" },
];



const Explore = () => {
  return (
    <div  className="explore" style={{margin:"20px"}}>
      <div style={{ display: "flex", justifyContent: "space-between",margin:"0px"}}>
        <p>Explore</p>
        <div style={{ display: "flex", gap: "6px",alignItems:"center"}}>
          <span>
            <img width="16" src="./icons/location-1.png" alt="location-1" />
          </span>
          <span>
            <p>Aspen, USA</p>
          </span>
          <span>
            <img width="16" src="./icons/arrow_down.png" alt="arrow-down" />
          </span>
        </div>
      </div>
      <div>
        <h1 style={{ fontSize: "32px", marginBottom: "25px" }}>Aspen</h1>
      </div>
      <div
        style={{
          paddingLeft: "16px",
          display: "flex",
          justifyContent: "start",
          paddingRight: "16px",
          paddingTop: "16px",
          paddingBottom: "16px",
          backgroundColor: "#F3F8FE",
          borderRadius: "32px",
          marginBottom: "25px",
        }}
      >
        <div style={{ marginRight: "8px" }}>
          <img
            src="./icons/search.png"
            alt="search"
            style={{ width: "16.3px" }}
          />
        </div>
        <input
          style={{
            outline: "none",
            border: "none",
            backgroundColor: "transparent",
            flexGrow: 1,
          }}
          placeholder="Find things to do"
        ></input>
      </div>
      <div
        style={{
          display: "flex",
          overflowX: "scroll",
          scrollbarWidth: "none",
          gap: "28px",
          marginBottom:"36px"
        }}
      >
        {Categories.map((category) => (
          <Chip category={category.name} />
        ))}
      </div>
      <div style={{marginBottom:"36px"}}>
      <h1 style={{fontSize:"18px",marginBottom:"15px"}}>Popular</h1>
      <div style={{
            display: "flex",
            overflowX: "scroll",
            scrollbarWidth: "none", 
            WebkitOverflowScrolling: "touch",
            gap: "28px",
        }}>
            {Visits.map((card) => (
                <VisitCard key={card.id} data={card} />
            ))}
        </div>
      </div>
      <div style={{marginBottom:"70px"}}>
        <h1 style={{fontSize:"18px"}}>Recommended</h1>
        <div style={{
            display: "flex",
            overflowX: "scroll",
            scrollbarWidth: "none", 
            WebkitOverflowScrolling: "touch",
            gap: "28px",
        }}>
            {Visits.map((card) => (
                <PlaceCard key={card.id} data={card} />
            ))}
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Explore;
