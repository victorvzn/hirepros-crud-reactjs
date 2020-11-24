import React from 'react'

import Modal from './Modal'
import './styles/DeleteProfessionalModal.css'

function DeleteProfessionalModal(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="DeleteProfessionalModal">
        <h1>Are you sure?</h1>

        <p>You are about to delete this professional.</p>

        <div className="mt-4">
          <button
            onClick={props.onDeleteProfessional}
            className="btn btn-danger btn-badge mr-4">
            Delete
          </button>

          <button
            onClick={props.onClose}
            className="btn btn-light btn-badge">
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default DeleteProfessionalModal