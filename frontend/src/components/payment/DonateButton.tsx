import { PayPalButtons } from "@paypal/react-paypal-js";
import { useEffect, useRef, useState } from "react";
import { createPaypalOrder } from "@/api/paypal";

// Renders errors or successful transactions on the screen.
function Message({ content }) {
  return <p>{content}</p>;
}

export default function DonateButton({ productId }) {
  const [message, setMessage] = useState("");
  const productIdRef = useRef(productId);

  useEffect(() => {
    productIdRef.current = productId;
  }, [productId]);

  return (
    <div className="py-3">
      <PayPalButtons
        style={{ label: "donate" }}
        createOrder={(data, actions) => {
          
        }}
        onApprove={async (data, actions) => {
          try {
            const response = await fetch(`/api/orders/${data.orderID}/capture`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
            });

            const orderData = await response.json();
            // Three cases to handle:
            //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
            //   (2) Other non-recoverable errors -> Show a failure message
            //   (3) Successful transaction -> Show confirmation or thank you message

            const errorDetail = orderData?.details?.[0];

            if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
              // (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
              // recoverable state, per https://developer.paypal.com/docs/checkout/standard/customize/handle-funding-failures/
              actions.restart(); return;
            } else if (errorDetail) {
              // (2) Other non-recoverable errors -> Show a failure message
              throw new Error(`${errorDetail.description} (${orderData.debug_id})`);
            } else {
              // (3) Successful transaction -> Show confirmation or thank you message
              // Or go to another URL:  actions.redirect('thank_you.html');
              const transaction = orderData.purchase_units[0].payments.captures[0];
              setMessage(
                `Transaction ${transaction.status}: ${transaction.id}. See console for all available details`,
              );
              console.log("Capture result", orderData, JSON.stringify(orderData, null, 2));
            }
          } catch (error) {
            console.error(error);
            setMessage(`Sorry, your transaction could not be processed...${error}`);
          }
        }}
      />
      <Message content={message} />
    </div>
  );
}
