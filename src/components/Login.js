import { useState } from "react";


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setLoggedIn] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();

        setLoggedIn(true);
    };

    function handleLogout(event) {
        setLoggedIn(false);
        setUsername('');
        setPassword('');
    };


    return (
        <>
            {isLoggedIn ? (
                <div className="flex flex-col md:flex-row pl-72">
                    <p className="text-xl pt-2">Welcome, {username}! </p>
                    <div className="logoutbtn pl-4">
                    <button
                        className="bg-red-400 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-full"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                    </div>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row mt-4 lg:mt-0">

                    <div className="mb-2 pl-32 pt-3">
                        <input
                            type="text"
                            id="username"
                            placeholder="Username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            className="rounded-full py-2 px-2 bg-gray-500 text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-2 pl-4 pt-3">

                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="rounded-full py-2 px-2 bg-gray-500 text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="pt-2 pl-2">
                        <button type="submit" className="bg-red-400 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-full">
                            Log in
                        </button>
                    </div>

                </form>
            )}
        </>
    );
}

export default Login;