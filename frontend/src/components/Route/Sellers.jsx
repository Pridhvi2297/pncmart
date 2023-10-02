import React from "react";
import styles from "../../styles/styles";

const Sellers = () => {
  return (
    <div className="py-10">
      <div
        className={`${styles.section} bg-white py-10 mb-12 cursor-pointer rounded-xl`}
        style={{
          overflow: "hidden",
        }}
      >
        <div
          className="flex space-x-32"
          style={{
            animation: "scroll 60s linear infinite",
            whiteSpace: "nowrap",
          }}
        >
          <img
            src="https://www.vectorlogo.zone/logos/hp/hp-ar21.svg"
            alt="HP"
            style={{
              width: "150px",
              maxHeight: "100px",
              objectFit: "contain",
            }}
          />
          <img
            src="https://www.vectorlogo.zone/logos/dell/dell-ar21.svg"
            alt="Dell"
            style={{
              width: "150px",
              maxHeight: "100px",
              objectFit: "contain",
            }}
          />
          <img
            src="https://www.vectorlogo.zone/logos/apple/apple-ar21.png"
            alt="Apple"
            style={{
              width: "150px",
              maxHeight: "100px",
              objectFit: "contain",
            }}
          />
          <img
            src="https://www.vectorlogo.zone/logos/samsung/samsung-ar21.svg"
            alt="Samsung"
            style={{
              width: "150px",
              maxHeight: "100px",
              objectFit: "contain",
            }}
          />
          <img
            src="https://www.vectorlogo.zone/logos/tesla/tesla-ar21.svg"
            alt="Tesla"
            style={{
              width: "150px",
              maxHeight: "100px",
              objectFit: "contain",
            }}
          />
          <img
            src="https://www.vectorlogo.zone/logos/bose/bose-ar21.svg"
            alt=""
            style={{
              width: "150px",
              maxHeight: "100px",
              objectFit: "contain",
            }}
          />
          <img
            src="https://www.vectorlogo.zone/logos/pepsi/pepsi-ar21.svg"
            alt=""
            style={{
              width: "150px",
              maxHeight: "100px",
              objectFit: "contain",
            }}
          />
          <img
            src="https://www.vectorlogo.zone/logos/xbox/xbox-ar21.svg"
            alt=""
            style={{
              width: "150px",
              maxHeight: "100px",
              objectFit: "contain",
            }}
          />
          <img
            src="https://www.vectorlogo.zone/logos/apple/apple-ar21.png"
            alt="Apple"
            style={{
              width: "150px",
              maxHeight: "100px",
              objectFit: "contain",
            }}
          />
          <img
            src="https://www.vectorlogo.zone/logos/nvidia/nvidia-ar21.svg"
            alt=""
            style={{
              width: "150px",
              maxHeight: "100px",
              objectFit: "contain",
            }}
          />
          <img
            src="https://www.vectorlogo.zone/logos/asus/asus-ar21.svg"
            alt=""
            style={{
              width: "150px",
              maxHeight: "100px",
              objectFit: "contain",
            }}
          />
          <img
            src="https://www.vectorlogo.zone/logos/adidas/adidas-ar21.svg"
            alt=""
            style={{
              width: "150px",
              maxHeight: "100px",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default Sellers;
