import React from 'react'

import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'

import ProfessionalDetails from '../pages/ProfessionalDetails'

import api from '../services/api'

class ProfessionalDetailsContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false,
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async e => {
    this.setState({ loading: true, error: null })

    try {
      const data = await api.professionals.read(
        this.props.match.params.professionalId
      )
      this.setState({ loading: false, data: data })
    } catch(error) {
      this.setState({ loading: false, error: error })
    }
  }

  handleOpenModal = e => {
    this.setState({ modalIsOpen: true })
  }

  handleCloseModal = e => {
    this.setState({ modalIsOpen: false })
  }

  handleDeleteProfessional = async e => {
    this.setState({ loading: true, error: null })

    try {
      await api.professionals.remove(
        this.props.match.params.professionalId
      )

      this.setState({ loading: false })

      this.props.history.push('/professionals')
    } catch(error) {
      this.setState({ loading: false, error: error })
    }
  }

  render() {
    if (this.state.loading) {
      return <PageLoading />
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />
    }

    return (
      <ProfessionalDetails
        onOpenModal={this.handleOpenModal}  
        onCloseModal={this.handleCloseModal}
        modalIsOpen={this.state.modalIsOpen}
        onDeleteProfessional={this.handleDeleteProfessional}
        professional={this.state.data} />
    )
  }
}

export default ProfessionalDetailsContainer