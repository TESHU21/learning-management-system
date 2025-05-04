import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const EmailVerification = () => {
  const { token } = useParams(); // Extracts token from URL
  const [verificationToken, setVerificationToken] = useState(token);

  useEffect(() => {
    // Update state whenever the token changes
    setVerificationToken(token);
  }, [token]); // This ensures a re-render when the URL changes

  return <div>Verifying token: {verificationToken}</div>;
};

export default EmailVerification;