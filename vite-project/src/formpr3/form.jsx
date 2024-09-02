const LoginForm = ({ onSubmitClick }) => {
  const handelSubmit = (event) => {
    //   отримання event форми
    event.preventDefault();
    //     // присвоєння form введенних значень
    const form = event.target;
    //     // діставання елементів name з форми
      const { login, password } = form.elements;
    // //   console.log("form", event.target);
    //     // console.log("login:", login, "password:", password);
    //     // вивід введениих значень форми
      //     console.log("login:", login.value, "password:", password.value);
      onSubmitClick(
          {
            login: login.value,
            password: password.value   
          }
      )
      form.reset()
  };
  return (
    <form onSubmit={handelSubmit}>
      <input type="text" name="login" />
      <input type="password" name="password" />
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginForm;
