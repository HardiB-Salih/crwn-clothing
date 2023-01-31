import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectCartTotal } from "../../store/cart/cart.select";
import { selectCurrentUser } from "../../store/user/user.select";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => {
      return res.json();
    });

    const clientSecret = response.paymentIntent.client_secret;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Yihua Zhang",
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful!");
      }
    }
  };

  return (
    <Wrapper>
      <FormWrapper onSubmit={paymentHandler}>
        <h2>Cridit Card Payment:</h2>
        <CardElement />
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}> Pay Now </Button>
      </FormWrapper>
    </Wrapper>
  );
};

export default PaymentForm;

const Wrapper = styled.div`
  height: 300px;
  background: rgba(255, 255, 255, 0.6);
  border: 0.5px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0px 2px 10px rgba(34, 79, 169, 0.3);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  margin-bottom: 150px;
  margin-top: 50px;
  padding: 30px;
`;

const FormWrapper = styled.form`
  display: grid;
  gap: 20px;
  height: 100px;
  min-width: 400px;
  padding: 30px;
`;
