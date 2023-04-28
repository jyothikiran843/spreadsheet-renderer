import { Outlet,Link } from "react-router-dom";
export default function Layout(){
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='data'>Data</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='calculator'>Calculator</Link>
                        </li>
                        <li>
                            <Link to='tictoc' className="nav-link">Game</Link>
                        </li>
                    </ul>
                </div>
        </nav>
        <Outlet/>
        </>
    )
}