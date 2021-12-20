import {useEffect} from "react";
import {useHistory} from 'react-router-dom';

function Home() {
 const history = useHistory();
    useEffect(() => {
        const timer = setTimeout(()=>{
            history.push('/about')
        },5000);
        return () => {
            clearTimeout(timer);
        }
    }, []);
  return (
    <div>
      <h2>This is the Home page</h2>
      <div className="page-content">
      <p>WELCOME !!</p>
      </div>
    </div>
  );
}

export default Home;
