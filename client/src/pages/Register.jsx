import { Form, redirect, useNavigation, Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage.js";
import { FormRow, Logo } from "../components";
export const action = async (data) => {
  console.log(data);
  return null;
};
const Register = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="firstName" defaultValue="John" />
        <FormRow type="text" name="lastName" defaultValue="Doe" />
        <FormRow type="text" name="location" defaultValue="Earth" />
        <FormRow type="email" name="Email" defaultValue="john@gmail.com" />
        <FormRow type="password" name="password" defaultValue="secret123" />

        <button type="submit" className="btn1 btn1-block">
          submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Register;
