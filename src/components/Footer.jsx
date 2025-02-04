import React, { useState, useEffect } from "react";

const Footer = () => {


  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setProfile({
      "username": "Nilsen",
      "email": "alitsiryeddynilsen@gmail.com",
      "id": 1,
      "image": "/media/profile_images/cv1.jpg",
      "about": "Je suis étudiant en quatrième année à\r\nl’ENI .Personne motivée dotée d’une solide\r\néthique\r\nprofessionnelle\r\net d’une capacité a travailler en toute indépendance. Bonnes compétences en organisation et en collaboration au sein d’une équipe. Je cherche à  mettre à profit mes compétences dans un nouveau poste stimulant.",
      "date_of_birth": "2000-08-27",
      "link_facebook": "https://www.facebook.com/tobias.joudashiy",
      "link_github": "https://github.com/JOUDASHY",
      "link_linkedin": "",
      "phone_number": "348655523",
      "address": "Isada, Fianarantsoa"
  });
  }, []);
  if (!profile) {
    return <p>Chargement...</p>; // Affiche un message de chargement
  }

  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>{profile.username}'s Portfolio</h3>
          <p>
            {profile.about} <br /> <br />
          
          </p>
        </div>

        <div className="box">
          <h3>Quick Links</h3>
          <a href="#home">
            <i className="fas fa-chevron-circle-right"></i> Home
          </a>
          <a href="#about">
            <i className="fas fa-chevron-circle-right"></i> About
          </a>
          <a href="#skills">
            <i className="fas fa-chevron-circle-right"></i> Skills
          </a>
          <a href="#projects">
            <i className="fas fa-chevron-circle-right"></i> Projects
          </a>
          <a href="#education">
            <i className="fas fa-chevron-circle-right"></i> Education
          </a>
          <a href="#experience">
            <i className="fas fa-chevron-circle-right"></i> Experience
          </a>
          


          
        </div>

        <div className="box">
          <h3>Contact Info</h3>
          <p>
            <i className="fas fa-phone"></i> +261 {profile.phone_number}
          </p>
          <p>
            <i className="fas fa-envelope"></i> {profile.email}
          </p>
          <p>
            <i className="fas fa-map-marked-alt"></i> {profile.address}
          </p>
          <div className="share">
            <a
              href={profile.link_linkedin}
              className="fab fa-linkedin"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              href={profile.link_facebook}
              className="fab fa-facebook"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            <a
              href={`mailto:${profile.email}`}
              className="fas fa-envelope"
              aria-label="Mail"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </div>
        </div>
      </div>

      <h1 className="credit">
        Designed with <i className="fa fa-heart pulse"></i> by{" "}
        <a href={profile.link_linkedin}>{profile.username}</a>
      </h1>
    </section>
  );
};

export default Footer;
