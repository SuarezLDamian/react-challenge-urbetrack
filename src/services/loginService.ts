const isValidLogin = (username: string, password: string) => {
      // Check if the username meets the criteria: name in lower case without numbers or special characters.
      const validUser = /^[a-z]+$/.test(username);
      
      // Verify if the password meets the criteria: format "123User".
      const validPassword = /^\d{3}[A-Z][a-z]+$/.test(password);

      // Return true if both username and password are valid, otherwise return false.
      return validUser && validPassword;
}

export default isValidLogin;