import React from 'react';
import { Button, Form, Input } from 'antd';
import Card from '../../components/card';
import { Link } from 'react-router-dom';

const ForgorPassword = () => {
	const onFinish = (values) => {
		console.log('Success:', values);
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<div>
			<Card title="You forgot your password? Here you can easily retrieve a new password">
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

					<Form.Item>
						<Button type="primary" htmlType="submit" style={{ width: '100%' }}>
							Request new Password
						</Button>
					</Form.Item>
				</Form>

				<div className="link-wrapper">
					<Link className="links" to="/">
						Login
					</Link>
					<Link className="links" to="/register">
						Register a new membership
					</Link>
				</div>
			</Card>
		</div>
	);
};

export default ForgorPassword;
