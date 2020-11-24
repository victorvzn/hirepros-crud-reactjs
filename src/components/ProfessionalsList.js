import React from 'react'
import { Link } from 'react-router-dom'

import './styles/ProfessionalsList.css'
import ProfessionalListItem from './ProfessionalListItem'

class ProfessionalList extends React.Component {
  render() {
    if (this.props.professionals.length === 0) {
      return (
        <div className="text-center">
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/professionals/new">
            Create new professional
          </Link>
        </div>
      )
    }
    return (
      <div className="ProfessionalsList">
        <div className="Professionals__container">
          <ul className="list-unstyled">
            {this.props.professionals.map((professional) => {
              return (
                <li key={professional.id}>
                  <Link
                    to={`/professionals/${professional.id}`}
                    className="text-reset text-decoration-none">
                    <ProfessionalListItem professional={professional} />
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default ProfessionalList