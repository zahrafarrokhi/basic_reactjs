import React, { useState } from 'react'
import Button from "../Button/Button";
import { validateEmail, validateSubject } from '../../utils/validation'

const Contact = () => {
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [errors,setErrors] = useState({});

  // const handleChangeInputSubject = (event) => {
  //   // console.log(event.target.value);
  //   setSubject(event.target.value);
  // };
  
  // console.log("subject",subject)

  // const handleChangeInputEmail = (event) => {
  //   // console.log(event.target.value);
  //   setEmail(event.target.value);
  // };

  // const handleChangeTextArea = (event) => {
  //   // console.log(event.target.value);
  //   setDescription(event.target.value);
  // };
  // const handleSubmit = () => {
  //   // console.log("submit");
  //   console.log("subject", subject);
  //   console.log("email", email);
  //   console.log("description", description);
  // };
//func with validation
  
const handleChangeInputSubject = (event) => {
  if (validateSubject(event.target.value)) {
    setSubject(event.target.value);
    setErrors({
      ...errors,
      subject: null,
    });
  } else {
    setErrors({
      ...errors,
      subject: "Subject must be more than 8 characters",
    });
  }
};

const handleChangeInputEmail = (event) => {
  if (validateEmail(event.target.value)){
      setEmail(event.target.value);
      setErrors({
          ...errors,
          email: null,
      })
  }else {
      setErrors({
        ...errors,
        email: 'Email is not valid'
      });
  }
};

const handleChangeTextArea = (event) => {
setDescription(event.target.value);
};

const handleSubmit = () => {
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
         {errors.subject && <span>{errors.subject}</span>}
      </div>
      <div className="formControl">
        <input
          type="email"
          placeholder="Email"
          // onChange={(event) => (console.log(event.target.value))}
          onChange={handleChangeInputEmail}
        />
          {errors.email && <span>{errors.email}</span>}
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
