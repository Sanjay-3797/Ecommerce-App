import React, { useContext, useRef, useState } from "react";
import Card from "./UI/Card";
import { Button, Form, NavLink } from "react-bootstrap";
import AuthContext from "./store/auth-context";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "./store/index";

const Login = (props) => {
  const [isLogin, setLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const enteredEmailRef = useRef();
  const enteredPasswordRef = useRef();

  const dispatch = useDispatch();

  const authCtx = useContext(AuthContext);

  const history = useHistory();

  const toggleHandler = () => {
    setLogin((prevState) => !prevState);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredEmail = enteredEmailRef.current.value;
    const enteredPassword = enteredPasswordRef.current.value;

    props.email(enteredEmail);
    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBvar-s74g5hqBR2193rvUrs76CPBPnbDc";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBvar-s74g5hqBR2193rvUrs76CPBPnbDc";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        dispatch(authActions.login(data.idToken));
        history.replace("/store");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <React.Fragment>
      <Card>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              ref={enteredEmailRef}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter password"
              ref={enteredPasswordRef}
            />
          </Form.Group>
          {!isLoading && (
            <Button className="mb-3" variant="secondary" type="submit">
              {isLogin ? "Login" : "Sign Up"}
            </Button>
          )}
          {isLoading && <p>Sending request...</p>}
          <NavLink onClick={toggleHandler}>
            {isLogin ? "Create an account" : "Login with existing account"}
          </NavLink>
        </Form>
      </Card>
    </React.Fragment>
  );
};

export default Login;
