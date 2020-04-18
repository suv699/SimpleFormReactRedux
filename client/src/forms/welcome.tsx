import React from "react";
import {connect} from "react-redux";

const Welcome = () => {
  return (
    <div>
      <h1>Welcome Page</h1>
    </div>
  )
}

export default connect(null, null)(Welcome)