import React, { useEffect, useState } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import ProductDetails from "../components/Products/ProductDetails";
import { useParams } from 'react-router-dom';
import { productData } from '../static/data';
import SuggestedProduct from '../components/Products/SuggestedProduct'

const ProductDetailsPage = () => {
    const { name } = useParams();
    const [data, setData] = useState(null);
    const productName = name.replace(/-/g, " ");

    useEffect(() => {
        const product = productData.find((item) => item.name === productName);
        setData(product);
    }, [productName]);

    return (
        <div>
            <Header />
            <ProductDetails data={data} />
            { 
                data && <SuggestedProduct data={data} />
            }
            <Footer />
        </div>
    );
};

export default ProductDetailsPage;
