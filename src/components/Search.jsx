import { Container, Row, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Search = () => {
  const query = useSelector((state) => state.search.query);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/weather/" + e.target.childNodes[0].value);
  };

  return (
    <Container fluid id="landing">
      <Row>
        <Col xs={6} md={12} className="mx-auto p-0">
          <div
            style={{ minHeight: "100vh" }}
            className="d-flex flex-column justify-content-center  align-items-center"
          >
            <h1 className="mb-3">Weather App</h1>
            <Form onSubmit={handleSubmit} style={{ minWidth: "650px" }}>
              <Form.Control
                type="search"
                value={query}
                onChange={(e) => {
                  dispatch({
                    type: "SET_QUERY",
                    payload: e.target.value.toLowerCase(),
                  });
                }}
                placeholder="Type City Name and Press Enter..."
              />
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
