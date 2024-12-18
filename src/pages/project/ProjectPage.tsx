import { useEffect, useState } from "react";
import UseTop from "../../hooks/UseTop";
import Layout from "../../layouts";
import ProjectsApi from "../../apis/ProjectsApi";
import handleError from "../../services/HandleError";
import { ErrorResponse, Project } from "../../type";
import Serialize from "../../components/Serialize";
import { formatMonthYear } from "../../utils";
import { Link } from "react-router-dom";
import { Card, Placeholder } from "react-bootstrap";

const ProjectPage = () => {
  UseTop();

  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projects = await ProjectsApi.getAll();

        const userProjects = projects.data.docs.filter(
          (project: Project) =>
            project.person.id === import.meta.env.VITE_USER_ID
        );

        setProjects(userProjects);
      } catch (error) {
        handleError.showError(error as ErrorResponse);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <main>
        <section className="py-5">
          <div className="container px-5 mb-5">
            <div className="text-center mb-5">
              <h1 className="display-5 fw-bolder mb-0">
                <span className="text-gradient d-inline">Projects</span>
              </h1>
            </div>
            <div className="row gx-5 justify-content-center">
              <div className="col-lg-11 col-xl-9 col-xxl-8">
                {projects.length > 0 ? (
                  projects.map((project: Project) => (
                    <Card className="overflow-hidden shadow rounded-4 border-0 mb-4">
                      <Card.Body className="p-0">
                        <div className="d-flex justify-content-center align-items-center flex-column flex-lg-row p-5">
                          <div className="col-12 col-lg-6">
                            <h2 className="fw-bolder">
                              {project?.projectName}
                            </h2>
                            <p>
                              <em>
                                {formatMonthYear(project?.startDate)} -{" "}
                                {project.endDate
                                  ? formatMonthYear(project.endDate)
                                  : "Present"}
                              </em>
                            </p>
                            <Serialize>{project?.description}</Serialize>
                          </div>
                          <div className="col-12 col-lg-6 text-center">
                            <img
                              className="img-fluid ps-0 ps-lg-5 pt-4 pt-lg-0"
                              src={project?.image.cloudinary.secure_url}
                              alt="Surgerate Project"
                            />
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  ))
                ) : (
                  <>
                    {Array.from({ length: 2 }, () => (
                      <Card className="overflow-hidden shadow rounded-4 border-0 mb-4">
                        <Card.Body>
                          <Placeholder as={Card.Title} animation="glow">
                            <Placeholder xs={6} />
                          </Placeholder>
                          <Placeholder as={Card.Text} animation="glow">
                            <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                            <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                            <Placeholder xs={8} />
                          </Placeholder>
                          <Placeholder as={Card.Text} animation="glow">
                            <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                            <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                            <Placeholder xs={8} />
                          </Placeholder>
                          <Placeholder as={Card.Text} animation="glow">
                            <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                            <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                            <Placeholder xs={8} />
                          </Placeholder>
                        </Card.Body>
                      </Card>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="py-5 bg-gradient-primary-to-secondary text-white">
          <div className="container px-5 my-5">
            <div className="text-center">
              <h2 className="display-4 fw-bolder mb-4">
                Let's build something together
              </h2>
              <Link
                className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder"
                to="/contact"
              >
                Contact me
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default ProjectPage;
