import UseTop from "../../hooks/UseTop";
import Layout from "../../layouts";

const ProjectPage = () => {
  UseTop();

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

                <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                  <div className="card-body p-0">
                    <div
                      className="d-flex align-items-center flex-column flex-lg-row p-5"
                    >
                      <div>
                        <h2 className="fw-bolder">Surgerate Project</h2>
                        <b>Description: </b>
                        <li>
                          Development of a System for Scoring and Evaluating
                          Veterinary Medicine Surgeon Performance.
                        </li>
                        <b>Technical Used:</b>
                        <li>
                          Technologies: HTML, SCSS, Bootstrap, Angular, Spring
                          Boot, Docker, Keycloak
                        </li>
                        <li>Database: PostgreSQL</li>
                        <li>Programming Languages: TypeScript, Java</li>
                        <li>Testing: JUnit, Mockito</li>
                        <b>My Contribution:</b>
                        <li>
                          Create and enhance APIs related to pet CRUD, and
                          questions after surgery.
                        </li>
                        <li>
                          Integrated Angular for improved interactivity and
                          optimized website performance.
                        </li>
                        <b>Achievements:</b>
                        <li>
                          Have experience working with Spring Boot and Angular,
                          Keycloak
                        </li>
                      </div>
                      <img
                        className="img-fluid ps-0 ps-lg-5 pt-4 pt-lg-0"
                        src="assets/img/projects/surgerate.png"
                        alt="Surgerate Project"
                      />
                    </div>
                  </div>
                </div>

                <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                  <div className="card-body p-0">
                    <div
                      className="d-flex align-items-center flex-column flex-lg-row p-5"
                    >
                      <div>
                        <h2 className="fw-bolder">WatchWorld Project</h2>
                        <b>Description: </b>
                        <li>
                          Design and develop a comprehensive e-commerce website
                          selling wristwatches
                        </li>
                        <b>Technical Used:</b>
                        <li>
                          Technologies: HTML, CSS, Bootstrap, Laravel, Docker
                        </li>
                        <li>Database: MySQL</li>
                        <li>Programming Languages: PHP, JavaScript</li>
                        <b>My Contribution:</b>
                        <li>
                          Integration with Google accounts for login, utilize
                          Laravel’s Eloquent ORM
                        </li>
                        <li>
                          Implemented an email notification for user contact and
                          account confirmation.
                        </li>
                        <li>
                          Integrated PayPal and Stripe payment gateways into the
                          website.
                        </li>
                        <li>
                          Implement RESTful API development and integration.
                        </li>
                        <b>Achievements:</b>
                        <li>Have experience working with Laravel and Docker</li>
                      </div>
                      <img
                        className="img-fluid ps-0 ps-lg-5 pt-4 pt-lg-0"
                        src="assets/img/projects/watchworld.png"
                        alt="WatchWorld Project"
                      />
                    </div>
                  </div>
                </div>

                <div className="card overflow-hidden shadow rounded-4 border-0 mb-5">
                  <div className="card-body p-0">
                    <div
                      className="d-flex align-items-center flex-column flex-lg-row p-5"
                    >
                      <div>
                        <h2 className="fw-bolder">Chatting Web App</h2>
                        <b>Description: </b>
                        <li>
                          Designed and developed a real-time chat application.
                        </li>
                        <b>Technical Used:</b>
                        <li>Technologies: HTML, SCSS, Bootstrap, Express.js</li>
                        <li>Database: PostgreSQL</li>
                        <li>Programming Languages: JavaScript</li>
                        <b>My Contribution:</b>
                        <li>
                          Allows users to make friends, join instant messaging and
                          create chat rooms.
                        </li>
                        <li>
                          Integrated Google Login functionality to streamline the
                          authentication process.
                        </li>
                        <li>
                          Leveraging WebSocket technology, the application enables
                          instant message delivery and real-time updates.
                        </li>
                        <b>Achievements:</b>
                        <li>Have experience working with WebSocket</li>
                      </div>
                      <img
                        className="img-fluid ps-0 ps-lg-5 pt-4 pt-lg-0"
                        src="assets/img/projects/chatapp.png"
                        alt="Chatting Web App"
                      />
                    </div>
                  </div>
                </div>

                <div className="card overflow-hidden shadow rounded-4 border-0">
                  <div className="card-body p-0">
                    <div
                      className="d-flex align-items-center flex-column flex-lg-row p-5"
                    >
                      <div>
                        <h2 className="fw-bolder">BookStore Web App</h2>
                        <b>Description: </b>
                        <li>
                          Design and develop a comprehensive e-commerce website
                          selling books.
                        </li>
                        <b>Technical Used:</b>
                        <li>
                          Technologies: HTML, CSS, Bootstrap, ASP.NET Core (Web
                          API, Identity)
                        </li>
                        <li>Database: SQL Server</li>
                        <li>Programming Languages: C#, JavaScript</li>
                        <b>My Contribution:</b>
                        <li>
                          Led a team of three developers in designing and
                          developing a comprehensive e-commerce website using
                          ASP.NET Core.
                        </li>
                        <li>
                          Design and implementation of the database schema,
                          handled user authentication and authorization using
                          ASP.NET Core Identity.
                        </li>
                        <li>Integrated Google Login for user convenience.</li>
                        <li>
                          Implemented various back-end functionalities using
                          ASP.NET Web API.
                        </li>
                        <b>Achievements:</b>
                        <li>
                          Have experience working with ASP.NET Core and Swagger
                        </li>
                      </div>
                      <img
                        className="img-fluid ps-0 ps-lg-5 pt-4 pt-lg-0"
                        src="assets/img/projects/book.png"
                        alt="BookStore Web App"
                      />
                    </div>
                  </div>
                </div>
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
              <a
                className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder"
                href="contact.html"
              >Contact me</a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default ProjectPage;