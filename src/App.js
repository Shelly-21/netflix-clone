import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./Screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./Screens/LoginScreen";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./Screens/ProfileScreen";


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribed =auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // logged in
        dispatch(login({
          uid: userAuth.uid,
          email:userAuth.email ,
        }));
      } else {
        // logged out
        dispatch(logout());
      }
    });

    return unsubscribed;
  }, [dispatch]);
  return (
    <div className="App">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route exact path="/" element={<HomeScreen />}></Route>
            <Route exact path="/profile" element={<ProfileScreen/>}></Route>
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
