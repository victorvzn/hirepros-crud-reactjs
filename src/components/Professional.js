import React from 'react';

import "./styles/Professional.css"

class Professional extends React.Component {
  render() {
    return (
      <div className="Professional">
        <div className="Professional__header">Professional Profile</div>

        <div className="Professional__section-name">
          <img
            className="Professional__avatar"
            src={this.props.avatarUrl}
            alt="Avatar"
          />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>

        <div className="Professional__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>

        <div className="Professional__footer">#xxxxx</div>
      </div>
    )
  }
}

export default Professional