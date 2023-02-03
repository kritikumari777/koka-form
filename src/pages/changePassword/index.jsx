import React from 'react';
import { Button, Form, Input } from 'antd';
import Card from '../../components/card';
import { Link } from 'react-router-dom';

const ChangePassword = () => {
	const onFinish = (values) => {
		console.log('Success:', values);
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	return (
		<div>
			<Card title="Change your password session">
				<Form
					name="login"
					labelCol={{ span: 24 }}
					requiredMark={false}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off"
				>
					<Form.Item
						name="password"
						rules={[
							{
								required: true,
								message: 'Please input your password!',
							},
						]}
					>
						<Input.Password placeholder="Change Password" />
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
						<Input.Password placeholder="Confirm Password" />
					</Form.Item>

					<Form.Item>
						<Button type="primary" htmlType="submit" style={{ width: '100%' }}>
							Sign In
						</Button>
					</Form.Item>
				</Form>

				<div className="link-wrapper">
					<Link className="links" to="/forgetpassword">
						I forgot my password
					</Link>

					<Link className="links" to="/register">
						Register a new membership
					</Link>
				</div>
			</Card>
		</div>
	);
};

export default ChangePassword;
