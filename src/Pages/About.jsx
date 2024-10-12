import React from "react";

function About() {
  return (
    <div>
      <h2>About</h2>
      <div className="about-container">
        <div className="about-1">
          <h3>My Skils</h3>
          <ul>
            <li>
              <i class="fa-brands fa-html5"></i>Html
            </li>
            <li>
              <i class="fa-brands fa-css3-alt"></i>Css
            </li>
            <li>
              <i class="fa-brands fa-js"></i>JavaScript
            </li>
            <li>
              <i class="fa-brands fa-react"></i>React
            </li>
            <li>
              <i class="fa-brands fa-node-js"></i>Node
            </li>
            <li>
              <i class="fa-solid fa-database"></i>Database-SQL
            </li>
          </ul>
        </div>
        <div className="about-2">
          <h3>My Experience</h3>
          <ul>
            <li>
              <i class="fa-solid fa-laptop-code"></i> Frontend Development
            </li>
            <li>
              <i class="fa-solid fa-code"></i> Backend Development
            </li>
            <li>
              <i class="fa-solid fa-meteor"></i> Full Stack Development
            </li>
            <li>
              <i class="fa-brands fa-web-awesome"></i> Responsive Design
            </li>
          </ul>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
            placeat neque deserunt doloremque adipisci pariatur, accusamus
            necessitatibus blanditiis quaerat itaque odit voluptatibus explicabo
            iusto odio asperiores culpa reiciendis. Doloribus, cumque?
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
