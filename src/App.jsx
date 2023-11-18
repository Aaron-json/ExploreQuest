import "./App.css";
import { useQuery } from "@tanstack/react-query";
import { Navigate, Routes, Route } from "react-router-dom";
import { default as Weather } from "./Weather/Weather";
import { default as LocationInfo } from "./LocationInfo/LocationInfo";
import { default as NavButton } from "./NavButton/NavButton";
import { useEffect, useState } from "react";
import { default as search_icon } from "./assets/search_icon.png";

const navigation = ["home", "info"];
function App() {
  const [locationState, setLocationState] = useState(undefined);
  // const { data, error, isLoading } = useQuery([location], );
  return (
    <section id="App">
      <div className="app-header">
        <div className="app-header-top">
          <div className="input-box">
            <img src={search_icon} alt="" />
            <input type="text" />
          </div>
        </div>
        <div className="app-header-bottom">
          <div className="nav-buttons">
            {navigation.map((value, index) => {
              return <NavButton key={index} title={value} path={value} />;
            })}
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/home" element={<Weather />} />
        <Route path="/info" element={<LocationInfo />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </section>
  );
}

export default App;
