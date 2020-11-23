import React from 'react'

import Navbar from '../components/Navbar'
import Professional from '../components/Professional'
import ProfessionalForm from '../components/ProfessionalForm'

class ProfessionalNew extends React.Component {
  state = { form: {
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: '',
  } }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col">
              <Professional
                avatarUrl="https://es.gravatar.com/userimage/31287920/11eae31316b44c2adc0e37df8e274921.png"
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                email={this.state.form.email}
                jobTitle={this.state.form.jobTitle}
                twitter={this.state.form.twitter}
              />
            </div>
            <div className="col">
              <ProfessionalForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfessionalNew