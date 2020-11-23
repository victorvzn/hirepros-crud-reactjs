import React from 'react'

class ProfessionalForm extends React.Component {

  handleSubmit = e => {
    e.preventDefault()
    console.log('ok')
  }

  render() {
    return (
      <div>
        <h1>New professional</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              onChange={this.props.onChange}
              value={this.props.formValues.firstName} />
          </div>

          <div className="form-group">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              onChange={this.props.onChange}
              value={this.props.formValues.lastName} />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              onChange={this.props.onChange}
              value={this.props.formValues.email} />
          </div>

          <div className="form-group">
            <label>Job title</label>
            <input
              type="text"
              className="form-control"
              name="jobTitle"
              onChange={this.props.onChange}
              value={this.props.formValues.jobTitle} />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input
              type="text"
              className="form-control"
              name="twitter"
              onChange={this.props.onChange}
              value={this.props.formValues.twitter} />
          </div>

          <button
            type="submit"
            className="btn btn-success">Save</button>
        </form>
      </div>
    )
  }
}

export default ProfessionalForm 