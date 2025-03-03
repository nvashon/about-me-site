import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    name: "Task Manager API",
    description: "A full-stack task manager with authentication and CRUD operations.",
    github: "https://github.com/nvashon/task-manager-api",
    deployed: ""
  },
  {
    name: "Job Scraper API",
    description: "A FastAPI-based web scraper that fetches remote job listings and stores them in an SQLite database. The API allows querying job postings via REST endpoints.",
    github: "https://github.com/nvashon/python-web-scraper-api",
    deployed: ""
  },
  {
    name: "Spam Classifier",
    description: "A machine-learning-based spam classifier that detects whether a message is spam or not. Built using Python, Scikit-learn, FastAPI, and Uvicorn for deployment",
    github: "https://github.com/nvashon/spam-classifier",
    deployed: ""
  },
  {
    name: "Portfolio Site",
    description: "My personal portfolio built with React and Tailwind.",
    github: "https://github.com/nvashon/about-me-site",
    deployed: "https://nvashon.github.io/about-me-site/"
  }
];

const deployedProjects = [
  {
    name: "About Me Site",
    url: "https://nvashon.github.io/about-me-site/"
  }
];

export default function Projects() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <Card key={index} className="p-4">
            <CardContent>
              <h2 className="text-xl font-semibold">{project.name}</h2>
              <p className="text-gray-600">{project.description}</p>
              <div className="mt-2 flex gap-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 flex items-center gap-1">
                    <FaGithub /> GitHub
                  </a>
                )}
                {project.deployed && (
                  <a href={project.deployed} target="_blank" rel="noopener noreferrer" className="text-green-600 flex items-center gap-1">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <h2 className="text-2xl font-bold mt-8">Deployed Projects</h2>
      <ul className="list-disc ml-5 mt-2">
        {deployedProjects.map((project, index) => (
          <li key={index}>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-600">
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
