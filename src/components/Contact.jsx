import React, {useState} from 'react'
import emailjs from 'emailjs-com'
import ContactModal1 from './ContactModal1'
import ContactModal2 from './ContactModal2'

const Contact = (props) => {
    const [isLoading, setIsLoading] = useState(false)
    const [isModal, setIsModal] = useState(false)
    const [contact, setContact] = useState({
        name:'',
        email:'',
        description: ''
    })

    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
    
    const onChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)
        let template_params = {
            "from_name": contact.name,
            "to_name": "my beautiful self",
            "message_html": contact.description,
            "from_email": contact.email || "None"
         }
         
        let service_id = "default_service";
        let template_id = "contact";
        emailjs.send(service_id, template_id, template_params, 'user_ODTJPw3P4BqTgPwrOMWZj')
            .then((res) => {
                console.log('re',res)
                sleep(1000).then(() => {
                    setIsLoading(false)
                    window.location.reload(true);
                })
            }, (error) => {
                console.log(error)
            });
    }
    return (
        <>
            {isModal === true ? <ContactModal1 />: null}
            {isLoading === true ? <ContactModal2 /> : 
            <div className='contact'>
                <form onSubmit={onSubmit}>
                <span id='contact' name='contact'> &nbsp; </span>
                    <legend>Ask me anything!</legend>
                    <input
                        type='email'
                        name='email'
                        placeholder='Your email here'
                        value={contact.email}
                        onChange={onChange}
                        />
                    <input
                        type='text'
                        name='name'
                        placeholder='Your name here'
                        value={contact.name}
                        onChange={onChange}
                        required
                        />
                    <textarea
                        className='description'
                        type='text'
                        name='description'
                        placeholder='Your question or suggestion here'
                        value={contact.description}
                        onChange={onChange}
                        required
                        />
                    <button type='submit' value="Send">Submit</button>
                </form>
                <footer className='footer'>

                    <div>
                        <span id='footer' name='footer'> &nbsp; </span>
                        <h2>Or Contact Directly:</h2>
                        <ul>
                            <li>RyanWisniewski39@gmail.com</li>
                            <li>Woodstock, GA</li>
                        </ul>
                    </div>           
                </footer>
            </div>
            }
        </>
    )
}

export default Contact