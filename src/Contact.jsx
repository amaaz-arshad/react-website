import React, { useState } from "react";

const Contact = () => {
  const [details, setDetails] = useState({
    name: "",
    phone: "",
    email: "",
    msg: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setDetails((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const Submit = (event) => {
    event.preventDefault();
    alert(
      ` name: ${details.name} \n phone: ${details.phone} \n email: ${details.email} \n message: ${details.msg}`
    );

    setDetails({
      name: "",
      phone: "",
      email: "",
      msg: "",
    });
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={Submit}>
              <div className="mb-3">
                <label for="name" className="form-label">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={details.name}
                  onChange={inputEvent}
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label for="phone" className="form-label">
                  Phone
                </label>
                <input
                  required
                  type="number"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={details.phone}
                  onChange={inputEvent}
                  placeholder="Mobile number"
                />
              </div>
              <div className="mb-3">
                <label for="email" className="form-label">
                  Email address
                </label>
                <input
                  required
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={details.email}
                  onChange={inputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label for="msg" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="msg"
                  name="msg"
                  value={details.msg}
                  onChange={inputEvent}
                  rows="3"
                  required
                ></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
