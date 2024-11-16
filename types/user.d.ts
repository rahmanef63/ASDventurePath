export interface User {
  id: string;
  email: string;
  name: string;
  role: "parent" | "therapist" | "admin";
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthCredentials {
  email: string;
  password: string;
} 