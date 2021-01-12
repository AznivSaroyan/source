import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {HomePage} from './pages/HomePage'
import {AuthPage} from './pages/AuthPage'
//import {AdminPage} from './pages/AdminPage'
import {UserPage} from './pages/UserPage'

export const useRoutes = isAuthenticated => {
//   if(isAuthenticated && role='admin') {
//     return(
//         <Switch>
//           <Route path="/" exact>
//             <HomePage />
//           </Route>
//           <Route path="/admin" exact>
//             <AdminPage />
//           </Route>
//           <Route path="/auth">
//             <AuthPage />
//           </Route>
//           <Route path="/user/:id" exact>
//             <UserPage />
//           </Route>
//           <Redirect to="/"/>
//         </Switch>
//       )  
//   } 
  if(isAuthenticated){
    return(
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/auth">
            <AuthPage />
          </Route>
          <Route path="/user/:id" exact>
            <UserPage />
          </Route>
          <Redirect to="/"/>
        </Switch>
      )
  }
  
  return(
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/auth">
        <AuthPage />
      </Route>
      <Redirect to="/"/>
    </Switch>
  )
}