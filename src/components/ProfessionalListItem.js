import React from 'react'

import './styles/ProfessionalsListItem.css'

import Gravatar from './Gravatar';

class ProfessionalsListItem extends React.Component {
  render() {
    return (
      <div className="ProfessionalsListItem">
        <Gravatar
          className="ProfessionalsListItem__avatar"
          email={this.props.professional.email}
        />

        <div>
          <strong>
            {this.props.professional.firstName} {this.props.professional.lastName}
          </strong>
          <br />@{this.props.professional.twitter}
          <br />
          {this.props.professional.jobTitle}
        </div>
      </div>
    );
  }
}

export default ProfessionalsListItem