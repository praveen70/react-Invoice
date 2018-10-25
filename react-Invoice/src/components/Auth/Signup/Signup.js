import { Form, Icon, Input, Button } from 'antd';
import './Signup.css'
import React from 'react';
import { Row, Col } from 'antd';
import {Animated} from "react-animated-css";


const FormItem = Form.Item;

class Signup extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {

    return (
        <Row>
        <Col span={12} offset={8}>
    
        <div className="signup-top" style={{display:"flex"}}>
        <div style={{margin:80}} >
      <Form className="signup-form" style={{ width:400}}> 
      <Animated animationIn="swing" animationOut="fadeOut" isVisible={true}>
      <span className="login100-form-title p-b-51">
              Signup
            </span>
          </Animated>
        <FormItem>
          
            <Input className='signup-input' prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
        </FormItem>
       
        <FormItem>
         
         <Input className='signup-input'  prefix={<Icon type="loading" style={{ color: 'rgba(0,0,0,.25)' }} />} type="email" placeholder="Email" />
     
     </FormItem>
     <FormItem>
         
         <Input className='signup-input' prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
     
     </FormItem>
     <FormItem>
         
         <Input className='signup-input' prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Confirm Password" />
     
     </FormItem>
        <FormItem>
        
            {/* <Checkbox style={{float:"left"}}>Remember me</Checkbox>
       
          <a className="login-form-forgot" href="" style={{float:"right"}}>Forgot password</a> */}
          
          <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button" style={{ width:220}}>
            Sign Up
          </Button>
          </FormItem>
          {/* <FormItem>
          <a href="" style={{float:"left"}}>register now!</a>
          </FormItem> */}
        </FormItem>
      </Form>
      </div>
      </div>
      </Col>
      </Row>
    );
  }
}

export default Signup;