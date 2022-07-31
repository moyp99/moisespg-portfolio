import React from 'react'
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Nav from "./components/Nav";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import { theme } from "./styles";
import { Switch, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Nav />
        <GlobalStyles />
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact>
            <About />
          </Route>
          <Route path='/portfolio' exact>
            <Portfolio />
          </Route>
          <Route path='/contact' exact>
            <Contact />
          </Route>
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
