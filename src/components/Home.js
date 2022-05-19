import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <NavBar />
      <div className="home">
        <p>
          Welcome to our app(SHOP FOR ME APP) in this app, we aim to solve the
          problem of people having to leave their bush schedules in order to
          some items which they can get with the click of a button.This app is
          easy to use.Anyone who does his or her shopping using this app will
          get their items delivered at there doorstep.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Home;
