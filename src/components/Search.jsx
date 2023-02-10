import { useState } from "react";
import { Col, Form } from "react-bootstrap";

const Search = () => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Col xs={6} md={12} className="mx-auto">
        <Form onSubmit={handleSubmit}>
          <Form.Control
            type="search"
            value={query}
            onChange={handleChange}
            placeholder="Type and Press Enter..."
          />
        </Form>
      </Col>
    </>
  );
};

export default Search;
