import React from 'react';
import { Button, Form, Input } from 'antd';
import Card from '../../components/card';
import { Link } from 'react-router-dom';

const Register = () => {
	const onFinish = (values) => {
		console.log('Success:', values);
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<div>
			<Card title="Register a new membership">
				<Form
					name="register"
					labelCol={{ span: 24 }}
					requiredMark={false}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off"
				>
					<Form.Item
						name="company_name"
						rules={[
							{
								required: true,
								message: 'Please input your company name!',
							},
						]}
					>
						<Input placeholder="Company Name" />
					</Form.Item>

					<Form.Item
						name="name"
						rules={[
							{
								required: true,
								message: 'Please input your name!',
							},
						]}
					>
						<Input placeholder="Name" />
					</Form.Item>

					<Form.Item
						name="phone_number"
						rules={[
							{
								required: true,
								message: 'Please input your Phone!',
							},
						]}
					>
						<Input placeholder="Phone" />
					</Form.Item>

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
						name="address"
						rules={[
							{
								required: true,
								message: 'Please input your Address!',
							},
						]}
					>
						<Input placeholder="Address" />
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

					<Form.Item
						name="password"
						rules={[
							{
								required: true,
								message: 'Please input your Retype password!',
							},
						]}
					>
						<Input.Password placeholder="Retype Password" />
					</Form.Item>

					<Form.Item>
						<Button type="primary" htmlType="submit" style={{ width: '100%' }}>
							Register
						</Button>
					</Form.Item>
				</Form>

				<div className="link-wrapper">
					<Link className="links" to="/register">
						I have already membership
					</Link>
				</div>
			</Card>
		</div>
	);
};

export default Register;
