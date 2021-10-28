import React from "react";
import "antd/dist/antd.css";
import { Form, Button, Input, DatePicker, Divider, Radio } from "antd";

export default function Employeeform() {
  return (
    <div style={{border:"1px solid",width:"800px",borderRadius:"10px 10px 10px 10px",marginTop:"20px",marginLeft:"23%"}}>
      <div class="mt-3">
        <h4 style={{ color: "#1890ff", textAlign: "center" }}>Employee Form</h4>
      </div>
      <Divider />
      <div class="container py-3">
        <Form
          name="employeeform"
          //   onFinishFailed={() => alert("Failed to submit")}
          onFinish={() => alert("Form Submitted Successfully")}
          initialValues={{ remember: true }}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 18 }}
          labelAlign="left"
          style={{marginLeft:"30px"}}
        >
          <Form.Item
            label="First Name"
            name="First Name"
            rules={[{ required: true, message: "Please enter first name" }]}
          >
            <Input placeholder="Bikash" />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name="Last Name"
            rules={[{ required: true, message: "Please enter last name" }]}
            >
              <Input placeholder="Karki" />
            </Form.Item>
  
            <Form.Item
              label="Email Address"
              name="Email"
              rules={[{ required: true, message: "Please enter valid email " }]}
            >
              <Input placeholder="beekashkarki@gmail.com" />
            </Form.Item>
  
            <Form.Item
              label="Gender"
              name="Gender"
              rules={[{ required: true, message: "Please select gender" }]}
            >
              <Radio.Group>
                <Radio value={1}>Male</Radio>
                <Radio value={2}>Female</Radio>
                <Radio value={3}>Others</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              label="Date of Birth"
              name="Date of Birth"
              rules={[{ required: true, message: "2055-04-17" }]}
            >
                <DatePicker />
          </Form.Item>

          <Form.Item
            label="Number"
            name="Contact Number"
            rules={[{ required: true, message: "Please enter contact number" }]}
          >
            <Input placeholder="9813525031" />
          </Form.Item>
          <Form.Item
            label="Address"
            name="Address"
            rules={[{ required: true, message: "Please enter an address" }]}
          >
            <Input placeholder="Kathmandu, Nepal" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
          </Form>
      </div>
    </div>
  );
}