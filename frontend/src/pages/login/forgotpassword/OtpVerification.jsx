import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '@/contexts/authContext';
import HeroImage from "../../../assets/svg/Ellipse 32.svg";

const EmailVerification = ({onNext}) => {
  const [status, setStatus] = useState("loading");
  const [message, setMessage] = useState("");
  const { verifyEmailToken } = useAuth();
  const { token } = useParams();

  useEffect(() => {
    if (!token) {
      setStatus("error");
      setMessage("No verification token found in URL.");
      return;
    }

    const verify = async () => {
      try {
        const response = await verifyEmail(token);
        onNext();
        setStatus("success");
        setMessage("Your email has been successfully verified!");
      } catch (error) {
        console.error(error);
        const errorMsg =
          error.response?.data?.message || "Verification failed.";
        setStatus("error");
        setMessage(errorMsg);
      }
    };

    verify();
  }, [token, verifyEmail]);

  return (
    <div className="flex justify-center md:gap-[49px]">
      <div className="hidden md:flex md:ml-[190px]">
        <img
          src={HeroImage}
          className="w-[418px] h-[418px] object-cover"
          alt="Work desk illustration"
        />
      </div>
      <div className="md:w-[431px] px-4 md:px-0 py-24 text-center">
        <h3 className="font-lato font-bold text-[28px] md:text-[40px] leading-12 mb-[15px]">
          Email Verification
        </h3>
        {status === "loading" && <p>Verifying your email...</p>}
        {status === "success" && (
          <p className="text-green-600 text-lg">{message}</p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-lg">{message}</p>
        )}
      </div>
    </div>
  );
};

export default EmailVerification;
