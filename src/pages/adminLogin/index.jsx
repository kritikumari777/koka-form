import React from 'react';
import { Button, Form, Input } from 'antd';

import Card from '../../components/card';

import './admin.css';

const AdminLogin = () => {
	const onFinish = (values) => {
		console.log('Success:', values);
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<div>
			<h1 className="admin-title">ADMIN PORTAL</h1>
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
						<Button type="primary" htmlType="submit" style={{ width: '100%' }}>
							Sign In
						</Button>
					</Form.Item>
				</Form>
			</Card>
		</div>
	);
};

export default AdminLogin;
