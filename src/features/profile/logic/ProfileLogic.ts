export const formatPhoneNumber = (phone: string) => {
  // Format the phone number if needed, for example:
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
};
