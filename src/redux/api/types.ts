export type UserResponse = {
  email: string;
};

export type News = {
  title: string;
  source: string;
  category: string;
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
