import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SellerCreate from "../components/Shop/SellerCreate";

const SellerCreatePage = () => {
  const navigate = useNavigate();
  const { isSeller,seller } = useSelector((state) => state.seller);

  useEffect(() => {
    if(isSeller === true){
      navigate(`/shop/${seller._id}`);
    }
  }, [])
  return (
    <div>
        <SellerCreate />
    </div>
  )
}

export default SellerCreatePage