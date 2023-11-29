import { Environment } from 'src/app/interfaces/environment';
import { environmentVariables } from './environment-variables';

export const environment: Environment = {
  ...environmentVariables,
};
