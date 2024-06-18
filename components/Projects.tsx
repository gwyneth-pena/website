"use client";
import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const projectList = [
    {
      image: "/images/plan-it.png",
      title: "Plan It: Personal Todo List - Frontend",
      description:
        " A Todo List App made using Angular - Its features are:  login, sign up, creating, editing, deleting and viewing of tasks.",
      githubLink: "https://github.com/gwyneth-pena/plan-it-todo-list",
    },
    {
      image: "/images/api-placeholder.png",
      title: "Todo List API",
      description:
        " A Todo List API made using NodeJS and Express - It has endpoints for:  login, sign up, creating, editing, deleting and viewing of tasks.",
      githubLink: "https://github.com/gwyneth-pena/todo-list-node-backend",
    },
    {
      image: "/images/cafe-management.png",
      title: "Cafe Management - Frontend",
      description:
        "A Cafe Management App made using Angular - Its features are:  login, sign up, change password, management of products, categories, orders, users and bills.",
      githubLink: "https://github.com/gwyneth-pena/cafemanagementfrontend",
    },
    {
      image: "/images/api-placeholder.png",
      title: "Cafe Management API",
      description:
        " A Cafe Management API made using Spring Boot - It has endpoints for:  login, sign up, change password, management of products, categories, orders, users and bills.",
      githubLink: "https://github.com/gwyneth-pena/cafemanagementapi",
    },
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div id="projects">
          <h2 className="text-normal text-center font-medium text-2xl py-0 mb-10 md:text-3xl">
            Projects
          </h2>
        </div>
      </motion.div>
      <div className="grid grid-cols-1 gap-4 pb-10 px-10 md:flex-center md:grid-cols-2 lg:grid-cols-4">
        {projectList.map((project, idx) => {
          return <ProjectCard key={idx} {...project} />;
        })}
      </div>
    </>
  );
}
