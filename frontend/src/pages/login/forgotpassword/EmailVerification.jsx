import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/authContext";

const EmailVerification = () => {
  const { token } = useParams(); // Get the token from URL
  const { verifyEmail } = useAuth();

  const [status, setStatus] = useState("Verifying...");
  const data={token:JSON.stringify(token)}
  console.log("Token",token)

  useEffect(() => {
    const verify = async () => {
      try {
        await verifyEmail(data); // No need to parse token
        setStatus("✅ Email verified successfully.");
      } catch (error) {
        console.error(error);
        setStatus("❌ Email verification failed. Please try again.");
      }
    };

    if (token) {
      verify();
    } else {
      setStatus("❌ Invalid token.");
    }
  }, [token, verifyEmail]);

  return <div>{status}</div>;
};

export default EmailVerification;
