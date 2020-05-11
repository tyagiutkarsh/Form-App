import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      mobile: "",
      email: "",
      items: []
    };
  }

  handleFormSubmit = e => {
    e.preventDefault();

    let items = [...this.state.items];
    if (this.state.name === "") {
      alert("Name cannot be empty");
    } else if (this.state.mobile === "") {
      alert("Mobile cannot be empty");
    } else if (this.state.email === "") {
      alert("E-Mail cannot be empty");
    } else {
      items.push({
        name: this.state.name,
        mobile: this.state.mobile,
        email: this.state.email
      });

      this.setState({
        items,
        name: "",
        mobile: "",
        email: ""
      });
    }
  };

  handleInputChange = e => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="App">
        <Form
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          newName={this.state.name}
          newMobile={this.state.mobile}
          newEmail={this.state.email}
        />
        <Table items={this.state.items} />
      </div>
    );
  }
}

class Table extends React.Component {
  render() {
    const items = this.props.items;
    return (
      <div id="Table">
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Mobile</th>
              <th>E-Mail</th>
            </tr>
            {items.map(item => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.mobile}</td>
                  <td>{item.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

class Form extends React.Component {
  render() {
    return (
      <div id="Form">
        <h3>Subscription Form</h3>
        <form onSubmit={this.props.handleFormSubmit}>
          <label htmlFor="name">
            <input
              id="name"
              placeholder="Name"
              value={this.props.newName}
              type="text"
              name="name"
              onChange={this.props.handleInputChange}
            />
          </label>
          <label htmlFor="mobile">
            <input
              id="mobile"
              placeholder="Mobile"
              value={this.props.newMobile}
              type="number"
              name="mobile"
              onChange={this.props.handleInputChange}
            />
          </label>
          <label htmlFor="email">
            <input
              id="email"
              placeholder="E-Mail"
              value={this.props.newEmail}
              type="email"
              name="email"
              onChange={this.props.handleInputChange}
            />
          </label>
          <button type="submit" value="Submit">
            Add Item
          </button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
