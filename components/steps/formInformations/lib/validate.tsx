export const FormValidate = (values: any) => {
  const errors: any = {};

  //handle name errors
  if (!values.name) {
    errors.name = "Name is required";
  }

  //handle email errors
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  //handle phone errors
  if (!values.phone) {
    errors.phone = "Phone is required";
  } else if (!/^237[0-9]{9}$/i.test(values.phone)) {
    errors.phone = "Invalid phone number";
  }

  return errors;
};
