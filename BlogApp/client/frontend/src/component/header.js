import React from "react";
import { Link } from "react-router-dom";

export const Header = ()=>
{
    return (
    <nav class="navbar navbar-expand-lg bg-light"  >
  <div class="container-fluid"  style={{background:"gray"}}>
    <link class="navbar-brand" href="#">Navbar</link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link" href="#">Link</Link>
        </li>
            <li>
            {/* <!-- Example single danger button --> */}
<div class="btn-group">
  <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Action
  </button>
  <ul class="dropdown-menu">
    <li><link class="dropdown-item" href="#">Action</link></li>
    <li><Link to="/blogDetails" class="dropdown-item" href="#">Another action</Link></li>
    <li><link class="dropdown-item" href="#">Something else here</link></li>
    <li><link class="dropdown-item" href="#">Separated link</link></li>
  </ul>
</div>
</li>
        <li class="nav-item">
          <Link to="/userblogs"> <link class="nav-link disabled"> Disabled</link></Link>
        </li>
      </ul>
      <form class="d-flex" role="search">
      <button class="btn btn-outline-success" type="submit">signup</button>
     <Link to="/Login"><button  class="btn btn-outline-success" type="submit">login</button> </Link>
        
      </form>
    </div>
  </div>
</nav>

    );
}




