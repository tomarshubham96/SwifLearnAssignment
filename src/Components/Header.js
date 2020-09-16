import React from 'react';
import M from 'materialize-css';

export default function Header(props) {

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems,
      {
        edge: 'left',
        draggable: true,
        inDuration: 250,
        outDuration: 200,
        onOpenStart: null,
        onOpenEnd: null,
        onCloseStart: null,
        onCloseEnd: null,
        preventScrolling: true
    }      
    );
  });

  return (
    <div>
      <nav className="white">
        <div className="nav-wrapper">
        <a href="#" className="black-text brand-logo">Logo</a>
        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons breadcrumb-mobile-icon">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><a className="grey-text firstLink" href="#"><span>Upcoming <i className="material-icons dp48">adjust</i></span>Live Consultation</a></li>
            <li><a className="grey-text" href="#">Buy Plans</a></li>
            <li><a className="grey-text" href="#">View Plans</a></li>
            <li><a className="btn-login waves-effect waves-light btn">Log In</a></li>
          </ul>
        </div>
    </nav>    
      <ul className="sidenav" id="mobile-demo">
          <li><a href="#">Live Consultation</a></li>
          <li><a href="#">Buy Plans</a></li>
          <li><a href="#">View Plans</a></li>
          <li><a href="#">Log In</a></li>
      </ul>
    </div>
    
  );
}