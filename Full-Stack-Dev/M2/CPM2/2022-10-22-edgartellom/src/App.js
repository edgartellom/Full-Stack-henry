import React from "react";
import { Route } from "react-router-dom";
import Ships from "./components/Ships/Ships";
import CharacterDetail from "./components/CharacterDetail/CharacterDetail";
import Nav from "./components/Nav/Nav";
import CreateCharacter from "./components/CreateCharacter/CreateCharacter";
import Home from "./components/Home/Home";

function App() {
  return (
    <div>
      <Route path = '/'>
        <Nav />
      </Route>
      <Route exact path = '/'>
        <Home />
      </Route>
      <Route path = '/character/:id'>
        <CharacterDetail />
      </Route>
      <Route path = '/character/create'>
        <CreateCharacter />
      </Route>
      <Route path = '/ships'>
        <Ships />
      </Route>
    </div>
  );
}
export default App;
