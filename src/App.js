import './App.css';
import Login from './page/Login';
import HomePage from './page/HomePage';
import {BrowserRouter as Router ,Routes ,  Route} from 'react-router-dom'
import Header from './component/Header';
import {Provider} from 'react-redux'
// import { PrivateRoute } from './utils/PrivateRoute';
import { ProtectedRoute } from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import Register from './page/Register';
import Home from './page/Home';
import Cart from './shop/Cart';
import Jsonplaceholder from './Jsonplaceholders/Jsonplaceholder';
import CakeShop from './react-redux/CakeShop';
import store from './react-redux/store';
import Reset_password from './page/Reset_password';
import Reset_password_confirmation from './page/Reset_password_confirmation';
import Activate from './page/Activate';
import Checkyouremail from './page/Checkyouremail';
import Form from './shop/Shop2/Form';
import UploadImage from './shop/Shop2/UploadImage';
import ChangePage from './shop/Shop2/changedata/ChangePage';
import DeletePage from './shop/Shop2/deletepage/DeletePage';
import store_2 from './shop/Shop2/redux/store';
import ControlPannel from './shop/Shop2/mainpage/ControlPannel';
import PageNoPermission from './shop/Shop2/Additionalpages/PageNoLogin';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/register' element ={
            <AuthProvider>
              <Register/>
            </AuthProvider>
          } 
          />
          <Route path='/login' 
          element = {
            <AuthProvider>
              <Login/>
            </AuthProvider>
          }
          />
          
          <Route path='/' element = {
            <AuthProvider>
              <Home/>
            </AuthProvider>
          } />
          <Route path='/card' element ={
            <AuthProvider>
              <Cart/>
            </AuthProvider>
          }/>
          <Route path='/redux' element = {
            <Provider store = {store}>
              <CakeShop/>
            </Provider>
          
          } />
          <Route path='/checkyouremail' element = {
            <Checkyouremail/>
          } />
          <Route path='/activate/:uid/:token' element = {
            <AuthProvider>
              <Activate/>
            </AuthProvider>
          } />
          <Route path='/password_reset' element = {
            <AuthProvider>
              <Reset_password/>
            </AuthProvider>
          } />
          
          <Route path='/nopermission' element ={<PageNoPermission/>} />

          <Route element = {
            <AuthProvider>
              <ProtectedRoute/>
            </AuthProvider>
          
          } >


            <Route path='/control_panel/change_page/:id/delete' element = {
              <AuthProvider>
                <DeletePage/>
              </AuthProvider>
            } />
            <Route path='/control_panel' element = {
              <AuthProvider>
                <ControlPannel/>
              </AuthProvider>
            } />
            <Route path='/control_panel/create_page' element = {
              <AuthProvider>
                <Form/>
              </AuthProvider>
            } />
            <Route path='control_panel/change_page/:id' element = {
              <AuthProvider>
                <Provider store={store_2}>
                  <ChangePage/>
                </Provider>
              </AuthProvider>
            } />

          </Route>
          


          <Route path='/password_reset/confirm/:uid/:token' element = {
            <AuthProvider>
              <Reset_password_confirmation/>
            </AuthProvider>
          } />
          <Route path='/img' element={
            <AuthProvider>
              <UploadImage/>
            </AuthProvider>
          } />
          <Route path='/jsonplaceholder' element = {<Jsonplaceholder/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
