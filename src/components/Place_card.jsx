import { useNavigate } from "react-router-dom";

const PlaceCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        minWidth: "174px",
        height: "142px",
        position: "relative",
        padding: "4px",
        borderRadius: "16px",
        backgroundColor: "#F5F5F5",
      }}
      onClick={() => {
        navigate(`/view?id=${data.id}`);
      }}
    >
      <img
        src={data.image}
        alt={data.name}
        height="102px"
        width="100%"
        style={{ borderRadius: "16px", objectFit: "cover" }}
      ></img>
      <h1 style={{ fontSize: "14px", marginTop: "10px" }}>{data.name}</h1>
      <div
        style={{
          position: "absolute",
          bottom: "25px",
          right: "15px",
          backgroundColor: "white",
          borderRadius: "59px",
          padding: "3px",
        }}
      >
        <div
          style={{
            color: "white",
            backgroundColor: "rgba(77, 86, 82, 1)",
            padding: "2px 4px",
            borderRadius: "59px",
            fontSize: "12px",
          }}
        >
          4N/5D
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
