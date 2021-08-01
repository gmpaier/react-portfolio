import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <article>
        <div class="row">
            <h1>About Me</h1>
        </div>
        <div class="row">
            <div class="col-sm">
                <div class="row-sm">
                    <img src="https://gmpaier.github.io/react-portfolio/images/silly_grif.jpg"/>
                    <p>GitHub: <a href="https://github.com/gmpaier">gmpaier</a></p>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/griffin-paier-8756551bb/">Griffin Paier</a> </p>
                    <p>Email: <a href="mailto:gmpaier@loyola.edu">gmpaier@loyola.edu</a></p>
                </div>
            </div>
            <div class="col-sm">
                <section>My name is Griffin Paier. I am a 25 years old Junior Data Analyst and I live in Orange, CT. I have a degree in Economics from Loyola University Maryland and recently completed a Bootcamp in Full Stack Web Development from UConn. In my free time, I enjoy reading philosophy, recording music, and playing games. </section>
            </div>
        </div>
    </article>    
    )
  }
}

export default About;