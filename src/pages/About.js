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
                    <img src="/images/silly_grif.jpg"/>
                    <p>GitHub: <a href="https://github.com/gmpaier">gmpaier</a></p>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/griffin-paier-8756551bb/">Griffin Paier</a> </p>
                </div>
            </div>
            <div class="col-sm">
                <section>My name is Griffin Paier. I am 25 years old and I live in Orange, CT. I have a degree in Economics from Loyola University Maryland. Currently, I am enrolled in a web development bootcamp in order to improve my programming skills. In my free time, I enjoy reading philosophy, recording music, and playing games. </section>
            </div>
        </div>
    </article>    
    )
  }
}

export default About;