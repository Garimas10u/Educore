import React from 'react'
import './Contacts.css'
import msgicon from '../../assets/msg-icon.png'
import mailicon from '../../assets/mail-icon.png'
import phoneicon from '../../assets/phone-icon.png'
import locationicon from '../../assets/location-icon.png'
import whitearrow from '../../assets/white-arrow.png'

const Contacts = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "61bc3062-4416-4bd0-9ac1-8869320e9c87");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Message Sent Successfully!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  

  return (
    <div className='contact' id='contact'>
        <div className="contact-col">
            <h3>Reach Out To Us <img src={msgicon} alt="" /> </h3>
            <p>In case of inquiries, please feel free to contact our team. We are here to address any questions or concerns you may have regarding our programs, admissions process, or any other aspect of our institution. <br />
            Please take a moment to share your thoughts, suggestions, or concerns with us. Your feedback is highly valuable to us.
            <br /> 
            </p>
            <ul>
                <li> <img src={mailicon} alt="" /> Contact@educore.com</li>
                <li> <img src={phoneicon} alt="" />+91 45768 24390</li>
                <li> <img src={locationicon} alt="" />Block C, Edward Street, Bengaluru, India</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your Name' required />
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your Phone Number' required />
                <label>Your Message</label>
                <textarea name="message" id="" rows="6" placeholder='Add your Message Here' required ></textarea>
                <button type='submit' className='btn dark-btn'>Submit<img src={whitearrow} alt="" /></button>
                <span>{result}</span>
            </form>
        </div>
    </div>
  )
}

export default Contacts