
import { Link, useParams } from "react-router";
import { projects } from "../data/projects.js";

export default function ProjectDetail() {
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section>
        <h1>Project Not Found</h1>
        <p>The requested project does not exist.</p>
        <Link to="/projects">Browse All Projects</Link>
      </section>
    );
  }

  return (
    <article>
      <h1>{project.title}</h1>

      <p>{project.technologies.join(", ")}</p>

      <h2>Problem</h2>
      <p>{project.problem}</p>

      <h2>My Contribution</h2>
      <p>{project.role}</p>

      <h2>Implementation</h2>
      <p>{project.approach}</p>

      <h2>Result or Lesson</h2>
      <p>{project.outcome}</p>

      <Link to="/projects">Back to Projects</Link>
    </article>
  );
}
