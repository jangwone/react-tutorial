import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { returnHelloWorldBean } from "./api/HellowWorldApiService";
import { useAuth } from "./security/AuthContext";

export default function WelcomeComponent() {
  const { username } = useParams();

  const authContext = useAuth()

  const [message, setMessage] = useState(null);

  function callHelloRestApi() {
    returnHelloWorldBean("myworld",authContext.token)
      .then((res) => successfulResponse(res))
      .catch((error) => errorResponse(error))
      .finally(() => console.log("clean up"));
  }

  function successfulResponse(res) {
    console.log(res);
    setMessage(res.data.message);
  }

  function errorResponse(error) {
    console.log(error);
    //setMessage(error)
  }

  return (
    <div className="WelcomeComponent">
      <h1>Welecome {username}</h1>
      <div className="Welcome">
        Manage Your todos - <Link to="/todos">Go here</Link>
      </div>
      <div>
        <button className="btn btn-success" onClick={callHelloRestApi}>
          Call hello world
        </button>
      </div>
      <div className="text-info">{message}</div>
    </div>
  );
}
