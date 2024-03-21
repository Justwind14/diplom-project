import React from "react";
import "./styles/style.scss"
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Subscribe from "./components/subscribtion/Subscribe";
import AppRouter from "./components/AppRouter";
import {HistoryRouter} from "./components/utils/HistoryRouter";
import {browserHistory} from "./components/utils/BrowserHistory";

function App() {

  return (
      <HistoryRouter history={browserHistory}>
          <div className="wrapper">
              <Header/>
              <div className="main">
                  <AppRouter/>
                  <Subscribe/>
              </div>
              <Footer/>
          </div>
      </HistoryRouter>
);
}

export default App;
