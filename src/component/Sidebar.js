import {NavLink} from "react-router-dom";

function Sidebar(props){
    return(
        <div className="container mt-5">
            <div class="dropdown">
              <button class="btn btn-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="menu.png"alt="bar" style={{width:"20px"}} />
              </button>
              <ul class="dropdown-menu dropdown-menu-dark w-25">
                <li className=""><NavLink className="dropdown-item" to="/">Home</NavLink></li>
                <li><NavLink className="dropdown-item" to="/national">National</NavLink></li>
                <li><NavLink className="dropdown-item" to="/international">InterNational</NavLink></li>
                <li><NavLink className="dropdown-item" to="/sports">Sports</NavLink></li>
                <li><NavLink className="dropdown-item" to="/business">Business</NavLink></li>
              </ul>
            </div>
        </div>
    )
}

export default Sidebar;