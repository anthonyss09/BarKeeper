import Wrapper from "../assets/wrappers/Register";
import { FormRow, Alert } from "../components/";
import { useState } from "react";
import { useAppContext } from "../context/appContext";

export default function Register() {
  const initialState = {
    name: "",
    email: "",
    password: "",
    isMember: false,
  };
  const [values, setValues] = useState(initialState);

  const {
    isLoading,
    displayAlert,
    showAlert,
    alertType,
    alertText,
    setupUser,
  } = useAppContext();

  const toggleMember = () => {
    console.log(values.isMember);
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password } = values;
    if (!email || !password || (!name && !values.isMember)) {
      displayAlert();
    }
    const currentUser = { name, email, password };

    if (values.isMember) {
      setupUser({
        currentUser,
        endPoint: "login",
        alertText: "Successfully logged in user...",
      });
    } else {
      setupUser({
        currentUser,
        endPoint: "register",
        alertText: "Successfully registered user...",
      });
    }
  };
  return (
    <Wrapper>
      <div className="bar-keeper">BarKeeper</div>
      <form className="form" onSubmit={handleSubmit}>
        <h6>Register</h6>
        {showAlert && <Alert alertType={alertType} text={alertText} />}
        {!values.isMember && (
          <FormRow
            type="text"
            labelText="name"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        )}

        <FormRow
          type="email"
          labelText="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <FormRow
          type="password"
          labelText="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        <div className="footer-div">
          <p>{values.isMember ? "Not a member yet?" : "Already a member?"}</p>
          <span onClick={toggleMember}>
            {values.isMember ? "Register" : "Login"}
          </span>
        </div>
        <button
          className="btn-main btn-register"
          type="submit"
          disabled={isLoading}
        >
          {values.isMember ? "Login" : "Register"}
        </button>
      </form>
    </Wrapper>
  );
}
