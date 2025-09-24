import { FloatingLabel, Form as BootstrapForm, Spinner } from "react-bootstrap";
import UseTop from "../../hooks/UseTop";
import Layout from "../../layouts";
import { useState } from "react";
import { Formik, Field, Form, ErrorMessage, FormikHelpers, FieldProps } from "formik";
import * as yup from "yup";
import swalService from "../../services/SwalService";
import { SWAL_POSITION } from "../../utils/constant";
import handleError from "../../services/HandleError";
import { ContactForm, ErrorResponse } from "../../type";
import ContactApi from "../../apis/ContactApi";

const ContactPage = () => {
  UseTop();
  const [isLoading, setIsLoading] = useState(false);
  const initialValues: ContactForm = {
    fullName: "",
    email: "",
    subject: "",
    message: "",
  };

  // Yup validation
  const schema = yup.object().shape({
    fullName: yup.string().required("Full name is required"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    subject: yup.string().required("Subject is required"),
    message: yup.string().required("Message is required"),
  });

  const onSubmit = async (
    values: ContactForm,
    { resetForm }: FormikHelpers<ContactForm>
  ) => {
    setIsLoading(true);
    try {
      await ContactApi.save(values);

      swalService.showCustomPosition(
        "Send contact successfully",
        "success",
        SWAL_POSITION.TOP_END
      );

      // Reset form
      resetForm();
    } catch (error) {
      handleError.showError(error as ErrorResponse);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <main>
        <section className="py-3 py-md-5">
          <div className="container">
            <div className="bg-light rounded-4 py-5 px-4 px-md-5">
              <div className="text-center mb-5">
                <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3">
                  <i className="bi bi-envelope"></i>
                </div>
                <h1 className="fw-bolder">Get in touch</h1>
                <p className="lead fw-normal text-muted mb-0">
                  Let's work together!
                </p>
              </div>
              <div className="row gx-5 justify-content-center">
                <div className="col-lg-8 col-xl-6">
                  <Formik
                    validationSchema={schema}
                    onSubmit={onSubmit}
                    initialValues={initialValues}
                  >
                    {({ touched, errors }) => (
                      <Form>
                        <FloatingLabel
                          controlId="floatingFullname"
                          label="Full name"
                          className="mb-3"
                        >
                          <Field
                            as={BootstrapForm.Control}
                            name="fullName"
                            type="text"
                            placeholder="Full name"
                            isInvalid={!!errors.fullName && touched.fullName}
                          />
                          <ErrorMessage
                            name="fullName"
                            component="div"
                            className="invalid-feedback"
                          />
                        </FloatingLabel>

                        <FloatingLabel
                          controlId="floatingEmail"
                          label="Email address"
                          className="mb-3"
                        >
                          <Field
                            as={BootstrapForm.Control}
                            name="email"
                            type="email"
                            placeholder="Email address"
                            isInvalid={!!errors.email && touched.email}
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="invalid-feedback"
                          />
                        </FloatingLabel>

                        <FloatingLabel
                          controlId="floatingSubject"
                          label="Subject"
                          className="mb-3"
                        >
                          <Field
                            as={BootstrapForm.Control}
                            name="subject"
                            type="text"
                            placeholder="Subject"
                            isInvalid={!!errors.subject && touched.subject}
                          />
                          <ErrorMessage
                            name="subject"
                            component="div"
                            className="invalid-feedback"
                          />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingMessage" label="Message" className="mb-3">
                          <Field name="message">
                            {({ field }: FieldProps) => (
                              <BootstrapForm.Control
                                {...field}
                                as="textarea"
                                style={{ height: "150px" }}
                                placeholder="Leave a message here"
                                isInvalid={!!errors.message && touched.message}
                              />
                            )}
                          </Field>
                          <ErrorMessage name="message" component="div" className="invalid-feedback" />
                        </FloatingLabel>

                        <div className="d-grid">
                          <button
                            className="btn btn-primary btn-lg"
                            type="submit"
                          >
                            {isLoading ? (
                              <Spinner animation="border" variant="dark" />
                            ) : (
                              "Submit"
                            )}
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default ContactPage;
