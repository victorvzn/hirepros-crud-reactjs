import React from 'react'

import Professional from '../components/Professional'
import ProfessionalForm from '../components/ProfessionalForm'
import PageLoading from '../components/PageLoading'

import api from '../services/api'

class ProfessionalNew extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    }
  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = async e => {
    e.preventDefault()
    this.setState({ loading: true, error: null })
    try {
      await api.professionals.create(this.state.form)
      this.setState({ loading: false })
      this.props.history.push('/professionals')
    } catch (error) {
      this.setState({ loading: false, error: error })
    }
  }

  render() {
    if (this.state.loading) {
      return <PageLoading />
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Professional
              avatarUrl="https://es.gravatar.com/userimage/31287920/11eae31316b44c2adc0e37df8e274921.png"
              firstName={this.state.form.firstName || 'FIRST_NAME'}
              lastName={this.state.form.lastName || 'LAST_NAME'}
              email={this.state.form.email || 'EMAIL'}
              jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
              twitter={this.state.form.twitter || 'twitter'}
            />
          </div>
          <div className="col">
            <h1 className="text-center">New professional</h1>

            <ProfessionalForm
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              formValues={this.state.form}
              error={this.state.error}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default ProfessionalNew