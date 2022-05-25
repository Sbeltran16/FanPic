import React, { useState } from "react";
import "./LoginPage.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";

export default function LoginPage(props) {
  const [error, setError] = useState("");
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await userService.login(state);
      // Route to wherever you want!
      props.handleSignUpOrLogin();
      navigate("/");
    } catch (err) {
      // Invalid user data (probably duplicate email)
      setError(err.message);
    }
  }

  return (
    <>
    <div>
      <h1 class="title">FanPic</h1>
    </div>
      <Grid
        textAlign="center"
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header class="header" as="h2" color="black" textAlign="center">
           Log-in to your Account
          </Header>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Segment stacked>
              <Form.Input
                type="email"
                name="email"
                placeholder="email"
                value={state.email}
                onChange={handleChange}
                required
              />
              <Form.Input
                name="password"
                type="password"
                placeholder="password"
                value={state.password}
                onChange={handleChange}
                required
              />
              <Button
                color="orange"
                fluid
                size="large"
                type="submit"
                className="btn"
              >
                Login
              </Button>
            </Segment>
          </Form>
            New to us? <Link to="/signup">Sign Up</Link>
          {error ? <ErrorMessage error={error} /> : null}
          <Footer />
        </Grid.Column>
      </Grid>
    </>
  );
}