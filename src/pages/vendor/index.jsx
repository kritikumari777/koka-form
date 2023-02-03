import React from 'react';
import { Button, Form, Input } from 'antd';

import './vendor.css';

const Vendor = () => {
	const onFinish = (values) => {
		console.log('Success:', values);
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	return (
		<div className="vendor-wrapper">
			<h1 className="vendor-title">Vendor Prequalification Form</h1>

			<div className="seial-count-one-wrapper">
				<h1 className="serial-no">1.Vendor Category</h1>

				<div className="vendor-category-wrapper">
					<p className="vendor-category-name">1. Contractor</p>
					<p className="vendor-category-name">2. Administative Information</p>
					<p className="vendor-category-name">3. Manufacturer/Fabricator</p>
					<p className="vendor-category-name">4. Supplier</p>
					<p className="vendor-category-name">5. Applicator/Installer</p>
					<p className="vendor-category-name">6. Technical Support Services</p>
					<p className="vendor-category-name">7. General Services</p>
					<p className="vendor-category-name">
						8. Certified Applicator / Installer / Builder
					</p>
					<p className="vendor-category-name">9. Rental Services</p>
				</div>
			</div>

			<div className="seial-count-two-wrapper">
				<h1 className="serial-no">2. Administative Information</h1>

				<Form
					name="login"
					labelCol={{ span: 24 }}
					requiredMark={true}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off"
				>
					<Form.Item
						label="Full Company Name"
						name=""
						rules={[
							{
								required: true,
								message: 'Please input your Full Company Name!',
							},
						]}
					>
						<Input placeholder="Full Company Name" />
					</Form.Item>
					<Form.Item
						label="Main Business Activity"
						name="Main Business Activity"
						rules={[
							{
								required: true,
								message: 'Please input your Main Business Activity!',
							},
						]}
					>
						<Input placeholder="Main Business Activity" />
					</Form.Item>
					<Form.Item
						label="Company Address"
						name="Company Address"
						rules={[
							{
								required: true,
								message: 'Please input your Company Address!',
							},
						]}
					>
						<Input placeholder="Company Address" />
					</Form.Item>
					<Form.Item
						label="Company URL / Company Website"
						name="Company URL / Company Website"
						rules={[
							{
								required: true,
								message: 'Please input your Company URL / Company Website!',
							},
						]}
					>
						<Input placeholder="Company URL / Company Website" />
					</Form.Item>
					<p style={{ textAlign: 'right' }}>
						(Please provide complete details of your activities in item 10 at
						end of the form)
					</p>
					<h1 className="serial-no">Gov. Classification</h1>
					<div className="vendor-category-wrapper">
						<p className="vendor-category-name">Class 1</p>
						<p className="vendor-category-name">Class 2</p>
						<p className="vendor-category-name">Class 3</p>
						<p className="vendor-category-name">Class 4</p>
						<p className="vendor-category-name">None</p>
					</div>
					<h1 className="serial-no">Form of Company</h1>
					<div className="vendor-category-wrapper">
						<p className="vendor-category-name">Establishment</p>
						<p className="vendor-category-name">Enterprise</p>
						<p className="vendor-category-name">Company</p>
						<p className="vendor-category-name">Group</p>
					</div>

					<Form.Item>
						<Button
							type="primary"
							htmlType="submit"
							style={{ width: '100%', margin: '50px 0' }}
						>
							Submit
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
};

export default Vendor;
