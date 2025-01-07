import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-r from-black/50 via-black/30 to-black/50">
			<div className="w-full max-w-md p-6 rounded-2xl shadow-2xl backdrop-blur-xl bg-white/10 border border-white/20">
				<h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
					Login <span className="text-blue-300">ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit} className="mt-6 space-y-6">
					<div>
						<label className="block text-sm font-medium text-gray-200">Username</label>
						<input
							type="text"
							placeholder="Enter username"
							className="w-full mt-1 px-4 py-2 text-gray-300 bg-black/40 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>

					<div>
						<label className="block text-sm font-medium text-gray-200">Password</label>
						<input
							type="password"
							placeholder="Enter Password"
							className="w-full mt-1 px-4 py-2 text-gray-300 bg-black/40 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<Link
						to="/signup"
						className="block text-sm text-blue-400 hover:text-blue-500 hover:underline text-center"
					>
						Don't have an account?
					</Link>

					<div>
						<button
							type="submit"
							disabled={loading}
							className="w-full py-2 font-semibold text-white bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg shadow-lg hover:from-blue-600 hover:to-cyan-600 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-50"
						>
							{loading ? (
								<span className="loading loading-spinner"></span>
							) : (
								"Login"
							)}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
