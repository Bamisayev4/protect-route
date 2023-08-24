import { useState } from "react";
import { UseAuth } from "./Auth"
import { useNavigate } from "react-router-dom";

export default function Singin(prop) {
  const [user, setUser] = useState(null)
  const auth = UseAuth();
  const navigate = useNavigate();
  const handleSingin = () => {
    auth.login(user)
    navigate('/', {replace:true} )
  }

  return (
    <div className="sign_in">
      <form action="">
       
        <input type="text"  placeholder="Username" required onChange={(e)=> setUser(e.target.value)} />
        <button type="submit" onClick={handleSingin}>Sign In</button>
      </form>
    </div>
  );
}
