import { NavLink } from "react-router-dom";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import "../styles/components/Nav.css";

export default function Nav() {
  const pMenus: string[] = ["Categories", "Deals", "What's New", "Delivery"];
  return (
    <>
      <Row>
        <Col>
          <h1 id="logo">Shopmemart</h1>
        </Col>
        <Col xs="7">
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
