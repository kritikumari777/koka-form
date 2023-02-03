import React from 'react';
import { Button, Form, Input } from 'antd';

import './login.css';

import { Link } from 'react-router-dom';

import Card from '../../components/card';

const Login = () => {
	const onFinish = (values) => {
		console.log('Success:', values);
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<div>
			<Card title="Sign in to start your session">
				<Form
					name="login"
					labelCol={{ span: 24 }}
					requiredMark={false}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off"
				>
					<Form.Item
						name="email"
						rules={[
							{
								type: 'email',
								message: 'The input is not valid E-mail!',
							},
							{
								required: true,
								message: 'Please input your E-mail!',
							},
						]}
					>
						<Input placeholder="Email" />
					</Form.Item>

					<Form.Item
						name="password"
						rules={[
							{
								required: true,
								message: 'Please input your password!',
							},
						]}
					>
						<Input.Password placeholder="Password" />
					</Form.Item>

					<Form.Item>
						<Link to="/vendor">
							<Button
								type="primary"
								htmlType="submit"
								style={{ width: '100%' }}
							>
								Sign In
							</Button>
						</Link>
					</Form.Item>
				</Form>

				<div className="link-wrapper">
					<Link className="links" to="/adminlogin">
						Admin Login
					</Link>
					<Link className="links" to="/forgetpassword">
						I forgot my password
					</Link>
					<Link className="links" to="/changePassword">
						Change password
					</Link>
					<Link className="links" to="/register">
						Register a new membership
					</Link>
				</div>
			</Card>
		</div>
	);
};

export default Login;
