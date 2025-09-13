


import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Thermalizer Project",
      description: "Stabilizing autoregressive emulators with diffusion-based thermalization, enabling reliable long-horizon predictions in chaotic spatiotemporal systems.",
      imgSrc: "/public/thumbnails/thermalizerpic.png",   // your own image
      link: "https://arxiv.org/abs/2503.18731"
    },
    {
      title: " Thesis: Factors Driving the Variability of the Southern Hemisphere Baroclinic",
      description: "Analyzing the Southern Hemisphere Baroclinic Annular Mode using reanalysis data and numerical modeling. Identifying its dynamics and evaluating its impacts on regional climate variability.",
      imgSrc: "/public/thumbnails/thesispic.png",
      link: "https://github.com/QiLiu6/UG_thesis/tree/main"
    },
   
    /// Here you can keep adding more projects as needed 
  ];

  return ( 

   
    <Container fluid className="my-5">
       <h1>Projects </h1>
       
      <Row>
        {projects.map((project, index) => (
          <Col md={4} className="mb-4" key={index}>
            <ProjectCard {...project} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}