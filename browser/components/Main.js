import React, { Component } from 'react';
import axios from 'axios';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { students: [] };
  }

  async componentDidMount() {
    let { data: students } = await axios.get('/student');
    this.setState({ students });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>STUDENTS</h1>
        <h3>Name</h3>
        <ul>
          {this.state.students.map(student => {
            return <li key={student.id}>{student.fullName}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Main;
