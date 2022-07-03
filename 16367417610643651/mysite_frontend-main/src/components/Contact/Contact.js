import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react'
import "./Contact.css"

const Contact = () => {
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [errors,setErrors] = useState({});
  const [showThankyou, setShowThankyou] = useState(false)

  const updateSubject = (event) => {
    setSubject(event.target.value);
  };

  const updateEmail = (event) => {
    setEmail(event.target.value);
  };

  const updateDescription = (event) => {
    setDescription(event.target.value);
  };

  const clear = async () => {
    setSubject('')
    setEmail('')
    setDescription('')
    setErrors({})

  }

  const submit = async () => {
    try {
      const response =  await axios.post(
        'https://mysite-dev2020.herokuapp.com/contacts/', 
        {subject, description, email, },)
      setShowThankyou(true)
    } catch(e) {
      setErrors({...errors, server: e.response.data})
    }
  };

  return (
    <div className="contact-form">
      <input
        onChange={updateSubject}
        value={subject}
        type="text"
        placeholder="subject"
      />
      <input
        onChange={updateEmail}
        value={email}
        type="email"
        placeholder="Email"
      />
      <textarea onChange={updateDescription} value={description}></textarea>
      <div className="actions">
      <button className="clear" onClick={clear}>Clear</button>
      <button className="submit" onClick={submit}>Submit</button>
      </div>
      {showThankyou && (<div className="thankyou">Oh look what you have done!!!</div>)}
      {errors.server && <div className="error">
        {Object.entries(errors.server).map((key) => {
          console.log(key, key[1], key[0])
          return (<ul>
            {key[1].map((err) => (
              <li>{key[0]}: {err}</li>
            ))}
          </ul>)
        })}
        </div>}
    </div>
  );
};

export default Contact