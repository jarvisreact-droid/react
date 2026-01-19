import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "./Profile";

function About() {
  const navigate = useNavigate();
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const fetchAmount = async () => {
      const result = await Promise.resolve(100);
      setTotalAmount(result);
    };

    fetchAmount();
  }, [totalAmount]);

   const ChangeAmount = useCallback(  () => {
    const result = totalAmount;
    return result;
  }, [totalAmount]); // <- dependency

  const ChangeAmount1 = useMemo( () => {
    return totalAmount + 1;
  }, [totalAmount]); // <- dependency

  return (
    <div>
      <h1>About Page</h1>
      <p>This is the About page.</p>
      <button onClick={() => ChangeAmount()}>Add Amount</button>
      <button onClick={() => navigate("/")}>Go to Home</button>
      Total Amount : {totalAmount} <br/>
      {ChangeAmount1}<br/>
      {ChangeAmount()}

      <Profile name="vaibhav" age={30}></Profile>
    </div>
  );
}

export default About;
