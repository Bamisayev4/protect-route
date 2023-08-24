import { Navigate } from "react-router-dom";
import { UseAuth } from "./Auth";


const Required = ({ children }) => {
  const auth = UseAuth();
  if (!auth.user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default Required;
