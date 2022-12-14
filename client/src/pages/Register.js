import Wrapper from "../assets/wrappers/Register";
import { FormRow, Alert } from "../components/";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
    user,
  } = useAppContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
    // eslint-disable-next-line
  }, [user]);
  const toggleMember = () => {
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
      return;
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
      <div className="container-main">
        <div className="container-center">
          <div className="section-about">
            <div className="about-info">
              <div className="bar-keeper">BarKeeper</div>
              <span className="text-about">
                Keep all your cocktail recipes!
                <br />
                <br /> Easy access to wine & spirit notes! <br />
                <br />
                Track and manage inventory! <br />
                <br />
                <span className="text-enjoy">Enjoy!</span>
              </span>
            </div>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <div className="bar-keeper bar-keeper-inner">BarKeeper</div>
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
              <p>
                {values.isMember ? "Not a member yet?" : "Already a member?"}
              </p>
              <span className="text-footer" onClick={toggleMember}>
                {values.isMember ? "Register" : "Login"}
              </span>
            </div>
            <button
              className="btn btn-main btn-register"
              type="submit"
              disabled={isLoading}
            >
              {values.isMember ? "Login" : "Register"}
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
}
