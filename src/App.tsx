import React from 'react';
import './App.css';
import LibraryApp from "./components/LibraryApp";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <LibraryApp/>
        </BrowserRouter>
    </div>
  );
}

export default App;
