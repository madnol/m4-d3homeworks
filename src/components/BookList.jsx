import { Row } from "react-bootstrap";
import React from "react";
import SingleBook from "./SingleBook";
import fantasyBooks from "../data/fantasy.json";
import { render } from "@testing-library/react";

class BookList extends React.Component {
  state = {
    query: "",
  };

  handleFilterChange = event => {
    //console.log(event.target.value);
    this.setState({ query: event.target.value });
  };

  render(props) {
    return (
      <>
        <input type="text" onChange={this.handleFilterChange} />
        <Row>
          {fantasyBooks
            .filter(pippo => pippo.title.includes(this.state.query))
            .map(pippo => (
              <SingleBook book={pippo} />
            ))}
        </Row>
      </>
    );
  }
}

export default BookList;
