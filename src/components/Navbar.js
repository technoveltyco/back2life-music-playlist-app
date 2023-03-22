import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <Link className="navbar-brand" to="/">
                Home
            </Link>
            <div>
                <ul className="nav-list navbar-nav flex flex-row space-x-10 pl-10">
                    <li className="nav-item">
                        <NavLink
                            to="/results"
                            className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                        >
                            Explore
                        </NavLink>
                    </li>

                    <li className="nav-item ">
                        <NavLink
                            to="/musicplayer"
                            end
                            className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                        >
                            Player
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink
                            to="/results/chart"
                            className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                        >
                            Top Chart
                        </NavLink>
                    </li>
                    
                    <li className="nav-item">
                        <NavLink
                            to="/results/playlist"
                            className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                        >
                            Playlist
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink
                            to="/results/search"
                            className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                        >
                            Search
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;