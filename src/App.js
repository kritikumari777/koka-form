import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/login';
import AdminLogin from './pages/adminLogin';
import ForgorPassword from './pages/forgotPassword';
import Register from './pages/register';
import ChangePassword from './pages/changePassword';
import Vendor from './pages/vendor';

import './App.css';

function App() {
	return (
		<div className="container">
			<Router>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/adminlogin" element={<AdminLogin />} />
					<Route path="/forgetpassword" element={<ForgorPassword />} />
					<Route path="/register" element={<Register />} />
					<Route path="/changePassword" element={<ChangePassword />} />
					<Route path="/vendor" element={<Vendor />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
