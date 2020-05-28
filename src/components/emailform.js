import React, {Component} from 'react';
import axios from 'axios';

import firebase from '../firebase.js';

import PropTypes from "prop-types";
import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

const API_PATH = 'http://localhost:3002/src/components/emailbackend/index.php';

class Emailform extends Component {
    
    
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          message: '',
          fields: {},
          errors: {}
        }

        this.handleChange=this.handleChange.bind(this)
        this.handleFormSubmit=this.handleFormSubmit.bind(this)
      } 
    
    //Reference messages collection
    messageRef=firebase.database().ref('messages');


    //Handle Validation
    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name must only contain letters
        if(!fields["name"]){
           formIsValid = false;
           errors["name"] = "Cannot be empty";
        }

        if(typeof fields["name"] !== "undefined"){
           if(!fields["name"].match(/^[a-zA-Z\s]+$/)){
              formIsValid = false;
              errors["name"] = "Only letters";
           }        
        }

        //Email must be a valid email address
        if(!fields["email"]){
           formIsValid = false;
           errors["email"] = "Cannot be empty";
        }

        if(typeof fields["email"] !== "undefined"){
           let lastAtPos = fields["email"].lastIndexOf('@');
           let lastDotPos = fields["email"].lastIndexOf('.');

           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = "Email is not valid";
            }
       }  

        //Message must not be empty
        if(!fields["message"]){
        formIsValid = false;
        errors["message"] = "Cannot be empty";
        }

       this.setState({errors: errors});
       return formIsValid;
   }

    //Save message to firebase
    saveMessage(name, email, message) {
        var newMessageRef = this.messageRef.push();
        newMessageRef.set({
            name: name,
            email: email,
            message: message
        })
    }
    
    //Submit Form
    async handleFormSubmit(e) {
        e.preventDefault()
        
        //Save message
        if(this.handleValidation()){
            alert("Form successfully submitted!");
            this.saveMessage(this.state.name, this.state.email, this.state.message);
            e.target.reset()
         }else{
            alert("Form has errors.")
         }


        
    }; 

    handleChange(field, e){       
        
        this.setState({[e.target.name]: e.target.value})

        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
    }

    // async handleFormSubmit(e) {
    //     e.preventDefault()

    //     const {name, email, message} = this.state

    //     const form = await axios.post('/api/form',{
    //         name,
    //         email,
    //         message
    //     })
    // }; 

    
    
    render(){
        return(
            <div >
                <div className="email-body">
                    <form onSubmit={this.handleFormSubmit.bind(this)} id='contactForm' style={{textAlign: 'left'}}>
                        
                        <label>Name</label>
                            <input ref="name" name="name" type="text" size="30" placeholder="Your name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}/>
                            <span style={{color: "red"}}>{this.state.errors["name"]}</span>
                            <br/>  
                    

                        <label>Email</label>
                            <input refs="email" name="email" type="text" size="30" placeholder="Email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
                            <span style={{color: "red"}}>{this.state.errors["message"]}</span>
                            <br/> 
                            


                        <label>Message</label>
                        <textarea  refs="message" name="message" type="text" rows="10" placeholder="Your message" onChange={this.handleChange.bind(this, "message")} value={this.state.fields["message"]} ></textarea>
                        <input  type="submit" value="Send" />

                        
                    </form>
                    
                    
                </div>
            </div>
        ) 
    }
}

export default Emailform; 