import React, { useEffect, useState } from "react";
import { map } from "../../assets/img/map.png";
function Map() {
  const [activeButton, setActiveButton] = useState(null);
  const [inputValue, setInputValue] = useState(false);

  const handleToggle = (buttonId) => {
      setActiveButton(buttonId === activeButton ? null : buttonId);
  };

  const handleChange = (e) => {
    setInputValue(!inputValue);
};
useEffect(() => {console.log("working")}, [inputValue]);

  return (
    <>
      <div className="map-box app-empty">
        <div className="nav-map d-flex align-items-center">
          <div className="buttons d-flex">
            <button className={`btn ${!inputValue ? 'active' : ''}`}>Dive In</button>
            <div class="form-check form-switch d-flex align-items-center">
              <input
                class="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                checked={inputValue}
                onChange={handleChange}
                
              />
            </div>
            <button className={`btn ${inputValue ? 'active' : ''}`}>Detailed View</button>
          </div>

          <div className="search">
            <i class="fa fa-search" aria-hidden="true"></i>
            <input type="text" placeholder="search" />
            <i class="fa fa-close"></i>
          </div>

        
          <div className="end d-flex gap-2">
            <button className={`btn btn-e ${activeButton === 1 ? 'active' : ''}`} onClick={() => handleToggle(1)}>
              <i class="fa-solid fa-tower-cell"></i>RSU{" "}
              <i class={`fa fa-close close ${activeButton === 1 ? 'd-inline' : 'd-none'}`}></i> 
            </button>
            <button className={`btn btn-e ${activeButton === 2 ? 'active' : ''}`} onClick={() => handleToggle(2)}>
              <i class="fa-solid fa-tower-broadcast"></i>ODF
              <i class={`fa fa-close close ${activeButton === 2 ? 'd-inline' : 'd-none'}`} ></i>
            </button>
            <button className={`btn btn-e ${activeButton === 3 ? 'active' : ''}`} onClick={() => handleToggle(3)}>
              <i class="fa-solid fa-ethernet"></i> FAT
              <i clas={`fa fa-close close ${activeButton === 3 ? 'd-inline' : 'd-none'}`} ></i>
            </button>
            <button className={`btn btn-e ${activeButton === 4 ? 'active' : ''}`} onClick={() => handleToggle(4)}>
              <i class="fa-solid fa-wifi"></i>DSL<i class={`fa fa-close close ${activeButton === 4 ? 'd-inline' : 'd-none'}`} ></i>
            </button>
            <button className={`btn btn-e ${activeButton === 5 ? 'active' : ''}`} onClick={() => handleToggle(5)}>
              <i class="fa-solid fa-filter"></i>
            </button>
          </div>
        </div>
        <div className="map-container "></div>
      </div>
    </>
  );
}

export default Map;
