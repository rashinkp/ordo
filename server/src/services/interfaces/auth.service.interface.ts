// src/services/interfaces/IAuthService.ts
export interface IAuthService {
  registerUser(userData: any): Promise<any>;
  loginUser(credentials: any): Promise<any>;
}
