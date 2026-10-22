
import { Link } from "react-router";

export function Home() {
  return (
    <section>
      <h1>Ryan Staicoff</h1>
      <h2>Computer Science Student & Aspiring Software Developer</h2>

      <p>
        I am a Computer Science student at Saint Louis University
        interested in software development, artificial intelligence,
        and building applications that solve real problems.
      </p>

      <p>
        I have experience working with Python, Java, C++,
        JavaScript, and Node.js.
      </p>

      <Link to="/projects">Explore My Projects</Link>
    </section>
  );
}

export function Experience() {
  return (
    <section>
      <h1>Experience</h1>

      <h2>Education</h2>
      <p>Saint Louis University - Computer Science</p>

      <h2>Technical Skills</h2>
      <ul>
        <li>Python</li>
        <li>Java</li>
        <li>C++</li>
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>Git and GitHub</li>
      </ul>

      <h2>Relevant Experience</h2>

      <h3>Software Development Projects</h3>
      <p>
        Developed applications using JavaScript and Node.js,
        gaining experience with APIs, application logic,
        and debugging.
      </p>

      <h3>Computer Science Coursework</h3>
      <p>
        Studied algorithms, operating systems, and computer
        networks, developing problem-solving and programming
        skills through coursework and assignments.
      </p>
    </section>
  );
}

export function Contact() {
  return (
    <section>
      <h1>Contact</h1>

      <p>
        Interested in learning more about my work?
        Visit my GitHub profile to explore my projects.
      </p>

      <p>
        GitHub profile link coming soon.
      </p>
    </section>
  );
}

export function NotFound() {
  return (
    <section>
      <h1>Page Not Found</h1>
      <p>The page you requested does not exist.</p>
      <Link to="/">Return Home</Link>
    </section>
  );
}
