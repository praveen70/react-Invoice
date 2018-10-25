import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './ForgotPassword.css'
import React from 'react';
import { Row, Col } from 'antd';
import {Animated} from "react-animated-css";
import { Popover } from 'antd';


const FormItem = Form.Item;



class ForgotPassword extends React.Component {
  constructor(props){
    super()
    
  }

 

  render() {

    return (
        <Row>
        <Col span={12} offset={6} >
    
        <div className="forgot-top" style={{position:"absolute"}}>
        <div style={{margin:220}}>
      <Form className="forgot-form" style={{ width:500}}> 
      <Animated animationIn="swing" animationOut="fadeOut" isVisible={true}>
      <span className="login100-form-title p-b-51"><Icon type="lock" style={{ fontSize: 80, color: 'black' }} />
        Forgot Password
            </span>
          
          </Animated>
          
        <FormItem>
          
            <Input className="input"prefix={<Icon  style={{ color: 'rgba(0,0,0,.25)'  }} />} placeholder="email address" />
        </FormItem>
        {/* <FormItem>
         
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
        
        </FormItem> */}
        <FormItem>
        
            {/* <Checkbox style={{float:"left"}}>Remember me</Checkbox>
            <FormItem>
         <a  href="/ForgotPassword/ForgotPassword"className="login-form-forgot"  style={{float:"right"}} >Forgot password</a>
         </FormItem> */}
          <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button" style={{ width:300}}>
            Send My Password
          </Button>
          </FormItem>
          {/* <FormItem>
          <a href="/Signup/Signup" style={{float:"left"}}>register now!</a>
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

export default ForgotPassword;