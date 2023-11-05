import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const SellerProtectedRoute = ({ children }) => {
  const { isLoading, isSeller } = useSelector((state) => state.seller);
  if (isLoading === true) {
    if (!isSeller) {
      return <Navigate to={`/shop-signin`} replace />;
    }
    return children;
  }
};

export default SellerProtectedRoute;