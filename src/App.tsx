import "./App.css";
import { useRoutes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ResumePage from "./pages/resume/ResumePage";
import ProjectPage from "./pages/project/ProjectPage";
import ContactPage from "./pages/contact/ContactPage";
import { setUser } from "./actions/userActions";
import UserApi from "./apis/UserApi";
import WorkExperiencesApi from "./apis/WorkExperiencesApi";
import EducationsApi from "./apis/EducationsApi";
import SkillsApi from "./apis/SkillsApi";
import { Education, ErrorResponse, UserSkill, WorkExperience } from "./type";
import { setWorkExperiences } from "./actions/workExperiencesActions copy";
import { setEducations } from "./actions/educationsActions";
import { setSkills } from "./actions/skillsActions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import ProjectsApi from "./apis/ProjectsApi";
import { setProjects } from "./actions/projectsActions";
import handleError from "./services/HandleError";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [user, workExperiences, educations, skills, projects] = await Promise.all([
          UserApi.getUserInfo(),
          WorkExperiencesApi.getByUserId(),
          EducationsApi.getByUserId(),
          SkillsApi.getByUserId(),
          ProjectsApi.getByUserId(),
        ]);

        dispatch(setUser(user.data));

        const userWorkExperiences = workExperiences.data.docs
          .sort(
            (a: WorkExperience, b: WorkExperience) =>
              new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
          );
        dispatch(setWorkExperiences(userWorkExperiences));

        const userEducations = educations.data.docs
          .sort(
            (a: Education, b: Education) =>
              new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
          );
        dispatch(setEducations(userEducations));

        const userSkills = skills.data.docs.sort(
          (a: UserSkill, b: UserSkill) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
        dispatch(setSkills(userSkills));

        const userProjects = projects.data.docs;
        dispatch(setProjects(userProjects));
      } catch (error) {
        handleError.showError(error as ErrorResponse);
      }
    };

    fetchAllData();
  }, [dispatch]);

  const router = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/resume",
      element: <ResumePage />,
    },
    {
      path: "/project",
      element: <ProjectPage />,
    },
    {
      path: "/contact",
      element: <ContactPage />,
    },
  ]);

  return router;
}

export default App;
