import React from 'react';
import { Modal, Button , Form, Input } from 'antd';

const FormItem = Form.Item;


class Additem extends React.Component {
    state = { 
        visible: false,
        name:'',
        price:'',
        email:'',
        address:'',
        status:'',
        website:'',
        hosting:'',
        domainName:'',
        desc:'' 
    }

    showModal = () => {
        this.setState({
          visible: true,
        });
      }
    
      handleOk = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
      }
    
      handleCancel = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
      }
    
      onChange =(event)=>{
          const { name, value } = event.target;
          this.setState({[name]: value})
         // console.log(name,"::", value);
          //console.log("this.state", this.state)
      }

      handleSubmit = (event)=>{
        event.preventDefault();
        let localData = localStorage.setItem("Data",JSON.stringify(this.state));
        console.log(this.state);
        

    }
    validateForm =()=>{
        const  { name, price,email, address, status,website,hosting,domainName, desc } = this.state;
        const isInvalid = !name || !price || !email|| !address||  !status || !website|| !hosting || !domainName || !desc 
        return isInvalid;
}

    render(){
        const { name, price,email, address, status,website,hosting,domainName, desc } = this.state;
        return(
            <div >
            <Button type="primary" onClick={this.showModal}>
              Add New Invoice
            </Button>
            <Modal
              title="Invoice"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
             <Form className='addInvoice' onSubmit={event=>this.handleSubmit(event)}>
             <FormItem>
                 <Input name='name' value={name} type='text' placeholder='name' onChange={event => this.onChange(event)}/>

             </FormItem>
             <FormItem>
                 <Input name='price' type='text' value={price} placeholder='price' onChange={event => this.onChange(event)} /> 
             </FormItem>
             <FormItem>
                 <Input name='email' type='email' value={email} placeholder='email' onChange={event => this.onChange(event)} /> 
             </FormItem>
             <FormItem>
                 <Input name='address' type='text' value={address} placeholder='address' onChange={event => this.onChange(event)} /> 
             </FormItem>
             <FormItem>
                 <Input name='status' type='text' value={status} placeholder='status' onChange={event => this.onChange(event)} /> 
             </FormItem>
             <FormItem>
                 <Input name='website' type='text' value={website} placeholder='website' onChange={event => this.onChange(event)} /> 
             </FormItem>
             <FormItem>
                 <Input name='hosting' type='text' value={hosting} placeholder='hosting' onChange={event => this.onChange(event)} /> 
             </FormItem>
             <FormItem>
                 <Input name='domainName' type='text' value={domainName} placeholder='Domain Name' onChange={event => this.onChange(event)} /> 
             </FormItem>
             <FormItem>
                 <textarea name='desc' type='text'  value={desc} placeholder='Description' onChange={event => this.onChange(event)} >

                 </textarea>
             </FormItem>
             <FormItem>
                 <Button  type='primary' disabled={this.validateForm()} onClick={event=>this.handleSubmit(event)}>Submit</Button>
                
             </FormItem>
             </Form>
            </Modal>
          </div>
        )
    }
}

export default Additem;