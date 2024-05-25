import { decodeToken } from '../utils/JwtDecode';
import users from '../users.json';

export function authenticateUser(username, password) {
  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    throw new Error('Credenciales incorrectas. Inténtalo de nuevo.');
  }

  // TODO - Mock token
  const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlZHVhcmRvLm1lbmRvemEuMjg4QGdtYWlsLmNvbSIsInVzZXJJZCI6IjEiLCJwcm9jZXNzb3JJZCI6IjEiLCJyb2xlIjoiT3BlcmF0b3IiLCJpYXQiOjE3MTYzMjkzOTIwNzgsImV4cCI6MTcxNjMzMjk5Mn0.wA9kbgQfDUQayPXeZ21bQ6jq45FugEAYJ2X4HstwgoI';
  return decodeToken(token);
}