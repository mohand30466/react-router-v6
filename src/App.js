import "./App.css";
import Header from "./components/Headers";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import User from "./components/Users";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "./components/Main";
import Detail from "./components/Detail";
import Feedback from "./components/Feedback";
import { DataProvider } from "./components/hookContext";
function App() {
  const user = localStorage.getItem('user_data')
  const cmt="welcome back we are happy to see your feedback"
  return (
    <div className="App">
      <BrowserRouter>
        <DataProvider user={user} cmt={cmt}>
          <Header />

          <Routes>
            <Route path="main" element={<Main />} />
            <Route path="detail/:id/:ne" element={<Detail />} />
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
            <Route path="home" element={<Home />} />
            <Route path="users" element={<User />} />
            <Route path="feedback" element={<Feedback />} />
          </Routes>
        </DataProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
