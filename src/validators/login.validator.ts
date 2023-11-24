import { ValidateStatus } from '../@types';

export function loginValidate(username: string, password: string): ValidateStatus {
  let isValid = true;
  let message = '';

  if (!username) {
    isValid = false;
    message += 'No username\n';
  }

  if (!password) {
    isValid = false;
    message += 'No pasword\n';
  }

  // add other conditions for validation

  return { isValid, message };
}
