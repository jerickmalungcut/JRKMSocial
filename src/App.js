import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Axios from "axios";

// Components
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Homepage from "./components/Homepage";

import About from "./components/About";
import Terms from "./components/Terms";
import Footer from "./components/Footer";
import CreatePost from "./components/CreatePost";
import Post from "./components/ViewSinglePost";
import FlashMessages from "./components/FlashMessages";

//To set the Default value on the server side
Axios.defaults.baseURL = "http://localhost:8080";

function App() {
  // Will use this as a prop on the navigation to make it work
  const [loggedIn, setLoggedIn] = useState(
    Boolean(localStorage.getItem("jrkmToken"))
  );
  //This is for the flash messages when successfully posted
  const [flashMessages, setFlashMessages] = useState([]);

  const addFlashMessage = (msg) => {
    setFlashMessages((prev) => prev.concat(msg));
  };

  return (
    <div className="App">
      <Router>
        <FlashMessages messages={flashMessages} />
        <header>
          <Navigation loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          <Routes>
            <Route
              exact
              path="/"
              element={loggedIn ? <Homepage /> : <Home />}
            />
            {/* The addFlashMessage is for the CreatePost component */}
            <Route
              path="/create-post"
              element={<CreatePost addFlashMessage={addFlashMessage} />}
            />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/about" element={<About />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </header>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

//Switch is not working as of the moment
// {/* Home Page */}
// <Route exact path="/">
//   <Home />
// </Route>
// {/* About Page */}
// <Route path="/about-us">
//   <About />
// </Route>
// {/* Terms Page */}
// <Route path="/terms">
//   <Terms />
// </Route>
