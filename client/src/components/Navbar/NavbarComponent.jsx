import React from "react";
import logo from '../../assets/logo.png'
function NavbarComponent() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand fs-4 fw-bold" href="#">
          <img src={logo} height={40} width={120}  alt="" />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default NavbarComponent;
