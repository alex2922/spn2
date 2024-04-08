import React, { useState } from "react";
import "../Styles/contact.scss";
import { SlLocationPin } from "react-icons/sl";
import { notification } from "antd";
import { FiSmartphone } from "react-icons/fi";

import { AiOutlineMail } from "react-icons/ai";
import axios from "axios";
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Contact(props) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const onHandleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://backend.sambhajipatilnilangekar.com/api/contacts/",
      {
        firstname: fname,
        lastname: lname,
        email: email,
        contact: phone,
        message: msg
      })
      .then(res => {
        console.log(res.data)
        setFname("");
        setLname("");
        setPhone("");
        setEmail("");
        setMsg("");

        toast.success(props.toggle ? 'Thank you for contacting us!' : 'आपल्या प्रतिसादाबद्दल मन:पूर्वक धन्यवाद!', {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Flip,
        });
      })
      .catch(err => console.log(err))
  };

  return (
    <>
      {props.data.map((data) => {
        return (
          <>
            <div className="parent contact2">
              <div className="contact2-container cont">
                <div className="contact2-cont-top">
                  <h2>{data.Contact_heading}</h2>
                  <p>{data.Contact_para}</p>
                </div>
                <div className="contact2-cont-bottom">
                  <div className="contact2-cont-bottom-left">
                    <form action="#" onSubmit={onHandleSubmit}>
                      <div className="input-div">
                        <input
                          required
                          type="text"
                          placeholder={data.Contact_first_name}
                          value={fname}
                          onChange={(e) => {
                            setFname(e.target.value);
                          }}
                        />
                        <input
                          required
                          type="text"
                          placeholder={data.Contact_last_name}
                          value={lname}
                          onChange={(e) => {
                            setLname(e.target.value);
                          }}
                        />
                      </div>
                      <div className="input-div">
                        <input
                          required
                          type="number"
                          placeholder={data.Contact_phone}
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value);
                          }}
                        />
                        <input
                          required
                          type="email"
                          placeholder={data.Contact_email}
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                      </div>
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        placeholder={data.Conatct_msg}
                        value={msg}
                        onChange={(e) => {
                          setMsg(e.target.value);
                        }}
                      ></textarea>

                      <button type="submit" className="btn">
                        {data.Contact_send}
                      </button>
                    </form>
                  </div>
                  <div className="contact2-cont-bottom-right">
                    <div className="contacts-list">
                      <div className="contact-item">
                        <div className="icons">
                          {" "}
                          <SlLocationPin />
                        </div>
                        <a href='https://maps.app.goo.gl/3vtrLStVxpJ6Vu2Z7' target="_blank" className="item-details">
                          <h4>{data.Contact_add}</h4>
                          <p>{data.Contact_para_add}</p>
                        </a>
                      </div>
                      <div className="contact-item">
                        <div className="icons">
                          {" "}
                          <FiSmartphone />{" "}
                        </div>
                        <a href="tel:+91-8379832555" target="_blank" className="item-details">
                          <h4>{data.Contact_phone}</h4>
                          <p>+91-8379832555</p>
                        </a>
                      </div>
                      <div className="contact-item">
                        <div className="icons">
                          {" "}
                          <AiOutlineMail />{" "}
                        </div>
                        <a href="mailto:info@sambhajipatilnilangekar.com" target="_black" className="item-details">
                          <h4>{data.Contact_email}</h4>
                          <p className="contact-p">info@sambhajipatilnilangekar.com</p>
                        </a>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}

      <ToastContainer
        position="top-right"
        autoClose={2000}
        limit={1}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Flip}
      />
    </>
  );
}

export default Contact;
