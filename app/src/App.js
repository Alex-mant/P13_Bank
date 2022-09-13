import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { store } from "./app/store";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Index from "./pages/index";
import SignIn from "./pages/sign-in";
import User from "./pages/user";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Nav/>
            <Routes>
              <Route exact path="/" element={<Index/>} />
              <Route path="/signIn" element={<SignIn/>} />
              <Route path="/user/profile" element={<User/>} />
            </Routes>
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
