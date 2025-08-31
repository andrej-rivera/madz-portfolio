import { useState } from 'react'
import '../index.css'

export default function Contact() {
  const [result, setResult] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c312add1-9e5b-40dd-82b3-4110580cd5e1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {

      // Show confirmation alert for 5 seconds, then hide.
      setResult(true);
      const timeId = setTimeout(() => {
      setResult(false);
    }, 5000)
      
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <form className='contact-form' onSubmit={onSubmit}>
          <div className="container">
            <div>
              <label>Name</label> <br></br>
              <input type="text" name="name" placeholder='John Doe' required/>
            </div>
            <div>
              <label>Email</label> <br></br>
              <input type="email" name="email" placeholder='example@email.com' required/>
            </div>
            
          </div>
          <div>
            <label>Message</label> <br></br>
            <textarea name="message" rows="5" required></textarea>
          </div>
          <input type="checkbox" name="botcheck" class="hidden"/>

          <div><button className='button' type="submit">SEND</button></div>
        </form>
      <div className="contact-form-complete" data-visible={result}><p>Form Submitted Successfully!</p></div>
    </div>
  );
}