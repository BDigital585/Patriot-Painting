/**
 * Validates an email address.
 * @param email - The email address to validate
 * @returns True if the email is valid, false otherwise
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

/**
 * Validates that a string is not empty.
 * @param value - The string to validate
 * @returns True if the string is not empty, false otherwise
 */
export function validateRequired(value: string): boolean {
  return value.trim() !== '';
}

/**
 * Validates the minimum length of a string.
 * @param value - The string to validate
 * @param minLength - The minimum length required
 * @returns True if the string meets the minimum length, false otherwise
 */
export function validateMinLength(value: string, minLength: number): boolean {
  return value.trim().length >= minLength;
}

/**
 * Validates the maximum length of a string.
 * @param value - The string to validate
 * @param maxLength - The maximum length allowed
 * @returns True if the string doesn't exceed the maximum length, false otherwise
 */
export function validateMaxLength(value: string, maxLength: number): boolean {
  return value.trim().length <= maxLength;
}
