import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="d-none d-md-block position-sticky top-0"></div>
      <div className="d-block d-md-none position-fixed bottom-0 start-0 end-0" style={{backgroundColor:"#F5F5F5",borderTopLeftRadius:"32px",borderTopRightRadius:"32px",boxShadow:"0 -4px 8px rgba(0, 0, 0, 0.1)"}}>
        <div className="container">
          <ul className="d-flex justify-content-center gap-5 list-unstyled m-0 pt-3 pb-3">
            <li>
              <img className="" style={{width:"24px"}} src="./icons/Heart.png" alt="Heart" />
            </li>
            <li>
              <img className="" style={{width:"24px"}} src="./icons/Home.png" alt="Home" />
            </li>
            <li>
              <img className="" style={{width:"24px"}} src="./icons/Profile.png" alt="Profile" />
            </li>
            <li>
              <img className="" style={{width:"24px"}} src="./icons/Ticket.png" alt="Ticket" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
