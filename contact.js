//path of this file => create-next-app/pages/contact.js

import React, { useState } from 'react'
import styles from '../src/app/contact.module.css'


const Contact = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [desc, setdesc] = useState('')
  const [delfile, setdelfile] = useState('')

  const handleDelete = (e) => {
    e.preventDefault();
    const data = { delfile }
    fetch('http://localhost:3000/api/postcontact',{
      method: 'DELETE',
      handlers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(data),
    }).then(response => response.text())
      .then(data => {
        alert("File deleted Successfully.")
        setdelfile('');
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = { name, phone, email, desc }
    //console.log(data);
    fetch('http://localhost:3000/api/postcontact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(response => response.text())
      .then(data => {
        //console.log('Success:', data);
        alert("Request Submitted Successfully.")
        setdesc('');
        setemail('');
        setname('');
        setphone('');
      })
      .catch((error) => {
        console.log('Error:', error);
      });

  }

  const handleChange = (e) => {
    if (e.target.name == 'phone') {
      setphone(e.target.value)
    }
    else if (e.target.name == 'name') {
      setname(e.target.value)
    }
    else if (e.target.name == 'email') {
      setemail(e.target.value)
    }
    else if (e.target.name == 'desc') {
      setdesc(e.target.value)
    }
    else if (e.target.name == 'delfile') {
      setdelfile(e.target.value)
    }
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Contact us</h1>
      <form onDelete={handleDelete} onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formlabel}>Enter your name</label>
          <input type="text" value={name} onChange={handleChange} className="form-control" id="name" name='name' aria-describedby="emailHelp" />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formlabel}>Email address</label>
          <input type="email" value={email} onChange={handleChange} className="form-control" id="email" name='email' aria-describedby="emailHelp" />

        </div>
        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formlabel}>Phone Number</label>
          <input type="phone" value={phone} onChange={handleChange} className="form-control" id="phone" name='phone' />
        </div>
        <label className={styles.comments} htmlFor="desc">Comments</label>
        <div className={styles.mb3}>
          <textarea value={desc} onChange={handleChange} id="desc" placeholder="leave your message" className={styles.formlabel} rows={8} cols={38} name='desc' />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="delfile" className={styles.formlabel}>Enter File Name</label>
          <input type="text" value={delfile} onChange={handleChange} className="form-control" id="delfile" name='delfile' />
        </div>
        <button type="submit" className={styles.btn}>Submit</button>
        <button onClick={handleDelete} className={styles.btn}>Delete</button>
      </form>
    </div>
  )
}

export default Contact;
