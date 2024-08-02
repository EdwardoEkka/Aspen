import Visits from "../data/data";

const View = () => {
  const currentPageUrl = window.location.href;
  const urlObject = new URL(currentPageUrl);
  const params = new URLSearchParams(urlObject.search);
  const id = params.get("id");
  const visit = Visits.find(visit => visit.id === parseInt(id));

  return (
    <div style={{margin:"20px"}}>
      {visit ? (
        <>
          <div style={{width:"100%",height:"340px"}}>
          <img src={visit.image} alt={visit.name} style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:"20px"}}/>
          </div>
        </>
      ) : (
        <p>Visit not found</p>
      )}
    </div>
  );
};

export default View;