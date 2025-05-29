// import { Navigate } from "react-router-dom";
// import { useAuth } from "./authContext";

// export const RutaProtegida = ({children}) => {
//     const {user,loading}=useAuth()

//     if (loading) {
//       return <h1>Loading..</h1>
//     }
//     if (!user) {
//       return <Navigate to={'/login'}/>
//     }
  
//     return (
//       <div>{children}</div>
//     )
// }