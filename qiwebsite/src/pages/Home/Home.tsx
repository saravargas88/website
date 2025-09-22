
import { Container, Row, Col, Image } from "react-bootstrap";

export default function Home() {
  return (
     <Container fluid className="my-5">
      <Row className="align-items-center justify-content-center">
        
        {/* Headshot */}
        <Col xs={12} md={4} className="text-center mb-4 mb-md-0">
          <Image 
            src="/headshot.jpg" 
            thumbnail
            fluid 
            style={{ maxWidth: "250px", border: "4px solid #f9f9f9ff" }}
            alt="Qi Liu"
          />


          
        </Col>
        
        {/* Bio */}
        <Col xs={12} md={6} className="text-center text-md-start">
          <h1 className="fw-bold">Qi Liu </h1>
          <p className="lead">
            First-year PhD Student at NYU Courant Institute of Mathematical Sciences 
          </p>

          <p>
           I'm a first year student in the <a href=  "https://caos.cims.nyu.edu/dynamic/phd-program/overview/"> PhD in Atmosphere Ocean Science and Mathematics</a> program at NYU Courant Institute of Mathematical Sciences, where I am 
           advised by  <a href= "https://cims.nyu.edu/~bruna/"> Joan Bruna </a>  and <a href= "https://zanna-researchteam.github.io/author/laure-zanna/">Laure Zanna</a>. 
          </p>

          <p>
              My research interests lie in PDE's and machine learning for climate sciences.  I am part of the <a href= "https://m2lines.github.io/" > M2Lines Project</a>. 
          </p>
        </Col>

      </Row>


      
    </Container>
  );
}
