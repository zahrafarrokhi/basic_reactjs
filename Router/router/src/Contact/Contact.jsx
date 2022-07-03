import React, { useState } from 'react'
import Button from "../Button/Button";

const Contact = () => {
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const handleChangeInputSubject = (event) => {
    // console.log(event.target.value);
    setSubject(event.target.value);
  };
  
  console.log("subject",subject)

  const handleChangeInputEmail = (event) => {
    // console.log(event.target.value);
    setEmail(event.target.value);
  };

  const handleChangeTextArea = (event) => {
    // console.log(event.target.value);
    setDescription(event.target.value);
  };
  const handleSubmit = () => {
    // console.log("submit");
    console.log("subject", subject);
    console.log("email", email);
    console.log("description", description);
  };

  return (
    <div className="Contact">
      <div className="formControl">
        <input
          type="text"
          placeholder="subject"
          // onChange={(event)=>(console.log(event))}
          // onChange={(event)=>(console.log(event.target.value))}
          onChange={handleChangeInputSubject}
        />
      </div>
      <div className="formControl">
        <input
          type="email"
          placeholder="Email"
          // onChange={(event) => (console.log(event.target.value))}
          onChange={handleChangeInputEmail}
        />
      </div>
      <div className="formControl">
        <textarea onChange={handleChangeTextArea}>Your request here</textarea>
      </div>
      <div className="formControl">
        <Button handleClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
};

export default Contact;
