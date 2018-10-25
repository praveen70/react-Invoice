import { Form, Icon, Input, Button, Dropdown,Menu, message  } from 'antd';
//import './Sign.css'
import React from 'react';
import { Row, Col } from 'antd';
import {Animated} from "react-animated-css";
import Header from '../Header/Header';
import Additem from '../Additem/Additem';
import "./Invoice.css";
import ReactToPrint from "react-to-print";
import PropTypes from "prop-types";



const FormItem = Form.Item;



class Invoice extends React.Component {
    state={
        localData:'',
      
      
    }
   

 handleButtonClick(e) {
    message.info('Click on left button.');
    console.log('click left button', e);
  }
  
  handleMenuClick(e) {
    message.info('Click on menu item.');
    
  }
  
  componentDidMount(){
      let getLocalData = localStorage.getItem("Data");
      let parseData = JSON.parse(getLocalData)
      this.setState({ localData: parseData});
    
    }



  
  render() {
   
    console.log(":::",+this.state.localData.domainName + +this.state.localData.hosting + +this.state.localData.website)
 
    
    return (
      
      <Form className='formData'>
      <div className="invoice-box">
        <table cellpadding="0" cellspacing="0">
        <Header />
        {/* <h2><strong>INVOICE</strong></h2> */}
            <tr className="top">
                <td colspan="2">
                    <table>
                        <tr>
                            <td className="title">
                            <Animated animationIn="swing" animationOut="fadeOut" isVisible={true}>
                                <img src={require('../image/logo.jpg')} />
                          </Animated>

                            </td>
                            
                            <td>
                                Invoice #: 123
                                Created: January 1, 2018
                                Due: February 1, 2018
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            
            <tr className="information">
                <td colspan="2">
                    <table>
                        <tr>
                            <td>
                                <strong>Address:{this.state.localData.address}</strong>
                            </td>
                            
                            <td>
                                {this.state.localData.name} Corp.
                               <br />
                               {this.state.localData.email}
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            
            <tr className="heading">
                <td>
                    Payment Method
                </td>
                
                <td>
                    Check #
                </td>
            </tr>
            
            <tr className="details">
                <td>
                    Check
                </td>
                
                <td>
                    {this.state.localData.email}
                </td>
            </tr>
            
            <tr className="heading">
                <td>
                    Item
                </td>
                
                <td>
                    Price
                </td>
            </tr>
            
            <tr className="item">
                <td>
                    Website design
                </td>
                
                <td>
                ${this.state.localData.website}
                </td>
            </tr>
            
            <tr className="item">
                <td>
                    Hosting (3 months)
                </td>
                
                <td>
                ${this.state.localData.hosting}
                </td>
            </tr>
            
            <tr className="item last">
                <td>
                    Domain name (1 year)
                </td>
                
                <td>
                ${this.state.localData.domainName}
                </td>
            </tr>
            
            <tr className="total">
                <td></td>
                
                <td>
                   Total: ${ +this.state.localData.domainName + +this.state.localData.hosting + +this.state.localData.website}
                   
                  
                </td>
            </tr>
        </table>
        
            
        
</div>
<div>
    <Additem  />
   
</div>

</Form>
    );
  }
}

class PrintData extends React.Component {
    render() {
      return (
        <div>
          <ReactToPrint
            trigger={() => <Button>Print</Button>}
            content={() => this.componentRef}
          />
          <Invoice ref={el => (this.componentRef = el)} />
        </div>
      );
    }
  }
  
  //export default Example;


export default PrintData;

