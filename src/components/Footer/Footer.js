import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="tabs">
        <input
          type="radio"
          className="tabs__radio"
          name="tabs-example"
          id="tab1"
          checked
        />
        <label htmlFor="tab1" className="tabs__label">
          Tab 1
        </label>
        <div className="tabs__content">CONTENT for Tab 1</div>
        <input
          type="radio"
          className="tabs__radio"
          name="tabs-example"
          id="tab2"
        />
        <label htmlFor="tab2" className="tabs__label">
          Tab 2
        </label>
        <div className="tabs__content">CONTENT for Tab 2</div>
      </div>
    </footer>
  );
}

export default Footer;
