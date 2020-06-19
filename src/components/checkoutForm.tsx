import React, { ReactElement, useState } from "react";
import { Plugins } from "@capacitor/core";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { StripeCardElement } from "@stripe/stripe-js";
import axios from "axios";
import Ticket from "../classes/ticket";
import Loader from "./loader";
import Success from "./success";

const { Modals } = Plugins;

const showAlert = async (title: string, message: string) => {
  Modals.alert({
    title,
    message,
  });
};

export const CheckOutForm = (): ReactElement => {
  const [showLoading, setShowLoading] = useState<string>("empty");
  const stripe = useStripe();
  const el = useElements();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const cardElement = el?.getElement(CardElement) as StripeCardElement;

    const res = await stripe?.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (!res?.error) {
      console.log("submit");
      setShowLoading("loading");
      const pay = res?.paymentMethod;
      await axios
        .post("http://192.168.1.105:9000/payment", {
          id: pay?.id,
          amount: (Ticket.count() as number) * 100,
        })
        .then((response) => {
          setShowLoading("success");
          cardElement.clear();
        })
        .catch((error) => {
          console.dir(error?.response?.data?.err);
          setShowLoading("error");
          showAlert("Error", error?.response?.data?.err);
        });
    }
  };

  return (
    <>
      {showLoading === "loading" && <Loader />}
      {showLoading === "success" && <Success redirect={setShowLoading} />}
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                fontSmoothing: "antialiased",
                fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                iconColor: "white",
                color: "black",
                "::placeholder": {
                  color: "white",
                },
              },
              invalid: {
                color: "#ff0047",
                iconColor: "#ff0047",
              },
            },
            hidePostalCode: true,
          }}
        />
        <button
          disabled={showLoading === ""}
          style={{
            display: "block",
            color: "#ffee24",
            border: "#0000002e thin solid",
            margin: "0px auto",
          }}
        >
          Pay
        </button>
      </form>
    </>
  );
};
