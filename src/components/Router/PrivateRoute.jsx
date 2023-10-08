import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <>
            <div className="flex justify-center items-center">
                <span className="loading loading-spinner text-warning"></span>
            </div>
        </>

    }

    if (user) {
        return children;
    }
    return (
        <div>
            <Navigate to='/login'></Navigate>
        </div>
    );


};

export default PrivateRoute;