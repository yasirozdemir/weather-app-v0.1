import { Row, Col, Form } from "react-bootstrap";
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
    <Row>
      <Col xs={6} md={12} className="mx-auto p-0">
        <div
          id="landing"
          style={{ minHeight: "100vh" }}
          className="d-flex flex-column justify-content-center  align-items-center"
        >
          <h1 className="mb-3">Weather App</h1>
          <Form onSubmit={handleSubmit} className="w-50">
            <Form.Control
              type="search"
              value={query}
              onChange={(e) => {
                dispatch({
                  type: "SET_QUERY",
                  payload: e.target.value,
                });
              }}
              placeholder="Type City Name and Press Enter..."
            />
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default Search;
