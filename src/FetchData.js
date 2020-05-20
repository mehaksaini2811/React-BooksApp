import React, { useState } from "react";
import axios from "axios";

const FetchData = props => {
  axios.get(props.url).then(res => {
    res.data.map(data => {
      //console.log(data);
      //setListOfBooks(data);
      //console.log(listOfBooks);
    });
  });

  return <h1>hello</h1>;
};
export default FetchData;
