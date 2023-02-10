import { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
// import { useParams } from "react-router";

const Forecast = () => {
  // const APIkey = "eeaa1c4b8d481e6b014d81c4dfe64c54";

  // const params = useParams();
  // const city = params.city;

  // const url =
  //   "https://api.openweathermap.org/data/2.5/forecast?q=" +
  //   city +
  //   ",&APPID=" +
  //   APIkey +
  //   "&units=metric";

  // const dataFollowingDays = [];

  // const fetchForecastData = async () => {
  //   try {
  //     const response = await fetch(url);
  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log(data.list); // didnt delete it in case any need
  //       // data.list.forEach((el, i) => i <= 14(dataFollowingDays.push(el)));
  //     } else {
  //       console.error("error");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  useState(() => {
    // fetchForecastData();
  }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <h4>info related following days will be shown here...</h4>
        </Col>
      </Row>
    </Container>
  );
};

export default Forecast;
