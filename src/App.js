import React from "react";
import "./App.css";
import {Footer,Blog,Possibility,Features,Gpt,Header} from "./container";
import {Brand,Cta,Navbar} from "./components";
function App() {
  return (
    <div className="App">
    <div className="gradient__bg">
<Navbar />
<Header />
    </div>
    <Brand />
    <Gpt />
    <Features/>
    <Possibility />
    <Cta />
    <Blog />
    <Footer />
    </div>
  );
}

export default App;
