import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import netfliximage from '../../Assets/React-App-netflix-clone.png'
import charlespizza from '../../Assets/Charlestown-Pizza.png'
import todolist from '../../Assets/todolist.png'

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={netfliximage}
                isBlog={false}
                title="Netflix-Clone"
                description="This project is a simplified front-end clone of Netflix. It was created with React js. It uses TMDB (The Movie Data Base ) API and uses the Axios tool. Users can click movie images with embedded YouTube trailers or related videos about the movie."
                ghLink="https://react-rahul-netflix-clone.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={charlespizza}
                isBlog={false}
                title="Charlestown Pizza"
                description="Charlestown pizza is a static website completely build with bootstrap with fully responsive."
                ghLink="https://rahulvijay81.github.io/Pizzastore-bootstrap/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={todolist}
                isBlog={false}
                title="To Do List"
                description=" To-Do App that build will allow a user to add a task to a list of to-do items. Once the task is added, the user will be able to delete it as completed once it has done."
                ghLink="https://todolist-rahul81.netlify.app/"

              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist