import React from 'react'

import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/professionals">Hire Professionals</Link>
        </div>
      </div>
    )
  }
}

export default Navbar