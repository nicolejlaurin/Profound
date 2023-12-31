import './App.css';
import React from 'react';
import NavBar from './components/navbar';
import Landing from './components/landing';
import About from './components/about';
import Service from './components/service';
import Sports from './components/sports';
import Contact from './components/contactpage';
import Footer from './components/footer';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


export default function App() {
  return (
    <div className='app'>


    <input type="checkbox" id="hamburger-input" class="burger-shower"/>

    <label id="hamburger-menu" for="hamburger-input" onClick={handleClick}>
      <nav id="sidebar-menu">
        <h3>Menu</h3>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/aboutpage">About Us</NavLink>
          </li>
          <li>
            <NavLink  to="/service">Services</NavLink>
          </li>
          <li>
            <NavLink to="/client">Client Representation</NavLink>
          </li>
          <li>
            <NavLink to="/faq">FAQ</NavLink>
          </li>
          <li>
            <NavLink to="/contactpage">Contact</NavLink>
          </li>


        </ul>
      </nav>
    </label>
      <input type="checkbox" id="hamburger-input" class="burger-shower" />

        <nav className="nav-default" for="hamburger-input">

              <div class="navbar-left">
                <NavLink to="/">
                <img src={Img_logo} alt="Image"></img>
                </NavLink>


              </div>


              <ul class="nav-links">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/aboutpage">About Us</NavLink>
                </li>
                <li>
                  <NavLink  to="/service">Services</NavLink>
                </li>

                <li>
                  <NavLink to="/faq">FAQ</NavLink>
                </li>
                <li>
                  <NavLink to="/contactpage">Contact</NavLink>
                </li>
              </ul>
          </nav>

          <div class="overlay"></div>

	</div>

);
}
