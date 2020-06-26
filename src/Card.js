import React from "react";
import Cerdit_card from "./Credit_card.png";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company_name: "Go My Code",
      number_card: "2020",
      data_card: "2002",
      name_user: "User Name",
    };
  }
  Card_user = (e) => {
    this.setState({
      name_user: e.target.value,
    });
  };
  Card_number = (e) => {
    this.setState({
      number_card: e.target.value,
    });
  };
  Card_data = (e) => {
    this.setState({
      data_card: e.target.value,
    });
  };
  Card_company = (e) => {
    this.setState({
      company_name: e.target.value,
    });
  }; // .match(/[0-9]/g)
  render() {
    return (
      <div className="Credit_Card">
        <div className="output_Card">
          <div>
            <h1 className="company_name">
              {this.state.company_name.toUpperCase()}
            </h1>

            <h1 className="number_card">
              {this.state.number_card
                .padEnd(16, "*")
                .replace(/(.{4})/g, "$1 ")
                .match(/[0-9* ]+/)}
            </h1>
            <h1 className="data_card">
              {this.state.data_card.replace(/^(\d{2})/, "$1 / ")}{" "}
            </h1>
            <h1 className="name_user">{this.state.name_user.toUpperCase()}</h1>
          </div>
          <img className="logo" src={Cerdit_card} />
        </div>
        <div className="input_Card">
          <input
            type="text"
            onChange={this.Card_company}
            className="input_company"
          ></input>
          <input
            type="text"
            onChange={this.Card_number}
            maxLength="16"
            className="input_number"
          ></input>
          <input
            type="text"
            onChange={this.Card_data}
            maxLength="4"
            className="input_data"
          ></input>
          <input
            type="text"
            onChange={this.Card_user}
            className="input_user"
          ></input>
        </div>
      </div>
    );
  }
}
export default Card;
