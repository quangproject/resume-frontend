import Layout from "../../layouts";

const ResumePage = () => {
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
              <section>
                <div className="d-flex align-items-center justify-content-between mb-4 gap-3 flex-column flex-md-row">
                  <h2 className="text-primary fw-bolder mb-0">Experience</h2>

                  <a
                    className="btn btn-primary px-4 py-3"
                    href="assets/resume/Resume-Quang-Nguyen-Duy.pdf"
                    target="_blank"
                  >
                    <div className="d-inline-block bi bi-download me-2"></div>
                    Download Resume
                  </a>
                </div>

                <div className="card shadow border-0 rounded-4 mb-5">
                  <div className="card-body p-3 p-md-5">
                    <div className="row align-items-center gx-5">
                      <div className="col text-center text-lg-start mb-4 mb-lg-0">
                        <div className="bg-light p-4 rounded-4">
                          <div className="text-primary fw-bolder mb-2">
                            07/2023 - 10/2023
                          </div>
                          <div className="small fw-bolder">
                            Software Developer
                          </div>
                          <div className="small text-muted">
                            Agilino Company
                          </div>
                          <div className="small text-muted">
                            Ninh Kieu, Can Tho city
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <div>
                          <ul>
                            <li>Develop and maintain web applications.</li>
                            <li>
                              Build quality source code, maximizing scalability.
                            </li>
                            <li>Develop and deploy new features.</li>
                            <li>
                              Writing testing and bug fixes to ensure source
                              code quality.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-secondary fw-bolder mb-4">Education</h2>

                <div className="card shadow border-0 rounded-4 mb-5">
                  <div className="card-body p-3 p-md-5">
                    <div className="row align-items-center gx-5">
                      <div className="col text-center text-lg-start mb-4 mb-lg-0">
                        <div className="bg-light p-4 rounded-4">
                          <div className="text-secondary fw-bolder mb-2">
                            08/2020 - Present
                          </div>
                          <div className="mb-2">
                            <div className="small fw-bolder">
                              University of Greenwich
                            </div>
                            <div className="small text-muted">
                              Ninh Kieu, Can Tho
                            </div>
                          </div>
                          <div className="fst-italic">
                            <div className="small text-muted">Master's</div>
                            <div className="small text-muted">
                              Web Development
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <div>
                          A total of three years of intensive study in
                          programming, application development, project
                          management, and information technology principles. In
                          particular, we have focused on improving skills in
                          design analysis, database knowledge, and logical
                          thinking.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <div className="pb-5"></div>

              <section>
                <div className="card shadow border-0 rounded-4 mb-5">
                  <div className="card-body p-5">
                    <div className="mb-5">
                      <div className="d-flex align-items-center mb-4">
                        <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                          <i className="bi bi-tools"></i>
                        </div>
                        <h3 className="fw-bolder mb-0">
                          <span className="text-gradient d-inline">
                            Frameworks
                          </span>
                        </h3>
                      </div>
                      <div className="row row-cols-1 row-cols-md-3 mb-4">
                        <div className="col mb-4 mb-md-0">
                          <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                            Spring Boot
                          </div>
                        </div>
                        <div className="col mb-4 mb-md-0">
                          <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                            ASP.NET Core
                          </div>
                        </div>
                        <div className="col">
                          <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                            Laravel
                          </div>
                        </div>
                      </div>
                      <div className="row row-cols-1 row-cols-md-3">
                        <div className="col mb-4 mb-md-0">
                          <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                            Express.js
                          </div>
                        </div>
                        <div className="col mb-4 mb-md-0">
                          <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                            Angular
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-5">
                      <div className="d-flex align-items-center mb-4">
                        <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                          <i className="bi bi-code-slash"></i>
                        </div>
                        <h3 className="fw-bolder mb-0">
                          <span className="text-gradient d-inline">
                            Languages
                          </span>
                        </h3>
                      </div>
                      <div className="row row-cols-1 row-cols-md-3 mb-4">
                        <div className="col mb-4 mb-md-0">
                          <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                            HTML
                          </div>
                        </div>
                        <div className="col mb-4 mb-md-0">
                          <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                            CSS
                          </div>
                        </div>
                        <div className="col">
                          <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                            JavaScript
                          </div>
                        </div>
                      </div>
                      <div className="row row-cols-1 row-cols-md-3">
                        <div className="col mb-4 mb-md-0">
                          <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                            Java
                          </div>
                        </div>
                        <div className="col mb-4 mb-md-0">
                          <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                            C#
                          </div>
                        </div>
                        <div className="col">
                          <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                            PHP
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-5">
                      <div className="d-flex align-items-center mb-4">
                        <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                          <i className="bi bi-database-fill"></i>
                        </div>
                        <h3 className="fw-bolder mb-0">
                          <span className="text-gradient d-inline">
                            Databases
                          </span>
                        </h3>
                      </div>
                      <div className="row row-cols-1 row-cols-md-3 mb-4">
                        <div className="col mb-4 mb-md-0">
                          <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                            PostgreSQL
                          </div>
                        </div>
                        <div className="col mb-4 mb-md-0">
                          <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                            SQL Server
                          </div>
                        </div>
                        <div className="col">
                          <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                            MySQL
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-0">
                      <div className="d-flex align-items-center mb-4">
                        <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                          <i className="bi bi-plus-lg"></i>
                        </div>
                        <h3 className="fw-bolder mb-0">
                          <span className="text-gradient d-inline">Other</span>
                        </h3>
                      </div>
                      <div className="row row-cols-1 row-cols-md-3 mb-4">
                        <div className="col mb-4 mb-md-0">
                          <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                            Swagger
                          </div>
                        </div>
                        <div className="col mb-4 mb-md-0">
                          <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                            Scrum/Agile
                          </div>
                        </div>
                        <div className="col">
                          <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                            SOLID principles
                          </div>
                        </div>
                      </div>
                      <div className="row row-cols-1 row-cols-md-3 mb-4">
                        <div className="col mb-4 mb-md-0">
                          <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                            Docker
                          </div>
                        </div>
                        <div className="col mb-4 mb-md-0">
                          <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                            Git
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default ResumePage;
