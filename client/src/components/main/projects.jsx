import ActemiumProject from '../../assets/actemiumProject.png';
import GenshinProject from '../../assets/genshinProject.png';
import TekkenProject from '../../assets/tekkenProject.png';
import WeatherApp from '../../assets/weatherApp.png';
import '../../styles/projects.css';

const projectData = [
  {
    id: 1,
    title: 'Actemium - Application de Gestion des Devis',
    size: 'large',
    img: ActemiumProject,
    alt: 'application de devis actemium',
  },
  {
    id: 2,
    title: 'Tekken Project',
    size: 'medium',
    img: TekkenProject,
    alt: 'application tekken',
  },
  {
    id: 3,
    title: 'Weather App',
    size: 'small',
    img: WeatherApp,
    alt: 'application météo',
  },
  {
    id: 5,
    title: 'Projet Genshin',
    size: 'medium',
    img: GenshinProject,
    alt: "application sur l'histoire de Genshin",
  },
  {
    id: 4,
    title: 'Weather App',
    size: 'small',
    img: WeatherApp,
    alt: 'application météo',
  },
];

function Projects() {
  return (
    <>
      <section className="projects">
        <h2>My Projects</h2>
        <div className="container-projects">
          {projectData.map(project => (
            <div key={project.id} className={`project-card  ${project.size}`}>
              <div className="imageContainer fixHover">
                <img src={project.img} alt={project.alt} />
              </div>
              <p className="card-title"> {project.title} </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
