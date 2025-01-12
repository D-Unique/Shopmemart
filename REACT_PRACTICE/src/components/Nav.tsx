import { NavLink } from "react-router-dom";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import "../styles/components/Nav.css";

export default function Nav() {
  const pMenus: string[] = ["Categories", "Deals", "What's New", "Delivery"];
  return (
    <>
      <Row className="mt-1">
        <Col xs="5" className="d-flex justify-content-left align-items-center no-padding">
          <h1 id="logo">ShopMeMart</h1>
        </Col>
        <Col xs="6" className="d-flex justify-content-center align-items-center no-padding">
          {pMenus.map((menu, index) => {
            return (
              <NavLink
                id="pmenus"
                className="text-light m-2"
                key={index}
                to={menu}
              >
                {menu}
              </NavLink>
            );
          })}
        </Col>
      </Row>
    </>
  );
}
