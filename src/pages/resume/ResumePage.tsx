import { useEffect, useState } from "react";
import UseTop from "../../hooks/UseTop";
import Layout from "../../layouts";
import WorkExperienceApi from "../../apis/WorkExperienceApi";
import handleError from "../../services/HandleError";
import {
  Education,
  ErrorResponse,
  User,
  UserSkill,
  WorkExperience,
} from "../../type";
import { formatMonthYear, getFileFromCms } from "../../utils";
import EducationApi from "../../apis/EducationApi";
import Serialize from "../../components/Serialize";
import SkillApi from "../../apis/SkillApi";
import UserApi from "../../apis/UserApi";
import { Card, Placeholder } from "react-bootstrap";

const ResumePage = () => {
  UseTop();
  const [user, setUser] = useState<User | undefined>();
  const [workExperiences, setWorkExperiences] = useState<WorkExperience[]>([]);
  const [educations, setEducations] = useState<Education[]>([]);
  const [skills, setSkills] = useState<UserSkill[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [user, workExperiences, educations, skills] = await Promise.all([
          UserApi.getById(import.meta.env.VITE_USER_ID),
          WorkExperienceApi.getAll(),
          EducationApi.getAll(),
          SkillApi.getAll(),
        ]);

        setUser(user.data);

        const userWorkExperiences = workExperiences.data.docs
          .filter(
            (workExperience: WorkExperience) =>
              workExperience.person.id === import.meta.env.VITE_USER_ID
          )
          .sort(
            (a: WorkExperience, b: WorkExperience) =>
              new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
          );
        setWorkExperiences(userWorkExperiences);

        const userEducations = educations.data.docs
          .filter(
            (education: Education) =>
              education.person.id === import.meta.env.VITE_USER_ID
          )
          .sort(
            (a: Education, b: Education) =>
              new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
          );
        setEducations(userEducations);

        const userSkills = skills.data.docs.filter(
          (skill: UserSkill) => skill.person.id === import.meta.env.VITE_USER_ID
        );
        setSkills(
          userSkills.sort(
            (a: UserSkill, b: UserSkill) =>
              new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          )
        );
      } catch (error) {
        console.log("🚀 ~ fetchData ~ error:", error);
        handleError.showError(error as ErrorResponse);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <main>
        <div className="container px-5 my-5">
          <div className="text-center mb-5">
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
                    href={getFileFromCms(
                      user?.about?.curriculumVitae?.original_doc?.url
                    )}
                    target="_blank"
                  >
                    <div className="d-inline-block bi bi-download me-2"></div>
                    Download Resume
                  </a>
                </div>

                {workExperiences.length > 0 ? (
                  workExperiences.map((workExperience: WorkExperience) => (
                    <Card
                      className="shadow border-0 rounded-4 mb-4"
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
                    <div
                      className="card shadow border-0 rounded-4 mb-5"
                      key={education.id}
                    >
                      <div className="card-body p-3 p-md-5">
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
                              <Serialize>{education?.description}</Serialize>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
                        </Card.Body>
                      </Card>
                    ))}
                  </>
                )}
              </section>

              <section>
                <h2 className="text-secondary fw-bolder mb-3">Skills</h2>

                <Card className="shadow border-0 rounded-4 mb-5">
                  <Card.Body className="card-body p-5">
                    {skills.length > 0 ? (
                      skills.map((userSkill: UserSkill) => (
                        <div className="mb-5" key={userSkill.id}>
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
                              <div className="col mb-4" key={skill.id}>
                                <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
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
