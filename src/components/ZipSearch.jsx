import React, { Component } from "react";
import axios from "axios";
import ZipInfo from "./ZipInfo";

class ZipSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zip: [],
      code: "",
      match: false,
    };

    //this.componentDidMount = this.componentDidMount.bind(this);
    this.fetchZipCode = this.fetchZipCode.bind(this);
  }

  setZip = (event) => {
    this.setState({
      code: event.target.value,
    });
  };

  // componentDidMount(){
  //     this.fetchZipCode();
  // }

  fetchZipCode() {
    axios
      .get(`http://ctp-zip-api.herokuapp.com/zip/${this.state.code}`)
      .then((result) => {
        this.setState({
          zip: result.data,
          match: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="zipsearch">
        <p>Zip Code: </p>
        <input
          name="code"
          type="text"
          onChange={(e) => {
            this.setZip(e);
          }}
          value={this.state.code}
          placeholder="Try 10016"
        />
        <button onClick={this.fetchZipCode}>Search</button>

        {this.state.match ? (
          <div>
            {this.state.zip.map((item, index) => (
              <ZipInfo
                key={index}
                city={item.City}
                state={item.State}
                lat={item.Lat}
                long={item.Long}
                population={item.EstimatedPopulation}
                wages={item.TotalWages}
              />
            ))}
          </div>
        ) : (
          <p>No Result</p>
        )}
      </div>
    );
  }
}
export default ZipSearch;
