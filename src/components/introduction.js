import React, { Component } from 'react';

class Introduction extends Component {
  render() {
    return (
      <div>
        <p>My name is {this.props.name}, and I will be your cohort lead for this course!</p>
      </div>
    )
  }
}

export default Introduction;