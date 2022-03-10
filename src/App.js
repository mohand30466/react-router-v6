import "./App.css";
import Header from "./components/Headers";
import Profile from "./components/Profile";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import User from "./components/Users";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Main} from "./components/Main";
import Detail from "./components/Detail";
import Feedback from './components/Feedback'

function App() {
  return (
    <div className="App">
     
        <BrowserRouter>
        <Header/>
          <Routes>
           <Route path="main" element={<Main/>}/ >
           <Route path="detail/:id/:ne" element={<Detail/>}/>
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
            <Route path="profile" element={<Profile />} />
            <Route path="users" element={<User />} />
            <Route path="feedback" element={<Feedback/>} />
           
          </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
