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

interface AvatarSize {
  width: number;
  height: number;
  mimeType: string;
  filesize: number;
  filename: string;
  url: string;
}

interface Avatar {
  id: string;
  altText: string;
  filename: string;
  mimeType: string;
  filesize: number;
  width: number;
  height: number;
  focalX: number;
  focalY: number;
  sizes: {
    small: AvatarSize;
    medium: AvatarSize;
    large: AvatarSize;
  };
  createdAt: string;
  updatedAt: string;
  url: string;
}

export interface User {
  id: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  address: string;
  apiKey: string;
  avatar: Avatar;
  enableAPIKey: boolean;
  firstName: string;
  lastName: string;
  github: string;
  linkedin: string;
  summary: string;
  telephone: string;
  loginAttempts: number;
}
