import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import Course from "../Course/Course";
import "./Courses.css";

class Courses extends Component {
  state = {
    courses: [
      { id: 1, title: "Angular - The Complete Guide" },
      { id: 2, title: "Vue - The Complete Guide" },
      { id: 3, title: "PWA - The Complete Guide" },
    ],
  };

  render() {
    return (
      <div>
        <h1>This is Course</h1>
        <section className="Courses">
          {this.state.courses.map((c) => {
            return (
              <Link
                key={c.id}
                to={{
                  pathname: this.props.match.url + "/" + c.id,
                  search: "?title=" + c.title,
                }}
              >
                <article className="Courses">{c.title}</article>
              </Link>
            );
          })}
        </section>
        <Route path={this.props.match.url + "/:courseId"} component={Course} />
      </div>
    );
  }
}

export default Courses;
