import React, { useState } from "react";
import CardGrid from "./Components/Card";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";

import Footer from "./Components/Footer";

function App() {
  const [cartValue, setCartValue] = useState(0);

  return (
    <>
      <Navbar cartValue={cartValue} />
      <Header />
      <section>
        <div className="container">
          <div className="row">
            <CardGrid setCartValue={setCartValue}></CardGrid>
          </div>
        </div>
      <Footer/>
      </section>
    </>
  );
}

export default App;