import React from 'react'
import { Link } from 'react-router-dom'

import './styles/Professionals.css'

import ProfessionalsList from '../components/ProfessionalsList'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import Loader from '../components/Loader'

import api from '../services/api'

class Professionals extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined
  }

  componentDidMount() {
    this.fetchData()

    this.intervalId = setInterval(this.fetchData, 5000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null })

    try {
      const data = await api.professionals.list()
      this.setState({ loading: false, data: data })
    } catch (error) {
      this.setState({ loading: false, error: error })
    }
  }

  render() {
    if (this.state.loading === true && !this.state.data) {
      return <PageLoading />
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />
    }

    return (
      <div className="Professionals__container">
        <div className="Professionals__buttons">
          <Link to="/professionals/new" className="btn btn-primary">
            New Professional
          </Link>
        </div>

        <ProfessionalsList professionals={this.state.data} />

        {!this.state.loading && (
          <div className="d-flex justify-content-center">
            <Loader />
          </div>
        )}
      </div>
    )
  }
}

export default Professionals