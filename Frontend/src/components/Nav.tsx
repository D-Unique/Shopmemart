import { NavLink, Link} from "react-router-dom";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import "../styles/components/Nav.css";

export default function Nav() {
  const pMenus: string[] = ["Categories", "Best Deals", "What's New"];
  return (
    <>
      <Row className="mt-1">
        <Col xs="5" className="d-flex justify-content-left align-items-center no-padding">
         <Link to={'/'} className="logo"> <h1 id="logo">ShopMeMart</h1></Link>
        </Col>
        <Col xs="6" className="d-flex justify-content-center align-items-center no-padding">
          { pMenus.map((menu, index) => {
            return menu === "Categories" ? (
              <a href="#topcartegories" id="pmenus" className="text-light m-2" key={index}>
                {menu}
              </a>
            ) : (menu === "Best Deals" ? (
              <a href="#best-deal-div" id="pmenus" className="text-light m-2" key={index}>
              {menu}
            </a>
            ) :
              
                (
              <NavLink
                id="pmenus"
                className="text-light m-2"
                key={index}
                to={menu}
              >
                {menu}
              </NavLink>
              ))
            
          })}
        </Col>
      </Row>
    </>
  );
}
