import React from 'react';
import {Link} from 'react-router-dom';
function NavBar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.tittle}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
  
              </ul>
              <form class="d-flex">
              <div class={`form-check form-switch text-${props.mode === 'light' ? 'dark':'light'}`}>
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                <label class="form-check-label" for="flexSwitchCheckDefault">Enable to {props.mode==='light'?'dark':'light'} mode</label>
              </div>
              </form>
    
          </div>
        </div>
      </nav>
    </>
  )
}
export default NavBar;