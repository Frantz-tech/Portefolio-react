import ActemiumProject from '../../assets/actemium project.png';
import GenshinProject from '../../assets/genshinProject.jpg';
import TekkenProject from '../../assets/tekkenProject.PNG';
import WeatherApp from '../../assets/weatherApp.png';
import '../../styles/projects.css';

const projectData = [
  {
    id: 1,
    title: 'Actemium Devis Application',
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
    id: 4,
    title: 'Projet Genshin',
    size: 'large',
    img: GenshinProject,
    alt: "application sur l'histoire de Genshin",
  },
];

function Projects() {
  return (
    <>
      <section className="projects">
        <h2>My Projects</h2>
        <div className="container-projects">
          {projectData.map(project => (
            <div key={project.id} className={`project-card ${project.size}`}>
              <img src={project.img} alt={project.alt} />
              <p className="card-title"> {project.title} </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
