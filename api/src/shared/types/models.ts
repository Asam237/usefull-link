export type CreateUserInput = {
  fullname: string;
  username: string;
  email: string;
  password: string;
  userType: string;
  avatar: string;
  createdAt: any;
  link: any[];
};

export type CreateLinkInput = {
  name: string;
  description: string;
  url: string;
  report: boolean;
  status: string;
  confidentiality: string;
  createdAt: any;
  user: any;
};

export type LoginType = {
  username: string;
  password: string;
};
