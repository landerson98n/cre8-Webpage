import React from "react";
import { Home } from "../components/Pages/Home";
import { About } from "../components/Pages/About";
import { Equipe } from "../components/Pages/Equipe";
import {
    Switch,
    Route,
  } from "react-router-dom";


export default function MainRoutes(){
    return(
        <Switch>
          <Route element={<Home />}/>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Equipe" element={<Equipe />} />
        </Switch>
    );
}