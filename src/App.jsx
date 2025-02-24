import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <nav className="p-4 shadow-md bg-white flex justify-between">
          <h1 className="text-xl font-bold">Nicholas Vashon</h1>
          <div>
            <Link to="/" className="mx-2">Home</Link>
            <Link to="/about" className="mx-2">About</Link>
            <Link to="/projects" className="mx-2">Projects</Link>
            <Link to="/contact" className="mx-2">Contact</Link>
          </div>
        </nav>
        <main className="p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <section className="text-center">
      <h2 className="text-3xl font-semibold">Welcome</h2>
      <p className="mt-2 text-gray-600">Senior Software Engineer | Cloud | DevOps | Data Engineering</p>
    </section>
  );
}

function About() {
  return (
    <section>
      <h2 className="text-2xl font-semibold">About Me</h2>
      <p className="mt-2 text-gray-600">Experienced software engineer with expertise in cloud computing, DevOps, and data engineering.</p>
    </section>
  );
}

function Projects() {
  return (
    <section>
      <h2 className="text-2xl font-semibold">Projects</h2>
      <ul className="mt-2 text-gray-600">
        <li>🔹 Cloud-based ETL pipeline optimization</li>
        <li>🔹 Automated CI/CD for microservices</li>
        <li>🔹 Scalable React applications</li>
      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section>
      <h2 className="text-2xl font-semibold">Contact</h2>
      <p className="mt-2 text-gray-600">Email: nvashon@gmail.com</p>
      <p className="text-gray-600">GitHub: <a href="https://github.com/yourgithub" className="text-blue-500">@yourgithub</a></p>
      <p className="text-gray-600">LinkedIn: <a href="https://linkedin.com/in/yourlinkedin" className="text-blue-500">/yourlinkedin</a></p>
    </section>
  );
}
