import { Row, Col } from "react-bootstrap";

const MyFooter = () => {
  return (
    <footer id="footer">
      <Row className="text-center p-3">
        <Col xs={6}>
          <a href="#">
            <h6>Some Info</h6>
          </a>
        </Col>
        <Col xs={6}>
          <a href="#">
            <h6>Other Info</h6>
          </a>
        </Col>
      </Row>
    </footer>
  );
};

export default MyFooter;
