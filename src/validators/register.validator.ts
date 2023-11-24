import { ValidateStatus } from '../@types';

export function registerValidate(email: string, username: string, password: string): ValidateStatus {
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

  if (!email) {
    isValid = false;
    message += 'No email\n';
  }

  // add other conditions for validation

  return { isValid, message };
}
