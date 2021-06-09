import React, { Component } from "react";
import axios from "axios";
import { render } from "@testing-library/react";
import "./ApiStyles.css";
import $ from 'jquery'




class EntitiesApi extends Component {
  state = {
    images: null,
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/photos").then(res => {
      this.setState({
        images: res.data.slice(0, 32)
      });
    });
    $("#btn1").click(function(){
      $("#div1").toggleClass("ListImage");
    });
  }

  render() {
    const imageList =
      this.state.images &&
      this.state.images.map((image) => {
        return (
          <div className="EntitiesApi">
            <img src={image.url} />
            <div>
              <h3>Title</h3>
              <p>Lorem Ipsum is simply dummy text of the printing </p>
            </div>
          </div>
        );
      });

    return <div>
              <input type="button" id="btn1" value="List / Mosaic" />
              <div id="div1" className="MosaicImage">{imageList}</div>

          </div>;
  }
}

export default EntitiesApi;
