import React, { useEffect, useState } from "react";
import githubaction from "../assets/images/competence/githubaction.png";
import laravelapi from "../assets/images/competence/laravelapi.png";
import react from "../assets/images/competence/react.png";
import bootstrap from "../assets/images/competence/bootstrap.jpg";
import psql from "../assets/images/competence/psql.jpg";
import py from "../assets/images/competence/py.jpg";
import mysql from "../assets/images/competence/mysql.jpg";
import flask from "../assets/images/competence/flask.jpg";
import dj from "../assets/images/competence/dj.jpg";
import UML from "../assets/images/competence/UML.jpg";
import web from "../assets/images/competence/web.jpg";
import linux from "../assets/images/competence/linux.jpg";

const Skills = () => {
  const skills= [
    {
        "id": 1,
        "image": UML,
        "name": "Modélisation UML",
        "description": "...",
        "niveau": 8,
        "categorie": "Langage de modélisation"
    },
    {
        "id": 2,
        "image": mysql,
        "name": "MYSQL",
        "description": "..",
        "niveau": 9,
        "categorie": "Base de données"
    },
    {
        "id": 3,
        "image": psql,
        "name": "Postgresql",
        "description": "..",
        "niveau": 7,
        "categorie": "Base de données"
    },
    {
        "id": 4,
        "image": bootstrap,
        "name": "BOOTSTRAP",
        "description": "..",
        "niveau": 8,
        "categorie": "Framework"
    },
    {
        "id": 5,
        "image": py,
        "name": "Python",
        "description": "..",
        "niveau": 9,
        "categorie": "Langage de programmation"
    },
    {
        "id": 6,
        "image": linux,
        "name": "Administration server Linux",
        "description": "...",
        "niveau": 8,
        "categorie": "Système d'exploitation"
    },
    {
        "id": 8,
        "image": dj,
        "name": "Django",
        "description": "..",
        "niveau": 7,
        "categorie": "Framework"
    },
    {
        "id": 7,
        "image": flask,
        "name": "Flask",
        "description": "..",
        "niveau": 6,
        "categorie": "Framework"
    },
    {
        "id": 9,
        "image": web,
        "name": "Html & CSS & JS",
        "description": "...",
        "niveau": 8,
        "categorie": "Langage de programmation"
    },
    {
        "id": 10,
        "image": laravelapi,
        "name": "LARAVEL",
        "description": "..",
        "niveau": 8,
        "categorie": "Framework"
    },
    {
        "id": 11,
        "image": react,
        "name": "REACTJS",
        "description": "..",
        "niveau": 8,
        "categorie": "Framework"
    },
    {
        "id": 12,
        "image": githubaction,
        "name": "CI/CD",
        "description": "..",
        "niveau": 7,
        "categorie": "devops"
    }
]

  return (
<section className="skills py-5" id="skills">
  <div className="container">
    <h2 className="heading text-center mb-4">
      <i className="fas fa-laptop-code"></i> Skills & <span>Abilities</span>
    </h2>
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {skills.length > 0 ? (
        skills.map((skill) => (
          <div className="col" key={skill.id}>
            <div
              className="card shadow-sm border-0"
              style={{ padding: "20px", borderRadius: "8px" }}
            >
              <div className="card-body text-center">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="img-fluid mb-3"
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
                <h5 className="card-title text-dark">{skill.name}</h5>
                {/* Progress bar */}
                <div
                  style={{
                    width: "100%",
                    backgroundColor: "#e0e0df",
                    borderRadius: "10px",
                    margin: "10px 0",
                    height: "10px",
                  }}
                >
                  <div
                    style={{
                      width: `${skill.niveau * 10}%`,
                      backgroundColor: "#f68c09",
                      height: "100%",
                      borderRadius: "10px",
                      transition: "width 0.5s ease-in-out",
                    }}
                  ></div>
                </div>
                <p className="text-muted">{skill.niveau * 10}%</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-muted">Loading skills...</p>
      )}
    </div>
  </div>
</section>

  
  );
};

export default Skills;
