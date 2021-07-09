import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <article>
      <form>
          <div className="mb-3">
              <label htmlFor="inputName" className="form-label">Name</label>
              <input type="name" className="form-control" id="inputName"/>
              <div class="form-text">Please Enter Your Name</div>
          </div>
          <div className="mb-3">
              <label htmlFor="inputEmail" class="form-label">Email</label>
              <input type="email" className="form-control" id="inputEmail"/>
              <div class="form-text">Please Enter Your Email</div>
          </div>
          <div className="mb-3">
              <label htmlFor="inputMessage" className="form-label">Message</label>
              <input type="message" className="form-control" id="inputMessage"/>
              <div className="form-text">Enter your message above</div>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </article>
    )
  }
}

export default Contact;