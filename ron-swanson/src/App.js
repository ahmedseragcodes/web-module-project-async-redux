import React from "react";
import { connect } from "react-redux";

import { fetchData } from "./store/action";


class App extends React.Component {
  state={
    quote: "Ron Swanson INCOMING",
  }

  componentDidMount(){
    this.props.fetchData();
  }

  render(){
    return (
      <div className="frontPageCatchAllContainer">
        <img src="https://www.gannett-cdn.com/-mm-/eec6fd4cafba6c9b20fad3b0475b2dc4dc63a0e1/c=0-50-534-350/local/-/media/2016/08/05/Henderson/ronswanson.JPG?width=534&height=267&fit=crop&format=pjpg&auto=webp" alt="Ron Swanson From The Show Parks and Recreation" />
        {this.props.isLoading ? <h1>{this.state.quote}</h1> : (
          <div>
          <h1>Listen to Ron Swanson</h1>
          <p>{this.props.quote}</p>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    quote: state.quote,
    error: state.error,
  }
}

export default connect(mapStateToProps, { fetchData })(App)