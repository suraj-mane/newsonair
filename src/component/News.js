import{ NavLink} from "react-router-dom";

function News(){
    return (
        <div className="mt-5 container">
            <ul className="shadow-lg p-3 mb-2 bg-body rounded">
                <li className="list-group-item d-flex">
                    <img src="" alt="#" />
                    <div>
                        <NavLink to="/">
                            <h2>News Title</h2>
                        </NavLink>
                        <p>News Info</p>
                    </div>
                </li>
            </ul>
            <ul className="d-flex flex-wrap shadow-lg p-3 mb-5 bg-body rounded">
                <li className="list-group-item d-flex m-4" style={{width:"297px"}}>
                    <img src="" alt="#" />
                    <div>
                        <NavLink to="/">
                            <h2>News Title</h2>
                        </NavLink>
                        <p>News Info</p>
                        <hr/>
                    </div>
                </li>
                <li className="list-group-item d-flex m-4" style={{width:"297px"}}>
                    <img src="" alt="#" />
                    <div>
                        <NavLink to="/">
                            <h2>News Title</h2>
                        </NavLink>
                        <p>News Info</p>
                        <hr/>
                    </div>
                </li>
                <li className="list-group-item d-flex m-4" style={{width:"297px"}}>
                    <img src="" alt="#" />
                    <div>
                        <NavLink to="/">
                            <h2>News Title</h2>
                        </NavLink>
                        <p>News Info</p>
                        <hr/>
                    </div>
                </li>
                <li className="list-group-item d-flex m-4" style={{width:"297px"}}>
                    <img src="" alt="#" />
                    <div>
                        <NavLink to="/">
                            <h2>News Title</h2>
                        </NavLink>
                        <p>News Info</p>
                        <hr/>
                    </div>
                </li>
                <li className="list-group-item d-flex m-4" style={{width:"297px"}}>
                    <img src="" alt="#" />
                    <div>
                        <NavLink to="/">
                            <h2>News Title</h2>
                        </NavLink>
                        <p>News Info</p>
                        <hr/>
                    </div>
                </li>
                <li className="list-group-item d-flex m-4" style={{width:"297px"}}>
                    <img src="" alt="#" />
                    <div>
                        <NavLink to="/">
                            <h2>News Title</h2>
                        </NavLink>
                        <p>News Info</p>
                        <hr/>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default News;