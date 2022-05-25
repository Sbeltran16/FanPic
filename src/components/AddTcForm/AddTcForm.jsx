import React, { useState } from 'react';
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import ".//AddTcForm.css"

export default function AddTcForm(props){
  const [selectedFile, setSelectedFile] = useState('')
  const [state, setState] = useState({
    caption: ''
  })

  function handleFileInput(e){
    setSelectedFile(e.target.files[0])
  }


  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
             
    const formData = new FormData()
    formData.append('photo', selectedFile)
    formData.append('caption', state.caption)
    props.handleAddPost(formData); 
    
    // Have to submit the form now! We need a function!
  }


  return (
    <Grid textAlign='center' style={{ height: '25vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 350}}>
        <Segment>
        
            <Form  autoComplete="off" onSubmit={handleSubmit}>
            
            <Form.Input
                className="form-control"
                type="file"
                name="photo"
                placeholder="Upload Trading-Card/Collectable"
                onChange={handleFileInput}
              /> 
              <Form.Input
                  className="form-control"
                  name="caption"
                  value={state.caption}
                  placeholder="Trading-Card/Collectable Info?"
                  onChange={handleChange}
                  required
              />   
                
              <Button
                type="submit"
                className="btn"
              >
                Add to Collection!
              </Button>
            </Form>
          </Segment>
      </Grid.Column>
    </Grid>
   
  ); 
}