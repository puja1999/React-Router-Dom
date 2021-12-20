import { useEffect } from "react";
import { useHistory } from "react-router-dom";

function Contact({ isLogin }) {
  const history = useHistory();

  useEffect(() => {
    if (!isLogin) {
      history.push("/");
    }
  }, [isLogin, history]);
  
  return (
    <div>
      <h2>This is the Contact Us Page</h2>
    </div>
  );
}

export default Contact;
