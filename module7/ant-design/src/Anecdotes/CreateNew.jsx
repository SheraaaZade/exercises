import { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Select, Button, Input, Checkbox, Form } from "antd";

const { Option } = Select;

// const selectBefore = (
//   <Select defaultValue="http://">
//     <Option value="http://">http://</Option>
//     <Option value="https://">https://</Option>
//   </Select>
// );
// const selectAfter = (
//   <Select defaultValue=".com">
//     <Option value=".com">.com</Option>
//     <Option value=".jp">.jp</Option>
//     <Option value=".cn">.cn</Option>
//     <Option value=".org">.org</Option>
//   </Select>
// );


const CreateNew = ({ addNew }) => {
  const onFinish = (values) => {
    addNew({
      ...values,
      votes: 0,
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  
  return (
    <div>
      <h2>create a new anecdote</h2>
      <Form
        name="newAnecdote"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="content"
          name="content"
          rules={[
            {
              required: true,
              message: "Please input your content!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="author"
          name="author"
          rules={[
            {
              required: true,
              message: "Please input an author!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="url for more info"
          name="info"
          rules={[
            {
              required: true,
              message: "Please input a url!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            create
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

/**
 * 
    <div>
          <Input
                size="large"
            placeholder="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          /> 
    </div>
<div>
          <Input
            value={author}
            placeholder="Author"
            size="large"
            prefix={<UserOutlined />}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
<div>
          <Input
            addonBefore={selectBefore}
            addonAfter={selectAfter}
            value={info}
            placeholder="URL for more info"
            name="info"
            size="large"
            onChange={(e) => setInfo(e.target.value)}
          />
  </div>
        <Button type="primary">create</Button> 
 * 
 * 
 */
export default CreateNew;
