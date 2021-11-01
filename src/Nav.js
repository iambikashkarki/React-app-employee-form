import React from "react";

import { Link } from "react-router-dom";
import { Menu } from "antd";


class Nav extends React.Component {
  render() {
    return (
      <div className="Navbar" style={{backgroundColor:"grey", height:"50px"}}>
        <Menu
          class="d-flex py-3"
          style={{
            fontWeight: "bolder",
            fontSize: "18px",
            marginBottom: "0",
            display:"flex",
            paddingTop:"7px",
            
          }}
        >
         
          <Link to="/aboutus">
            <Menu.Item style={{color: "white"}}>About Us</Menu.Item>
          </Link>
          <Link to="/form">
            <Menu.Item style={{color: "white"}}>Form</Menu.Item>
          </Link>
          <Link to="/table">
            <Menu.Item style={{color: "white"}}>Table</Menu.Item>
          </Link>
          
          
          
        </Menu>
      </div>
    );
  }
}

export default Nav;