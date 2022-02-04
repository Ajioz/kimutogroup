import 'jquery'
import 'materialize-css';
import './contact.css'
import { TextInput, Textarea } from 'react-materialize'
import {   useState  } from 'react';
// import {  useContext, useState, useEffect } from 'react';


const Form = () => {
    const [name, setName] = useState(" ");
    const [desc, setDesc] = useState(" ");
    const [title, setTitle] = useState(" ");

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(name, desc, title)
    } 

  return (
    <>
        <section className='form-section'>
            <div className='contact'><h1>Contact Us</h1></div>
            <div className='container'>
                <form onSubmit={handleSubmit}>         
                    <TextInput 
                        className="validate blue-grey-text input-field col s6"  
                        label="First Name" 
                        type="text" 
                        onChange={(e) => setTitle(e.target.value)} required />
            
                    <TextInput 
                        className="validate blue-grey-text input-field col s6"  
                        label="Last Name" 
                        type="text" 
                        onChange={(e) => setTitle(e.target.value)} required />

                    <TextInput 
                        className="validate blue-grey-text" 
                        id="TextInput-02"  
                        label="e-mail" 
                        type="email" 
                        onChange={(e) => setName(e.target.value)} required />

                    <Textarea  
                        className="validate blue-grey-text" 
                        id="Textarea-01"
                        label="Write something here..." 
                        onChange={(e) => setDesc(e.target.value)}/>
            

                    <button className="btn waves-effect waves-light" type="submit" name="action">Send
                        <i className="material-icons right">send</i>
                    </button>

                </form>
            </div>
         </section>
    </>
    )
};

export default Form;
