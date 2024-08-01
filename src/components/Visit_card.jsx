const VisitCard = ({ data }) => {
    return (
        <div style={{  minWidth: "188px", 
            height: "240px", position: "relative" }}>
            <img 
                src={data.image} 
                alt={data.name} 
                style={{ 
                    borderRadius: "32px", 
                    objectFit:"cover",
                    height:"100%",
                    width:"100%"
                }} 
            />
            <div style={{
                position: "absolute",
                bottom: "50px",
                left: "15px",
                color: "white",
                backgroundColor: "rgba(77, 86, 82, 1)",
                padding: "4px 12px",
                borderRadius: "59px",
                fontSize:"12px"

            }}>
                {data.name}
            </div>
            <div style={{
                position: "absolute",
                bottom: "15px",
                left: "15px",
                color: "white",
                backgroundColor: "rgba(77, 86, 82, 1)",
                padding: "4px 12px",
                borderRadius: "59px",
                fontSize:"12px",
                display:"flex",
                gap:"8px"
            }}>
                <img width="16" src="./icons/star.png" alt="star" />
                {data.rating}
            </div>
        </div>
    );
};

export default VisitCard;