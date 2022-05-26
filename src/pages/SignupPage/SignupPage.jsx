import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { Button, Form, Grid, Header, Image, Segment, Icon } from 'semantic-ui-react'
import userService from "../../utils/userService";
import { useNavigate, Link } from "react-router-dom";
import "./SignupPage.css"
import Footer from "../../components/Footer/Footer";

export default function SignUpPage(props) {

  const navigate = useNavigate()

  const [error, setError] = useState('')
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    passwordConf: '',
    bio: ''
  })

  const [selectedFile, setSelectedFile] = useState('');

  async function handleSubmit(e){
    e.preventDefault()

    // Create form Data, because we're sending a multipart/formData request, 
    // because we are sending over multiple requests, because we're uploading a photo!
    const formData = new FormData(); // new FormData is from the browser
    formData.append('photo', selectedFile);

    // wrote way of appending each key value pair to form Data
    // formData.append('username', state.username);
    // formData.append('email', state.email);

    for (let fieldName in state){
      formData.append(fieldName, state[fieldName])
    }

    // console.log(formData, " <- formData") // <- this doesn't allow you to look at the formdData object
    // console.log(formData.forEach((item) => console.log(item))); // <- to look at the keys, you must forEach over it

    try {

      await userService.signup(formData) // <- we must pass the argument as formData when we have a
      // photo
      props.handleSignUpOrLogin(); // <- this will decode the token from local storage
      // that we just recieved as a respone to our userService.signup fetch call,
      // and decode and update the state in our App component
      navigate('/')

    } catch(err){
      console.log(err.message);
      setError(err.message)
    }

  }

  function handleChange(e){
    setState({
      ...state, 
      [e.target.name]: e.target.value
    })
  }

  function handleFileInput(e){
    console.log(e.target.files);
    setSelectedFile(e.target.files[0]);
  }

  return (
    <>
     <div>
      <h1 class="title">FanPic</h1>
    </div>
    <Grid textAlign="center"  verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="grey" textAlign="center">
        Sign Up
        </Header>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              name="username"
              placeholder="Username"
              value={state.username}
              onChange={handleChange}
              required
            />
            <Form.Input
              type="email"
              name="email"
              placeholder="E-mail"
              value={state.email}
              onChange={handleChange}
              required
            />
            <Form.Input
              name="password"
              type="password"
              placeholder="Password"
              value={state.password}
              onChange={handleChange}
              required
            />
            <Form.Input
              name="passwordConf"
              type="password"
              placeholder="Confirm Password"
              value={state.passwordConf}
              onChange={handleChange}
              required
            />
            <Form.TextArea
              label="Bio"
              name="bio"
              placeholder="Tell us about yourself"
              onChange={handleChange}
            />
            <Form.Field>
              <Form.Input
                type="file"
                name="photo"
                placeholder="Upload Your Profile Picture"
                onChange={handleFileInput}
              />
            </Form.Field>
            <Button type="submit" className="btn" color="blue">
              Signup
            </Button>
          </Segment>
          Already Have an Account? <Link to="/login">Log In</Link>
          {error ? <ErrorMessage error={error} /> : null}
          <Footer />
        </Form>
      </Grid.Column>
    </Grid>
    </>
  );
}
