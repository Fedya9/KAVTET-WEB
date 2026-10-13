export type Partner = {
  userId: string;
  displayName: string | null;
  isActive: boolean;
};

export type AuthUser = {
  userId: string;
  email: string | undefined;
};
