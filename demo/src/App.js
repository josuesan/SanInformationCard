import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SanInformationCard from './@components/san-information-card';
import BgImage from "./assets/background-theme.jpg";
import Profile from "./assets/profile-photo.jpg";
class App extends Component {
  render() {
    return (
      <div className="App">
        <SanInformationCard 
          title={"Josue Sanchez"}
          subtitle={"Computer Science"}
          description={"Soy licenciado en Computacion graduado en la UCV Caracas - Venezuela. Tengo 23 años y me encanta programar "}
          date={"Feb 10 2018"}
          profileImg={Profile}
          bgImg={BgImage}
        />
      </div>
    );
  }
}

export default App;
