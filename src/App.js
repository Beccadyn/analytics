import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import PasswordReset from './pages/PasswordReset';
import DashBoard from './pages/DashBoard';
import ThisWeek from './pages/ThisWeek';
import ThisMonth from './pages/ThisMonth';
import ThisYear from './pages/ThisYear';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        

          <Route index element={<LoginPage />} />
          <Route path="PasswordReset" element={<PasswordReset/>}/>
          <Route path="DashBoard" element={<DashBoard/>}/>
          <Route path="ThisWeek" element={<ThisWeek/>}/>
          <Route path="ThisMonth" element={<ThisMonth/>}/>
          <Route path="ThisYear" element={<ThisYear/>}/>




          




        

      </Routes>
    </BrowserRouter>
  );
}


export default App;
