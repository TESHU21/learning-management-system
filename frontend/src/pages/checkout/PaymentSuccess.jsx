import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCourse } from "@/contexts/CourseContext";

export default function PaymentSuccess() {
  const [status, setStatus] = useState("pending"); // pending, success, failed
  const location = useLocation();
  const navigate = useNavigate();
  const { markInvoicesAsPaid } = useCourse();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const reference = params.get("reference");

    if (!reference) {
      setStatus("failed");
      return;
    }

    const markAsPaid = async (reference) => {
      try {
        const response = await markInvoicesAsPaid({ reference });
        if (response.success) {
          setStatus("success");
        } else {
          setStatus("failed");
        }
      } catch (error) {
      
        setStatus("failed");
      }
    };

    markAsPaid(reference);
  }, [location.search, markInvoicesAsPaid]);

  if (status === "pending") return <p>Verifying payment...</p>;

  if (status === "success")
    return (
      <div>
        <h2>Payment Successful!</h2>
        <p>Your enrollment is complete.</p>
        <button onClick={() => navigate("/my-courses")}>Go to My Courses</button>
      </div>
    );

  return (
    <div>
      <h2>Payment Verification Failed</h2>
      <p>Please contact support or try again.</p>
    </div>
  );
}
