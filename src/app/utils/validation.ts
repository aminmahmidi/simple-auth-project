export const validatePhoneNumber = (phone: string): string => {
  if (!phone) {
    return 'Phone number is required';
  }
  
  const iranianPhoneRegex = /^(09)([0-9]{9})$/;
  if (!iranianPhoneRegex.test(phone)) {
    return 'Please enter a valid Iranian phone number (e.g., 09123456789)';
  }
  
  return '';
};