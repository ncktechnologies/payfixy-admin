import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Crm from './container/dashboards/crm/crm.jsx'
import './index.scss'
import ScrollToTop from './components/ui/scrolltotop.jsx'
import Agents from './container/agents/agents.jsx'
import Transaction from './container/transaction/transcaction.jsx'
import Commissions from './container/commissions/commissions.jsx'
import Admins from './container/admins/admins.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <BrowserRouter>
      <React.Suspense>
      <ScrollToTop/>
        <Routes>
          <Route path={`${import.meta.env.BASE_URL}`} element={<App />}>
            <Route index  element={<Crm />} />
            <Route path={`${import.meta.env.BASE_URL}dashboards/crm`}  element={<Crm />} />
            <Route path={`${import.meta.env.BASE_URL}admins`}  element={<Admins />} />
            <Route path={`${import.meta.env.BASE_URL}agents`}  element={<Agents />} />
            <Route path={`${import.meta.env.BASE_URL}transaction`}  element={<Transaction />} />
            <Route path={`${import.meta.env.BASE_URL}commissions`}  element={<Commissions />} />
          </Route>
          
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  </React.Fragment>
)
