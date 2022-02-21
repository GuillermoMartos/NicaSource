import React, { useEffect, useState } from "react";
import "./register.sass";
import axios from "axios";

function Register() {
  var [data, setData] = useState({
    email: "",
    password: "",
    repeatPass: "",
  });

  const [errors, setErrors] = useState({});
  const [habilitado, setHabilitado] = useState(false);

  useEffect(() => {
    setErrors(inputValidate(data));
  }, [data]);

  const inputValidate = (input) => {
    const errors = {};
    const regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (regex.test(data.email) === false) {
      errors.email = "Only e-mail format allowed";
      setHabilitado(false);
    }
    if (!data.password) {
      errors.password = "Password is required!";
      setHabilitado(false);
    }
    if (data.password !== data.repeatPass) {
      errors.repeatPass = "Passwords do not match!";
      setHabilitado(false);
    } else setHabilitado(true);

    return errors;
  };

  function handleChange(e) {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (data.password === data.repeatPass) {
      try {
        await axios({
          method: "POST",
          url: "http://localhost:8000/user/register",
          data: { username: data.email, password: data.password },
        }).then((res) => {
          setData({
            email: "",
            password: "",
            repeatPass: "",
          });
          document.getElementById("move-register").style.marginLeft = "-110%";
        });
      } catch (error) {
        return alert("regisration proccess denied, email already registered");
      }
    }
  }

  function closeRegDiv() {
    document.getElementById("move-register").style.marginLeft = "-110%";
  }

  return (
    <div id="move-register" className="mainContainer">
      <div className="container">
        <button className="close" onClick={() => closeRegDiv()}>
          ⏪❌
        </button>
        <div className="formContainer">
          <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <input
              className="email"
              type="email"
              placeholder="E-mail"
              required
              name="email"
              value={data.email}
              onChange={(e) => handleChange(e)}
            />
            {errors.email && (
              <div className="register__err">
                <strong>{errors.email}</strong>
              </div>
            )}
            <input
              className="password"
              type="password"
              placeholder="Password"
              required
              name="password"
              value={data.password}
              onChange={(e) => handleChange(e)}
            />
            {errors.password && (
              <div className="register__err">
                <strong>{errors.password}</strong>
              </div>
            )}
            <input
              className="repeatPass"
              type="password"
              placeholder="Repeat your Password"
              required
              name="repeatPass"
              value={data.repeatPass}
              onChange={(e) => handleChange(e)}
            />
            {errors.repeatPass && (
              <div className="register__err">
                <strong>{errors.repeatPass}</strong>
              </div>
            )}
            <button
              type="submit"
              disabled={!habilitado}
              onClick={(e) => handleSubmit(e)}
              className="creator_btn"
            >
              SIGN UP
            </button>
          </form>
        </div>

        <div className="imgContainer">
          <img
            src="https://images.mubicdn.net/images/film/188763/cache-283979-1511810924/image-w1280.jpg?size=800x"
            alt="NicaMovies Register"
            width="120%"
          />
          <p className="parrafo">
            <p>
              like some tomatoes page <br />
              <i>...but better! </i>☜(ﾟヮﾟ☜)
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
