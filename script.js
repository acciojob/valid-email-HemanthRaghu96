function validEmail(str) {
  if (!str) return false;

 
  const regex = /^[A-Za-z0-9]+([._-]?[A-Za-z0-9]+)*@[A-Za-z0-9]+(-?[A-Za-z0-9]+)*(\.[A-Za-z]{2,})+$/;

  return regex.test(str);
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
