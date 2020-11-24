import React from 'react'
import { Link} from 'react-router-dom'

import Professional from '../components/Professional'
import DeleteProfessionalModal from '../components/DeleteProfessionalModal'

function ProfessionalDetails(props) {
  const professional = props.professional

  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">
              {professional.firstName} {professional.lastName}
            </h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-8">
            <Professional
              firstName={professional.firstName}
              lastName={professional.lastName}
              email={professional.email}
              jobTitle={professional.jobTitle}
              twitter={professional.twitter}
            />
          </div>
          <div className="col-4">
            <h2 className="text-left mb-3">Actions</h2>
            <div className="d-flex justify-content-start mb-3">
              <Link
                className="btn btn-success btn-badge"
                to={`/professionals/${professional.id}/edit`}>Edit</Link>
            </div>
            <div className="d-flex justify-content-start">
              <button
                onClick={props.onOpenModal}
                className="btn btn-danger btn-badge">
                Delete
              </button>

              <DeleteProfessionalModal
                isOpen={props.modalIsOpen}
                onClose={props.onCloseModal}
                onDeleteProfessional={props.onDeleteProfessional} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfessionalDetails