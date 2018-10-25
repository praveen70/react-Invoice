import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './Sign.css'
import React from 'react';
import { Row, Col } from 'antd';
import {Animated} from "react-animated-css";
import logo from '../../image/logo.jpg'
import { withRouter } from 'react-router'
import { Alert } from 'antd';


const FormItem = Form.Item;

const inintialState = {
  username:'',
  password:'',
}


class Signin extends React.Component {
 state = {...inintialState}

  handleChange = (event) =>{
    const { name, value } = event.target;
    this.setState({[name]: value})
  };
  
  handleSubmit = () => {
    console.log('Data:::')
    const { username, password} = this.state;
    if(username === 'admin' && password ==='admin'){ 
      this.props.history.push('/Invoice')
    
   }
       return false;
   
  
  }

  render() {
    const { username, password } = this.state;
  
    return (
      <div style={{backgroundImage:'../../image/logo.jpg'}}>
     
        <Row>
        <Col span={12} offset={6}>
    
        <div className="login-form{" style={{display:"flex"}}>
        <div style={{margin:120}}>
      <Form className="login-form" style={{ width:400}}> 
      <Animated animationIn="swing" animationOut="fadeOut" isVisible={true}>
      <span className="login100-form-title p-b-51">
      <img style={{width:80}} src={require('../../image/logo.jpg')} />
              Signin
            </span>
          </Animated>
        <FormItem>
          
            <Input className='input-sigin' name='username'
            value={username}
            onChange={event => this.handleChange(event)}
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
            placeholder="Username" />
        </FormItem>
        <FormItem>
         
            <Input className='input-sigin' 
            name='password'
            value={password}
            onChange={event => this.handleChange(event)}
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
            type="password" placeholder="Password" />
        
        </FormItem>
        <FormItem>
        
            <Checkbox className='checkBox' style={{float:"left"}}>Remember me</Checkbox>
            <FormItem className='forget-password'>
         <a   href="/ForgotPassword" className="login-form-forgot"  style={{float:"right"}} onClick={(event)=>this.forgetPassword('ForgotPassword', event)}>Forgot password</a>
         </FormItem>
          <FormItem>
          <Button type="primary" htmlType="submit" 
          className="login-form-button" style={{ width:210}} 
          onClick={this.handleSubmit}
          >
          <Icon type="login"/>
            Sign in
          </Button>
          </FormItem>
          <FormItem className='register'>
          <a href="/Signup" style={{float:"left"}}>register now!</a>
          </FormItem>
        </FormItem>
   
      </Form>
      </div>
      </div>
      </Col>
      </Row>
     
      </div>
    );
  }
}

export default withRouter(Signin);