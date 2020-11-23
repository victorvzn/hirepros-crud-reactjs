import React from 'react'

import './styles/ProfessionalsList.css'
import ProfessionalListItem from './ProfessionalListItem'

class ProfessionalList extends React.Component {
  render() {
    return (
      <div className="ProfessionalsList">
        <ul className="list-unstyled">
          {this.props.professionals.map((professional) => {
            return (
              <li key={professional.id}>
                <a href="/" className="text-reset text-decoration-none">
                  <ProfessionalListItem professional={professional} />
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default ProfessionalList