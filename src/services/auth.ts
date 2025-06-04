import axios from 'axios';

const API_BASE = 'http://localhost:3000';

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_BASE}/user/login`, {
      email,
      password,
    });
    return response.data; // contains accessToken, refreshToken
  } catch (error: any) {
    throw error.response?.data || { message: 'Login failed' };
  }
};
