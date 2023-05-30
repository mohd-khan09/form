import "./App.css";

import { Steps, Form, Input, Button } from "antd";
import {
  LoginOutlined,
  ProfileOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { useState } from "react";

function App() {
  const [current, setCurrent] = useState(0);
  const [loginDetails, setloginDetails] = useState(null);
  const [profileDetails, setprofileDetails] = useState(null);
  const onFinishLoginForm = (values) => {
    setloginDetails(values);
    setCurrent(1);
  };
  const onFinishProfileForm = (values) => {
    setprofileDetails(values);
    setCurrent(2);
  };
  const forms = [
    <LoginForm onFinish={onFinishLoginForm} initalvalues={loginDetails} />,
    <ProfileForm
      onFinish={onFinishProfileForm}
      initalvalues={profileDetails}
    />,
    <Finish />,
  ];

  const isStepDisabled = (stepNumber) => {
    if (stepNumber === 0) {
      return false;
    }
    if (stepNumber === 1) {
      return loginDetails == null;
    }
    if (stepNumber === 2) {
      return loginDetails == null || profileDetails == null;
    }
  };

  return (
    <div className="App">
      <Steps className="steps" onChange={setCurrent} current={current}>
        <Steps.Step
          disabled={isStepDisabled(0)}
          title="login"
          icon={<LoginOutlined />}
        />
        <Steps.Step
          disabled={isStepDisabled(1)}
          title="Profile"
          icon={<ProfileOutlined />}
        />
        <Steps.Step
          disabled={isStepDisabled(2)}
          title="Finish"
          icon={<CheckCircleOutlined />}
        />
      </Steps>
      {forms[current]}
    </div>
  );
}

function LoginForm({ onFinish, initalvalues }) {
  return (
    <Form
      className="logInDetails"
      onFinish={onFinish}
      initalvalues={initalvalues}
    >
      <Form.Item
        label="  Email"
        name={"Email Adress"}
        rules={[
          {
            required: true,
            type: "email",
            message: "Enter Valid Email Adress",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name={"Password"}
        rules={[
          {
            required: true,
            message: "Enter Valid Password",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Continue
      </Button>
    </Form>
  );
}

function ProfileForm({ onFinish, initalvalues }) {
  return (
    <Form
      className="profileDetails"
      onFinish={onFinish}
      initalvalues={initalvalues}
    >
      <Form.Item
        label="First Name"
        name={"firstname"}
        rules={[
          {
            required: true,

            message: "Enter Your First Name",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Last Name"
        name={"lastname"}
        rules={[
          {
            required: true,
            message: "Enter Valid Password",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Continue
      </Button>
    </Form>
  );
}

function Finish() {
  return (
    <>
      <h1>you are all set !!! </h1>
      <Button htmlType="submit" type="primary">
        Finish
      </Button>
    </>
  );
}

export default App;
