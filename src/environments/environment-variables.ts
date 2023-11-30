import { Environment } from 'src/app/interfaces/environment';

const baseUrl = 'https://localhost:7204/';
const apiUrl = `${baseUrl}api/package`;

export const environmentVariables: Environment = {
  baseUrl,
  apiUrl,
};
