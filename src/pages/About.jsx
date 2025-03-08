export default function About() {
    return (
        <section>
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p className="mt-2 text-gray-600">
            I'm a <strong className="font-semibold">Senior Software Engineer</strong> 
            with a deep focus on <strong className="font-semibold">DevOps, Full-Stack Development, 
            and Data Engineering</strong>. I specialize in designing scalable, cloud-native 
            applications and optimizing infrastructure for high performance and reliability.
          </p>
          <p className="mt-4 text-gray-600">
            In <strong className="font-semibold">DevOps</strong>, I have extensive experience with 
            <strong className="font-semibold"> CI/CD pipelines, infrastructure as code (IaC), 
            and cloud automation</strong>. I’ve built and maintained cloud environments in 
            <strong className="font-semibold">AWS and Azure</strong>, leveraging tools like 
            <strong className="font-semibold"> Terraform, GitHub Actions, GitLab CI/CD, and Docker </strong> 
            to streamline deployments and reduce operational overhead.
          </p>
          <p className="mt-4 text-gray-600">
            As a <strong className="font-semibold">Full-Stack Developer</strong>, I build 
            modern, user-friendly applications using <strong className="font-semibold">
            React, Node.js, TypeScript, GraphQL, Java, C#, AWS RDS, CosmosDB, and MongoDB</strong>. I prioritize clean 
            code, performance, and maintainability, ensuring seamless integration between 
            the frontend, backend, and cloud infrastructure.
          </p>
          <p className="mt-4 text-gray-600">
            My expertise in <strong className="font-semibold">Data Engineering</strong> 
            includes designing <strong className="font-semibold">high-performance ETL 
            pipelines, real-time data processing, and large-scale data extraction</strong>. 
            I've worked with <strong className="font-semibold">PySpark, Databricks, SQL, 
            and AWS/Azure data services</strong> to optimize and automate complex workflows.
          </p>
          <p className="mt-4 text-gray-600">
            I’m passionate about <strong className="font-semibold">automation, scalability, 
            and mentoring engineers</strong> to build efficient, cloud-first solutions. Whether 
            it's improving CI/CD processes, optimizing data workflows, or building full-stack 
            applications, I strive to create reliable and scalable software systems.
          </p>
          <p className="mt-6 text-gray-600">
        Let’s connect! You can find me on{" "}
        <a
          href="https://www.linkedin.com/in/nicholas-vashon-2b93a886/"
          className="text-blue-500 font-semibold hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>.
      </p>
        </section>
      );  
  }
  