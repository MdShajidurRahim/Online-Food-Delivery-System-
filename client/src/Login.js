import { Link } from "react-router-dom";
import "./index.css";
import Title from "./Title";
const Login = () => {
  return (
    <>
      <div className="center">
      <Title color="yellow"/>
        <hr style={{ width: "25%", height: "50%"}} />
        <div className="login">
          <h2 style={{color:"yellow"}}>Login</h2>
          <form>
            <label htmlFor="email" style={{fontWeight: "700", color: "red"}}> Email</label>
            <br />
            <input name="email" type={"email"} required /> <br /> <br />
            <label htmlFor="password" style={{fontWeight: "700", color: "red"}}> Password</label>
            <br />
            <input  name="password" type={"password"} required />
            <br />
            <br />
            <button class = "button Login"> Login </button>
            <br />
            <br />
            <Link to="/register" style={{fontWeight: "700", color: "blue"}} > Not registered? Click Here To Register!</Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
