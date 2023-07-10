export type UserResponse = {
  email: string;
  name: string;
};

export type News = {
  title: string;
  source: string;
  category: string;
  author: string;
  desc: string;
  url: string;
  image: string;
  date: string;
};
export type NewsResponse = {
  page: number;
  data: [] | News[];
};
export type NewsParams = {
  page: number;
};
