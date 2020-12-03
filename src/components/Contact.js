import React from 'react';


function Contact() {
    return (
        <main>
            <div className='container'>
                <div className='form-container'>
                    <h1>Contact Amada</h1>
                    <form>
                        <input type='text' placeholder='First name'/>
                        <input type='text' placeholder='Last name'/>
                        <input type='email' placeholder='Email'/>
                        <input type='tel' placeholder='Telephone'/>

                    </form>
                </div>
            </div>
        </main> 
    )
}

export default Contact;