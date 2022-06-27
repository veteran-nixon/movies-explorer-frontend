import { Navigate } from "react-router-dom";

function ProtectedRoute({element: Element, ...props}) {
  return (
    <>
       {props.loggedIn ? <Element {...props} /> : <Navigate to='/' />}
    </>
  )
}

export default ProtectedRoute;
