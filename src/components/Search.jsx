import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { MdOutlineSearch } from "react-icons/md";

const Search = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate("/weather/" + e.target.childNodes[0].value);
  };

  return (
    <div className="d-flex justify-content-center">
      <Form
        id="searchBar"
        onSubmit={handleSubmit}
        style={{ maxWidth: "650px" }}
        className="w-100 d-flex"
      >
        <Form.Control
          type="search"
          placeholder="Search for another cities..."
        />
        <Button variant="dark" className="px-2" type="submit">
          <MdOutlineSearch style={{ fontSize: "1.4rem" }} />
        </Button>
      </Form>
    </div>
  );
};

export default Search;
