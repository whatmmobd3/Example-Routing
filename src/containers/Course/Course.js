import React, { Component } from "react";

class Course extends Component {
  state = {
    courseTitle: null,
  };

  parseQueryParams() {
      console.log(this.props);
    const query = new URLSearchParams(this.props.location.search);
    for (let param of query.entries()) {
        // console.log(param);
      if (this.state.courseTitle !== param[1]) {
        this.setState({ courseTitle: param[1] });
      }
    }
  }
  componentDidMount() {
    this.parseQueryParams();
  }
  componentDidUpdate() {
    this.parseQueryParams();
  }

  render() {
    return (
      <div>
        <h1>{this.state.courseTitle}</h1>
        <p>You selected course with ID: {this.props.match.params.courseId}</p>
      </div>
    );
  }
}

export default Course;
