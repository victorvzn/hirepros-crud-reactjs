import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Layout from '../components/Layout'
import ProfessionalNew from '../pages/ProfessionalNew'
import ProfessionalEdit from '../pages/ProfessionalEdit'
import ProfessionalDetailsContainer from '../pages/ProfessionalDetailsContainer'
import Professionals from '../pages/Professionals'
import NotFound from '../pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/professionals" component={Professionals} />
          <Route exact path="/professionals/new" component={ProfessionalNew} />
          <Route exact path="/professionals/:professionalId" component={ProfessionalDetailsContainer} />
          <Route exact path="/professionals/:professionalId/edit" component={ProfessionalEdit} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
