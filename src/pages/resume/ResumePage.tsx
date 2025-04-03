import UseTop from "../../hooks/UseTop";
import Layout from "../../layouts";
import {
  Education,
  UserSkill,
  WorkExperience,
} from "../../type";
import { formatMonthYear } from "../../utils";
import Serialize from "../../components/Serialize";
import { Card, Image, Placeholder } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const ResumePage = () => {
  UseTop();

  const user = useSelector((state: RootState) => state.user);
  const workExperiences = useSelector((state: RootState) => state.workExperiences);
  const educations = useSelector((state: RootState) => state.educations);
  const skills = useSelector((state: RootState) => state.skills);

  return (
    <Layout>
      <main>
        <div className="container my-3 my-md-5">
          <div className="text-center mb-3 mb-md-5">
            <h1 className="display-5 fw-bolder mb-0">
              <span className="text-gradient d-inline">Resume</span>
            </h1>
          </div>
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-11 col-xl-9 col-xxl-8">
              <section className="mb-5">
                <div className="d-flex align-items-center justify-content-between mb-4 gap-3 flex-column flex-md-row">
                  <h2 className="text-secondary fw-bolder mb-0">Experience</h2>

                  <a
                    className="btn btn-primary px-4 py-3"
                    href={user?.about?.curriculumVitae?.cloudinary?.secure_url ?? "#"}
                    target="_blank"
                  >
                    <div className="d-inline-block bi bi-download me-2"></div>
                    Download Resume
                  </a>
                </div>

                {workExperiences.length > 0 ? (
                  workExperiences.map((workExperience: WorkExperience) => (
                    <Card
                      className="shadow border-0 rounded-4 mb-3 mb-md-4"
                      key={workExperience.id}
                    >
                      <Card.Body className="p-3 p-md-5">
                        <div className="row align-items-center gx-5">
                          <div className="col text-center text-lg-start mb-4 mb-lg-0">
                            <div className="bg-light p-4 rounded-4">
                              <div className="text-secondary fw-bolder mb-2">
                                {formatMonthYear(workExperience.startDate)} -{" "}
                                {workExperience.endDate
                                  ? formatMonthYear(workExperience.endDate)
                                  : "Present"}
                              </div>
                              <div className="small fw-bolder">
                                {workExperience.jobTitle}
                              </div>
                              <div className="small text-muted">
                                {workExperience.companyName}
                              </div>
                              <div className="small text-muted">
                                {workExperience.location}
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-8">
                            <div>
                              <Serialize>
                                {workExperience?.description}
                              </Serialize>
                            </div>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  ))
                ) : (
                  <>
                    {Array.from({ length: 2 }, (_, index) => (
                      <Card className="overflow-hidden shadow rounded-4 border-0 mb-3 mb-md-4" key={index}>
                        <Card.Body>
                          <Placeholder as={Card.Title} animation="glow">
                            <Placeholder xs={6} />
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
              </section>

              <section className="mb-5">
                <h2 className="text-secondary fw-bolder mb-3">Education</h2>

                {educations.length > 0 ? (
                  educations.map((education: Education) => (
                    <Card
                      className="shadow border-0 rounded-4 mb-3 mb-md-4"
                      key={education.id}
                    >
                      <Card.Body className="p-3 p-md-5">
                        <div className="row align-items-center gx-5">
                          <div className="col text-center text-lg-start mb-4 mb-lg-0">
                            <div className="bg-light p-4 rounded-4">
                              <div className="text-secondary fw-bolder mb-2">
                                {formatMonthYear(education.startDate)} -{" "}
                                {education.endDate
                                  ? formatMonthYear(education.endDate)
                                  : "Present"}
                              </div>
                              <div className="mb-2">
                                <div className="small fw-bolder">
                                  {education.institutionName}
                                </div>
                                <div className="small text-muted">
                                  {education.fieldOfStudy}
                                </div>
                              </div>
                              <div className="fst-italic">
                                <div className="small text-muted">
                                  {" "}
                                  {education.degree}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-8">
                            <div>
                              <Serialize>
                                {education?.description}
                              </Serialize>
                            </div>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  ))
                ) : (
                  <>
                    {Array.from({ length: 2 }, (_, index) => (
                      <Card className="overflow-hidden shadow rounded-4 border-0 mb-3 mb-md-4" key={index}>
                        <Card.Body>
                          <Placeholder as={Card.Title} animation="glow">
                            <Placeholder xs={6} />
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
              </section>

              <section>
                <h2 className="text-secondary fw-bolder mb-3">Skills</h2>

                <Card className="shadow border-0 rounded-4 mb-3 mb-md-4">
                  <Card.Body className="p-3 p-md-5">
                    {skills.length > 0 ? (
                      skills.map((userSkill: UserSkill) => (
                        <div className="mb-3 mb-md-5" key={userSkill.id}>
                          <div className="d-flex align-items-center mb-4">
                            <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                              <img
                                src={
                                  userSkill?.technicalIcon.cloudinary
                                    .secure_url || ""
                                }
                                alt={userSkill?.technicalIcon.altText}
                                className="img-fluid"
                              />
                            </div>
                            <h3 className="fw-bolder mb-0">
                              <span className="text-gradient d-inline">
                                {userSkill.technologyName}
                              </span>
                            </h3>
                          </div>
                          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-4">
                            {userSkill.skills.map((skill) => (
                              <div className="col mb-3 mb-md-4" key={skill.id}>
                                <div className="d-flex align-items-center gap-2 bg-light rounded-4 p-3 h-100">
                                  {skill?.icon && (
                                    <Image src={skill.icon.cloudinary
                                      .secure_url || ""} rounded width={30} height={30} />
                                  )}
                                  {skill.name}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))
                    ) : (
                      <>
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
                      </>
                    )}
                  </Card.Body>
                </Card>
              </section>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ResumePage;
