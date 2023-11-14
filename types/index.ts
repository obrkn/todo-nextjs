export type AuthFrom = {
  emial: string;
  password: string;
};
export type EditedTask = {
  id: number;
  title: string;
  description?: string | null;
};
