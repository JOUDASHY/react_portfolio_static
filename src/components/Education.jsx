import React from 'react';
import CSVP from "../assets/images/education/CSVP.png";
import eni from "../assets/images/education/eni.png";
import iste from "../assets/images/education/iste.png";

const Education = () => {
  const educations = [
    {
      id: 1,
      image: eni,
      nom_ecole: "ENI",
      nom_parcours: "INFORMATIQUE GENERAL",
      annee_debut: 2021,
      annee_fin: 2026,
      lieu: "Fianarantsoa"
    },
    {
      id: 2,
      image: iste,
      nom_ecole: "ISTE",
      nom_parcours: "Topographie",
      annee_debut: 2017,
      annee_fin: 2020,
      lieu: "Fianarantsoa"
    },
    {
      id: 3,
      image: CSVP,
      nom_ecole: "Lycee Saint Vincent de Paul Farafangana",
      nom_parcours: "Série D",
      annee_debut: 2014,
      annee_fin: 2017,
      lieu: "Farafangana"
    }
  ];

  return (
    <section className="education" id="education">
      <h1 className="heading">
        <i className="fas fa-graduation-cap"></i> My <span>Education</span>
      </h1>

      <div className="box-container">
        {educations.map((education) => (
          <div className="box" key={education.id}>
            <div className="image">
              <img
                draggable="false"
                src={education.image}
                alt={education.nom_ecole}
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </div>
            <div className="content">
              <h3>{education.nom_ecole}</h3>
              <p className="mb-2" style={{ color: "#343a40", fontWeight: "500" }}>
                {education.nom_parcours} - {education.lieu}
              </p>
              <h4>
                {education.annee_debut} - {education.annee_fin}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
