import { useState } from "react";
import { Route, Switch } from 'react-router-dom';
import "./App.css";
import Header from "./Component/Header";
import Sidebar from "./Component/Sidebar";
import Home from "./Component/Home";
import Reports from "./Component/Reports";
import About from "./Component/About";
import crypto from "./Component/Crpto";
import Contact from "./Component/Contact";
import population from "./Component/Population";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <div className="newup">
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/population" exact component={population} />
        <Route path="/crypto" exact component={crypto} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/reports" exact component={Reports} />
      </Switch>
      </div>
    </div>
  );
}

export default App;
