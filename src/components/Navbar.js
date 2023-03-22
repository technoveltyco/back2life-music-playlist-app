import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sm:ml-6 sm:block">
            <Link className="navbar-brand text-lg hover:bg-red-300 rounded-md px-3 py-2" to="/">
                Home
            </Link>
            <div>
                <ul className="nav-list navbar-nav flex flex-row space-x-8 pl-10">
                    <li className="nav-item text-lg hover:bg-red-300 rounded-md px-3 py-2">
                        <NavLink
                            to="/results"
                            className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                        >
                            Explore
                        </NavLink>
                    </li>

                    <li className="nav-item text-lg hover:bg-red-300 rounded-md px-3 py-2">
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

                    <li className="nav-item text-lg hover:bg-red-300 rounded-md px-3 py-2">
                        <NavLink
                            to="/results/chart"
                            className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                        >
                            Top Chart
                        </NavLink>
                    </li>
                    
                    <li className="nav-item text-lg hover:bg-red-300 rounded-md px-3 py-2">
                        <NavLink
                            to="/results/playlist"
                            className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                        >
                            Playlist
                        </NavLink>
                    </li>

                    <li className="nav-item text-lg hover:bg-red-300 rounded-md px-3 py-2">
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