import { useState } from "react";
import { useHistory } from "react-router-dom";
import { validateEmail } from "../../Console/helper";
import "./styles.css";
const SignIn = () => {
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("12345678");

  const history = useHistory();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitClick = () => {
    if (!validateEmail(email)) {
      alert("Please enter a valid email");
      return;
    }
    if (password.length < 8) {
      alert("Password length should be alteast 8 char");
      return;
    }
    history.push("/console");
  };

  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={handleEmailChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={onSubmitClick}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default SignIn;
