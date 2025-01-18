export interface ErrorResponse {
  response: {
    status: number;
    data: {
      errors: ErrorMessage[];
    };
  };
}

interface ErrorMessage {
  message: string;
}

interface MediaSize {
  width: number;
  height: number;
  mimeType: string;
  filesize: number;
  filename: string;
  url: string;
}

interface Cloudinary {
  public_id: string;
  original_filename: string;
  format: string;
  secure_url: string;
  resource_type: string;
}

interface Media extends BaseFile {
  id: string;
  width: number;
  height: number;
  focalX: number;
  focalY: number;
  sizes: {
    small: AvatarSize;
    medium: AvatarSize;
    large: AvatarSize;
  };
}

interface Social {
  id: string;
  platform: string;
  url: string;
  icon: Media;
}

interface BaseFile {
  altText: string;
  cloudinary: Cloudinary;
  filename: string;
  mimeType: string;
  filesize: number;
  createdAt: string;
  updatedAt: string;
}

interface File extends BaseFile {
  id: string;
}

interface About {
  title: string;
  content: string;
  summary: string;
  curriculumVitae: File;
}

export interface User {
  id: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  address: string;
  apiKey: string;
  avatar: Media;
  enableAPIKey: boolean;
  firstName: string;
  lastName: string;
  socials: Social[];
  about: About;
  telephone: string;
  loginAttempts: number;
}

interface DescriptionItem {
  text: string;
}

interface DescriptionNode {
  children: DescriptionItem[];
  type: string;
}

interface Description {
  children: DescriptionNode[];
  type: string;
}

export interface WorkExperience {
  id: string;
  person: User;
  companyName: string;
  jobTitle: string;
  location: string;
  createdAt: string;
  updatedAt: string;
  description: Description[];
  endDate: string;
  startDate: string;
}

export interface Education {
  id: string;
  person: User;
  institutionName: string;
  degree: string;
  fieldOfStudy: string;
  createdAt: string;
  updatedAt: string;
  description: Description[];
  endDate: string;
  startDate: string;
}

export interface Skill {
  id: string;
  name: string;
  icon: Media;
}

export interface UserSkill {
  id: string;
  person: User;
  technologyName: string;
  technicalIcon: Media;
  skills: Skill[];
  createdAt: string;
  updatedAt: string;
}

export interface Project {
  id: string;
  person: User;
  projectName: string;
  startDate: string;
  endDate: string;
  link: string;
  description: Description[];
  image: Media;
  createdAt: string;
  updatedAt: string;
}

export interface ContactForm {
  person: string;
  fullName: string;
  email: string;
  subject: string;
  message: string;
}
