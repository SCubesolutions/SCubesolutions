import React,{Component} from "react";
import emailjs from "emailjs-com";
import "./Contact.css"

export default function Contact  ()

{
  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_0gl6we8','template_9bbdpup', 
    e.target, 'user_2XwnnK03d3idAs7xAWR9c').then(res=>{
      console.log(res);
    
  }).catch(err=> console.log(err));


<div className="container border" >
  <h6> <br></br>ENQUIRY FORM </h6>
  <form 
  className="row"  
  onSubmit= {sendEmail}
  >
    <label> Name </label>
    <input type='text' name='name' className="form-control"/>

    <label> Email  </label>
    <input type="email" name="user_email" className="form-control"/>

    <label> Message </label>
    <textarea name="message" rows= "4" className="form-control"/>
    <input type="submit" 
    value="Send" 
    className="form-control btn btn-primary" />
  </form>
</div>

};
