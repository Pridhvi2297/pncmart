import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { server } from "../server";

const ActivationPage = () => {
  const { activation_token } = useParams();
  const [error, setError] = useState(false);
  const navigate = useNavigate(); // Import useNavigate from react-router-dom

  useEffect(() => {
    if (activation_token) {
      const sendRequest = async () => {
        try {
          const response = await axios.post(`${server}/user/activation`, {
            activation_token,
          });
          console.log(response.data);

          // Add a delay of 5 seconds (5000 milliseconds) before redirecting to the login page
          setTimeout(() => {
            navigate("/"); // Redirect to the Home page
          }, 5000);
        } catch (err) {
          setError(true);
        }
      };
      sendRequest();
    }
  }, [activation_token, navigate]); // Include activation_token and navigate in the dependency array

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-sm w-full">
        {error ? (
          <p className="text-red-500 text-center font-semibold text-lg">
            Your token is expired!
          </p>
        ) : (
          <>
            <p className="text-green-500 text-center font-semibold text-lg mb-4">
              Your account has been created successfully!
            </p>
            <div className="text-center">
              <img
                src={`${process.env.PUBLIC_URL}/success.gif`}
                alt="Success Notification"
                className="w-50 h-30 mx-auto"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ActivationPage;
