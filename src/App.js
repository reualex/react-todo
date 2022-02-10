import React, { useReducer } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

// import NotFound from "./app/pages/NotFound";
import Home from "./app/pages/Home";
import About from "./app/pages/About";
import SignIn from "./app/pages/Auth/SignIn";
import SignUp from "./app/pages/Auth/SignUp";
import "./App.scss";
import Loader from "./app/components/Loader";
import Header from "./app/layouts/Header";
import Profile from "./app/pages/Profile";
import Footer from "./app/layouts/Footer";
import strings from "../localization";

function App() {
  const isAuth = useSelector((state) => state.user.isAuth);
  const isLoading = useSelector((state) => state.loader.loading);
  const [_, forceUpdate] = useReducer((x) => x + 1, 0);

  const changeLang = (lang) => {
    strings.setLanguage(lang);
    forceUpdate();
  };

  return (
    <div>
      <div className="app-container">
        <Header changeLang={changeLang} />
        <div className="app-content">
          <Routes>
            <Route exact={true} path="/" element={<Home />} />
            <Route exact path="about" element={<About />} />
            <Route
              exact
              path="sign-up"
              render={isAuth ? <Navigate to="/" /> : <SignUp />}
            />
            <Route
              exact
              path="sign-in"
              element={isAuth ? <Navigate to="/" /> : <SignIn />}
            />
            <Route exact path="profile" element={<Profile />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        {isLoading ? <Loader /> : ""}
      </div>

      <Footer />
    </div>
  );
}

export default App;
