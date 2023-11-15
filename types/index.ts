export type AuthFrom = {
  email: string;
  password: string;
};
export type EditedTask = {
  id: number;
  title: string;
  description?: string | null;
};
