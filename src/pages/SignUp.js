import React from 'react';
import adapter from '../adapter';
import { Link } from 'react-router-dom';
import PageHeader from './PageHeader'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'

class SignUp extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  }

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSignup = (e) => {
      e.preventDefault()
      adapter.auth.signup(this.state).then(resp => {
      if (resp.error) {
        alert(resp.error)
      } else {
        this.props.history.push('/profile')
        this.props.setUser(resp)
      }
    })
  }

  render(){
    return (
      <div className="outer-page">
      <PageHeader/>
      <div className="form-holder">
      <style>{`
        body > div,
        body > div > div,
        body > div > div > div.form-holder {
          height: 100%;
        }
      `}</style>  <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='top'
        >
        <Grid.Column style={{ maxWidth: 450 }}>

      <div className="outer-form">

      <Form size="large" onSubmit={this.handleSignup}>
        <Segment>
        <Header as='h2' className='navy-text' textAlign='center'>
          Hello There
        </Header>
        <Form.Input
          fluid
          icon='envelope'
          iconPosition='left'
          value={this.state.email}
          name="email"
          type="email"
          onChange={this.onInputChange}
          placeholder='E-mail address'
           />

           <Form.Input
             fluid
             icon='user'
             iconPosition='left'
             value={this.state.name}
             name="name"
             type="text"
             onChange={this.onInputChange}
             placeholder='User Name'
              />

              <Form.Input
               fluid
               icon='lock'
               iconPosition='left'
               placeholder='Password'
               type='password'
               value={this.state.password}
               name="password"
               onChange={this.onInputChange}
             />


              <Form.Input
               fluid
               icon='lock'
               iconPosition='left'
               placeholder='Password confirmation'
               type='password'
               value={this.state.password_confirmation}
               name="password_confirmation"
               onChange={this.onInputChange}
             />

          <Button color='olive' fluid size='large'>Log in</Button>
        </Segment>
        </Form>
        <Message>  Been Around the Block? <Link to='/login'>Log In</Link>
        </Message>
        </div>
    </Grid.Column>
    </Grid>
      </div>
      </div>
    )
  }

}

  export default SignUp;
