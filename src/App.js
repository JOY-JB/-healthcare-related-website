import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import NotFound from './component/NotFound/NotFound';
import JoinClass from './component/JoinClass/JoinClass';
import Register from './component/Register/Register';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './component/Login/PrivateRoute/PrivateRoute';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div style={{ height: "100vh" }} className="App d-flex flex-column">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/joinclass/:classId">
              <JoinClass></JoinClass>
            </PrivateRoute>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
