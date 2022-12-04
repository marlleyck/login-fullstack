import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AppContextProvider } from "./contexts/AppContext"

import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
import { Profile } from "./pages/Profile"
import { Register } from "./pages/Register"
import { PrivateRoute } from "./PrivateRoute"

const App = () => {
  return (
    <Router>
      <AppContextProvider>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/register' element={ <Register /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/profile' element={ <PrivateRoute><Profile /></PrivateRoute> } />
        </Routes>
      </AppContextProvider>
    </Router>
  )
}

export default App
