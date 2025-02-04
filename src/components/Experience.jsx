import React from "react";

const experiences = [
  {
    id: 2,
    date_debut: "2024-09-02",
    date_fin: "2024-12-20",
    entreprise: "UN-IT",
    type: "stage",
    role: "Stagiaire Dev FULL STACK",
  },
  {
    id: 1,
    date_debut: "2023-11-20",
    date_fin: "2024-01-09",
    entreprise: "KOLO TV",
    type: "stage",
    role: "Stagiaire Admin Système et Réseau",
  },
  {
    id: 3,
    date_debut: "2023-09-04",
    date_fin: "2023-11-24",
    entreprise: "Ministère de Fonction Publique",
    type: "stage",
    role: "Stagiaire Admin Système et Réseau",
  },
];

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <h2 className="heading">
        <i className="fas fa-briefcase"></i> Experience
      </h2>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div
            className={`container ${index % 2 === 0 ? "right" : "left"}`}
            key={exp.id}
          >
            <div className="content">
              <div className="tag">
                <h2>{exp.entreprise}</h2>
              </div>
              <div className="desc">
                <h3>{exp.role}</h3>
                <p>
                  {new Date(exp.date_debut).toLocaleDateString()} - {" "}
                  {exp.date_fin ? new Date(exp.date_fin).toLocaleDateString() : "Present"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="morebtn">
        <a href="/experience" className="btn">
          <span>View All</span>
          <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </section>
  );
};

export default Experience;
