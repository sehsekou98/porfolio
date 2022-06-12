import  { useState } from 'react';
import  { send } from 'emailjs-com';

const Contact = () => {

  const [sender_name, set_sender_name] = useState('');
  const [sender_email, set_sender_email] = useState('');
  const [ message, set_message] = useState('');
  const handleName = (e) => {
    set_sender_name(e.target.value)
  }

  const handleEmail = (e) => {
    set_sender_email(e.target.value)

  }
  const sendMail =(e) => {
    e.preventDefault();
    send(
        'service_hghjgbf',
        'template_81njz6n',
        {sender_name, sender_email, message},
        'iJK1b3jsZ5uGKRY1d'
    )
    .then((response) => {
        console.log('Message sent successfully.', response.status, response.text)
    }) 
    .catch((err) => {
        console.log('Failed to send message, place try again.', err)
    })

    set_sender_name('');
    set_sender_email('');
    set_message('');
    
  }

  const handelMessage = (e) => { 
    set_message(e.target.value)

  }
  
  
  return (
   
    
    <div id='contact' className='flex items-center justify-center py-8 flex-col'>
        <div className='pb-8 flex items-center' >
            <p  className='text-black text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 text-center'>Contact us</p>
        </div>
        <form onSubmit={sendMail} className='flex flex-col max-w-[600px] w-full'>
        <input className='my-4 p-2 bg-[#ccd6f6]'  type="text" name='sender_name' value={sender_name} onChange={handleName} 
        required placeholder="your name" />
        <input className='my-4 p-2 bg-[#ccd6f6]'  type="text" name='sender_email' value={sender_email} onChange={handleEmail} 
        required placeholder="your email id" />
        <textarea className='bg-[#ccd6f6] p-2' name='message' value={message} onChange={handelMessage} required placeholder='your message' />
        <button className='text-black border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center' type='submit'>Let's connect</button>
        </form>
    </div>
  )
}

export default Contact;