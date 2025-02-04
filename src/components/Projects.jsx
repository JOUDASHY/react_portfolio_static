import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Modal from "react-modal";
import { toast } from 'react-toastify'; // Importation de Toastify
import Swal from 'sweetalert2'; // Importation de SweetAlert2
import projet from '../assets/images/projet.png'; 
import gestio_port from '../assets/images/projects/gestio_port.png'; 
import gestioon_portfolio from '../assets/images/projects/gestioon_portfolio.png'; 
import app_dash from '../assets/images/projects/app_dash.png';
import app_landing from '../assets/images/projects/app_landing.png';
import app_landing_portfolio from '../assets/images/projects/app_landing_portfolio.png';
import app_login from '../assets/images/projects/app_login.png';
import app_message from '../assets/images/projects/app_message.png';
import app_formations from '../assets/images/projects/app_formations.png';
import app_certificat from '../assets/images/projects/app_certificat.png';
import dualwan from '../assets/images/projects/dualwan.png';
import app_portfolio from '../assets/images/projects/app_portfolio.png';
import blob_55c472fb63 from '../assets/images/projects/blob_55c472fb63.jpeg';
import ISCSITClust_7 from '../assets/images/projects/ISCSITClust_7.png';
import iscsi from '../assets/images/projects/iscsi.png';
import app_forum from '../assets/images/projects/app_forum.png';
import app_histo_paiement from '../assets/images/projects/app_histo_paiement.png';
import app_IA from '../assets/images/projects/app_IA.png';
import app_inscription from '../assets/images/projects/app_inscription.png';
import roundcube_login from '../assets/images/projects/roundcube_login.png';

import web_cloud from '../assets/images/projects/web_cloud-email_and_collaborative_solutions-mx_plan-email_roundcube-images-roundcube09.png';


import ndb_cluster from '../assets/images/projects/ndb_cluster.jpg';

import riptoospfredistribution from '../assets/images/projects/riptoospfredistribution.png';
import tel_ip from '../assets/images/projects/tel_ip.png';
import adds from '../assets/images/projects/adds.png';


import Linuxs_failover from '../assets/images/projects/Linuxs-failover-cluster-image.png';
import cisco_eigrp from '../assets/images/projects/cisco_eigrp_ospf_re-e1328287809172.png';
import cmd from '../assets/images/projects/15484380054805_cmd.png';



const Projects = () => {
  const [projects, setProjects] = useState([]);

  const [selectedScore, setSelectedScore] = useState({}); // Score sélectionné pour chaque projet
  const [loading, setLoading] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const openModal = (images) => {
    setSelectedImages(images);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImages([]);
  };
  const fetchProjects = async () => {
    const data=[
  {
      "id": 4,
      "nom": "CHATBOT IA generatif",
      "description": "....",
      "techno": "ReactJS et Ollama mistral en tant que IA",
      "githublink": null,
      "projetlink": null,
      "related_images": [],
      "average_score": 5.0
  },
  {
      "id": 5,
      "nom": "Mini réseaux sociaux",
      "description": "....",
      "techno": "DJANGO",
      "githublink": null,
      "projetlink": null,
      "related_images": [],
      "average_score": 3.0
  },
  {
      "id": 6,
      "nom": "Projet réseau sous GNS3 : LACP, routage IP avec des protocoles (RIP,OSPF..), ACL …",
      "description": "....",
      "techno": "GNS3",
      "githublink": null,
      "projetlink": null,
      "related_images": [
          {
              "id": 2,
              "projet": 6,
              "image": cisco_eigrp
          },
          {
              "id": 3,
              "projet": 6,
              "image": cmd
          },
          {
              "id": 4,
              "projet": 6,
              "image": riptoospfredistribution
          }
      ],
      "average_score": 3.0
  },
  {
      "id": 7,
      "nom": "Gestion de mon PORFOLIO et CV avec automatisation des tâches",
      "description": "Un projet de gestion de portfolio et CV dynamique, intégrant des fonctionnalités d'automatisation comme l'envoi automatique de CV personnalisés en fonction des opportunités.",
      "techno": "ReactJS & Django",
      "githublink": "https://github.com/JOUDASHY/PORTFOLIO_FRONT_BACKOFFICE_REACT",
      "projetlink": "https://nilsen.onrender.com",
      "related_images": [
          {
              "id": 22,
              "projet": 7,
              "image": gestio_port
          },
          {
              "id": 23,
              "projet": 7,
              "image": gestioon_portfolio
          }
      ],
      "average_score": 5.0
  },
  {
      "id": 9,
      "nom": "Plateforme web pour la formation ,avec assistance IA",
      "description": "...",
      "techno": "ReactJS ,Laravel API , GEMINI , Socket NODEJS",
      "githublink": "https://github.com/JOUDASHY/FORMATION_FRONTEND_BACKOFFICE",
      "projetlink": "https://formation-frontend-backoffice.onrender.com",
      "related_images": [
          {
              "id": 13,
              "projet": 9,
              "image": app_dash          },
          {
              "id": 14,
              "projet": 9,
              "image": app_forum
          },
          {
              "id": 15,
              "projet": 9,
              "image": app_histo_paiement          },
          {
              "id": 16,
              "projet": 9,
              "image": app_IA          },
          {
              "id": 17,
              "projet": 9,
              "image": app_login          },
          {
              "id": 24,
              "projet": 9,
              "image": app_certificat          }
      ],
      "average_score": 5.0
  },
  {
      "id": 10,
      "nom": "NDB Mysql cluster sous Docker",
      "description": "...",
      "techno": "DOCKER",
      "githublink": null,
      "projetlink": null,
      "related_images": [
          {
              "id": 11,
              "projet": 10,
              "image": ndb_cluster,
          }
      ],
      "average_score": 3.0
  },
  {
      "id": 11,
      "nom": "Mon Portfolio",
      "description": "une application web interactive présentant mes compétences, projets et expériences professionnelles de manière moderne et dynamique.",
      "techno": "ReactJS & Django",
      "githublink": "https://github.com/JOUDASHY/PORTFOLIO_FRONT_FRONTOFFICE_REACT",
      "projetlink": "https://portfolio-nilsen.onrender.com",
      "related_images": [
          {
              "id": 20,
              "projet": 11,
              "image": app_landing_portfolio          },
          {
              "id": 21,
              "projet": 11,
              "image": app_portfolio          }
      ],
      "average_score": 5.0
  },
  {
      "id": 12,
      "nom": "Localisation Géographique sous QGIS",
      "description": "...",
      "techno": "QGIS",
      "githublink": null,
      "projetlink": null,
      "related_images": [],
      "average_score": 2.0
  },
  {
      "id": 13,
      "nom": "Certification SSL d’un site Web sous LINUX",
      "description": "Le projet consiste à sécuriser un site web sous Linux en obtenant et en installant un certificat SSL via OpenSSL ou Certbot, assurant ainsi une connexion HTTPS sécurisée pour les utilisateurs.",
      "techno": "CERTBOT ou OPENSSL",
      "githublink": null,
      "projetlink": null,
      "related_images": [],
      "average_score": 3.0
  },
  {
      "id": 14,
      "nom": "Mise en œuvre de Dual Wan",
      "description": "...",
      "techno": "PFSense",
      "githublink": null,
      "projetlink": null,
      "related_images": [
          {
              "id": 26,
              "projet": 14,
              "image": dualwan          }
      ],
      "average_score": 2.0
  },
  {
      "id": 2,
      "nom": "Landing page de la gestion de formation",
      "description": "...",
      "techno": "Reactjs et Laravel API",
      "githublink": "https://github.com/JOUDASHY/FORMATION_FRONTEND_FRONTOFFICE",
      "projetlink": "https://formation-sxpq.onrender.com",
      "related_images": [
          {
              "id": 18,
              "projet": 2,
              "image": app_landing          },
          {
              "id": 19,
              "projet": 2,
              "image": app_inscription          }
      ],
      "average_score": 4.0
  },
  {
      "id": 16,
      "nom": "Cluster de serveur ISCSI",
      "description": "..",
      "techno": "Os windows serveur 2019",
      "githublink": null,
      "projetlink": null,
      "related_images": [
          {
              "id": 8,
              "projet": 16,
              "image": Linuxs_failover          },
          {
              "id": 9,
              "projet": 16,
              "image": iscsi,       },
          {
              "id": 10,
              "projet": 16,
              "image": ISCSITClust_7          }
      ],
      "average_score": 4.0
  },
  {
      "id": 1,
      "nom": "TELEPHONIE IP",
      "description": "projet VOIP avec IVR sur Asterisk consiste à mettre en place un système interactif permettant aux utilisateurs d'accéder à des informations vocales automatisées via un serveur téléphonique.",
      "techno": "Asterisk sous linux",
      "githublink": null,
      "projetlink": null,
      "related_images": [
          {
              "id": 1,
              "projet": 1,
              "image": tel_ip
          }
      ],
      "average_score": 4.0
  },
  {
      "id": 15,
      "nom": "Mise en place de serveur Messagerie (Mail) sous linux",
      "description": "Il consiste à déployer un serveur de messagerie sous Linux en intégrant Postfix, Dovecot, Roundcube, MySQL et Iptables pour assurer l'envoi, la réception, la gestion et la sécurité des emails.",
      "techno": "Postfix, Dovecot, Roundcube, MySQL, Iptable",
      "githublink": null,
      "projetlink": null,
      "related_images": [
          {
              "id": 5,
              "projet": 15,
              "image": blob_55c472fb63
          },
          {
              "id": 6,
              "projet": 15,
              "image": web_cloud
          },
          {
              "id": 7,
              "projet": 15,
              "image": roundcube_login
          }
      ],
      "average_score": 4.0
  },
  {
      "id": 3,
      "nom": "CHAT MESSENGER",
      "description": "Il consiste à développer une application de messagerie instantanée en temps réel en utilisant ReactJS pour le frontend, Laravel API pour le backend et Socket.io avec Node.js pour la communication en temps réel.",
      "techno": "ReactJS ,Laravel API et socket NodeJS",
      "githublink": null,
      "projetlink": null,
      "related_images": [
          {
              "id": 12,
              "projet": 3,
              "image": app_message
          }
      ],
      "average_score": 5.0
  },
  {
      "id": 8,
      "nom": "Mise en place de serveur ADDS sous Windows Server avec GPO",
      "description": "Il consiste à déployer un serveur Active Directory Domain Services (ADDS) sous Windows Server avec des stratégies de groupe (GPO) pour la gestion centralisée des utilisateurs et des ressources.",
      "techno": "L'os est Windows server 2019",
      "githublink": null,
      "projetlink": null,
      "related_images": [
          {
              "id": 25,
              "projet": 8,
              "image":adds
          }
      ],
      "average_score": 3.0
  }
]  ;setProjects(data);
  };
  useEffect(() => {
    // Récupérer les données de l'API


    fetchProjects();
  }, []);

  const handleRatingSubmit = async (projectId) => {
    if (!selectedScore[projectId]) {
      Swal.fire({
        icon: 'warning',
        title: 'Avertissement',
        text: 'Veuillez sélectionner une note avant de soumettre.',
      });
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/rating/`, {
        project_id: projectId,
        score: selectedScore[projectId],
      });

      Swal.fire({
        icon: 'success',
        title: 'Succès',
        text: 'Votre note a été enregistrée !',
      });

      setSelectedScore({ ...selectedScore, [projectId]: null }); // Réinitialiser la note
      fetchProjects(); // Récupérer à nouveau les projets pour mettre à jour l'affichage
    } catch (error) {
      console.error("Erreur lors de l'envoi de la note :", error);

      // Vérification si l'erreur est liée à un projet déjà noté
      if (error.response && error.response.status === 400) {
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: error.response.data.message || "Impossible d'enregistrer votre note.",
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: "Impossible d'enregistrer votre note.",
        });
      }
    }
    setLoading(false);
  };
  

  const renderStars = (averageScore, editable, projectId) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const color = i <= averageScore ? "#f68c09" : "gray"; // Couleur en fonction du score
      stars.push(
        <i
          key={i}
          className="fas fa-star"
          style={{ cursor: editable ? "pointer" : "default", color: color }}
          onClick={
            editable
              ? () => setSelectedScore({ ...selectedScore, [projectId]: i })
              : undefined
          }
        ></i>
      );
    }
    return stars;
  };

  return (
    <div>
    {/* Navbar */}
 

    <section className="work" id="projects">
      <h2 className="heading">
        <i className="fas fa-laptop-code"></i> Projects <span>Made</span>
      </h2>
      <div className="box-container">
  {projects.map((project) => (
    <div className="box tilt" key={project.id}>
      <div className="image-container">
      <img
  src={
    project.related_images.length > 0
      ? project.related_images[0].image
      : projet
  }
  alt={project.nom}
  style={{
    width: "100%", // Largeur fixe
    height: "300px", // Hauteur fixe
    objectFit: "cover", // Pour adapter l'image sans déformation
    borderRadius: "8px", // Facultatif, pour des coins arrondis
  }}
/>

        {project.related_images.length > 1 && (
          <span className="image-indicator">
            +{project.related_images.length - 1} images
          </span>
        )}
      </div>
      <div className="content">
        <div className="tag ">
          <h3>{project.nom}</h3>
        </div>
        <div className="desc">
          <p>
          
            {project.average_score ? (
              <>
                {renderStars(project.average_score, false, project.id)} (
                {project.average_score.toFixed(1)}/5)
              </>
            ) : (
              "Pas encore noté"
            )}
          </p>
          <p>
            <strong>Technologies:</strong> {project.techno}
          </p>

          <div className="rating">
            <p><strong>Donnez une note :</strong></p>
            <div>{renderStars(selectedScore[project.id] || 0, true, project.id)}</div>
            <button
              className="btn btn-primary mt-2"
              onClick={() => handleRatingSubmit(project.id)}
              disabled={loading}
            >
              {loading ? "En cours..." : "Noter"}
            </button>
          </div>

          <div className="btns">
          {project.projetlink && (
  <a href={project.projetlink} className="btn" target="_blank" rel="noopener noreferrer">
    <i className="fas fa-eye"></i> View
  </a>
)}

          
            <button
              className="btn btn-secondary"
              onClick={() => openModal(project.related_images)}
            >
              <i className="fas fa-images"></i> toutes
            </button>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>


      <div className="backbtn">
        <NavLink to="/Home" className="btn">
          <i className="fas fa-arrow-left"></i>
          <span>Back to Home</span>
        </NavLink>
      </div>

      {/* Modale pour afficher les images */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Voir toutes les images"
        overlayClassName="modal-overlay"
        className="customModal"
      >
        <div className="modal-header">
          <h4 className="modal-title">
            <i className="fas fa-images" style={{ marginRight: "8px" }}></i> Toutes les images
          </h4>
          <button className="close-btn" onClick={closeModal}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          {selectedImages.length > 0 ? (
           <div className="images-grid">
           {selectedImages.map((image, index) => (
             <img
               key={index}
               src={image.image}
               alt={`Image ${index + 1}`}
               className="modal-image"
               onClick={() => setFullScreenImage(image.image)} // Affiche l'image en plein écran
             />
           ))}
         </div>
         
         
          ) : (
            <p>Aucune image disponible.</p>
          )}
          {fullScreenImage && (
  <Modal
    isOpen={true}
    onRequestClose={() => setFullScreenImage(null)} // Fermer le plein écran
    contentLabel="Image en plein écran"
    overlayClassName="modal-overlay"
    className="fullscreen-modal"
  >
    <div className="fullscreen-container">
      <img src={fullScreenImage} alt="Plein écran" className="fullscreen-image" />
      <button className="close-btn fullscreen-close" onClick={() => setFullScreenImage(null)}>
        &times;
      </button>
    </div>
  </Modal>
)}

        </div>
      </Modal>
    </section>
    {/* Scroll Top Button */}
  <a href="#home" className="fas fa-angle-up" id="scroll-top"></a>
  </div>
  );
};

export default Projects;
