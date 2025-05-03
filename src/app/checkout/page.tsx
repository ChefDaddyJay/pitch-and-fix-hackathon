"use client";

import { CartContext } from "@/lib/Cart";
import { CartItem, CartSummary } from "@/ui/Cart";
import {
  Accordion,
  AddressForm,
  Checkbox,
  FormField,
  HorizontalDivider,
  PageSection,
  SubmitButton,
} from "@/ui/UtilComponents";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useContext, useState } from "react";
import { GoCreditCard } from "react-icons/go";

export default function CheckoutPage() {
  const { cart, updateCart } = useContext(CartContext);
  const [shipping, setShipping] = useState(9);
  const shippingOpts = [
    { price: 0, time: "3 - 7", name: "Regular UPS Ground", poBox: true },
    { price: 9, time: "1 - 3", name: "Express UPS Air", poBox: false },
    { price: 24, time: "1 - 2", name: "Next Day UPS Air", poBox: false },
  ];
  const changeShipping = (option: number) => {
    setShipping(shippingOpts[option].price);
  };

  return (
    <div className="flex flex-col items-center w-full h-max px-auto m-4">
      <div className="w-4/5 bg-white flex flex-col items-center">
        <h2 className="text-2xl text-neutral-800 font-bold p-4 w-4/5 text-center mb-4">
          Express Pay
        </h2>

        <div className="w-1/3">
          <PayPalScriptProvider options={{ clientId: "test" }}>
            <PayPalButtons style={{ layout: "horizontal" }} />
          </PayPalScriptProvider>
        </div>
      </div>

      <HorizontalDivider text="OR" />

      <div className="flex justify-evenly gap-4 w-4/5">
        <PageSection title="Review Order">
          <div className="flex flex-col gap-2 w-4/5 border-b border-neutral-300 pb-4">
            {cart.products.map((entry) => {
              return (
                <CartItem
                  key={entry.product.id}
                  product={entry.product}
                  amount={entry.amount}
                />
              );
            })}
          </div>

          <div className="flex justify-between w-4/5 pb-4">
            <div className="font-bold">Subtotal</div>
            <div className="flex items-center">$ {cart.calcTotal()}</div>
          </div>
          <ShippingOptions
            options={shippingOpts}
            preferred={2}
            handleChange={changeShipping}
          />
          <Checkbox
            label="Is this item a gift? If so, we won't include your invoice in the
              package."
            name="gift"
          />
        </PageSection>

        <PageSection title="Delivery Address">
          <AddressForm />
        </PageSection>

        <div className="w-full flex flex-col gap-4">
          <PageSection title="Payment Options">
            <PaymentMethods />
          </PageSection>
          <PageSection title="Order Summary">
            <OrderSummary shipping={shipping} />
          </PageSection>
          <SubmitButton
            text="Complete Order"
            onClick={() => {
              updateCart(cart.clear());
              redirect("/");
            }}
          />
          <div className="text-sm text-neutral-400 text-center">
            <span className="pr-1">
              * By signing up or placing an order you are consenting to our
            </span>
            <Link href="#" className="underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function OrderSummary({ shipping }: { shipping: number }) {
  const { cart, updateCart } = useContext(CartContext);
  const subtotal = Number(cart.calcTotal());
  const tax = (subtotal * 0.0825).toFixed(2);
  const orderTotal = subtotal + Number(tax) + shipping;

  return (
    <div className="w-4/5">
      <CartSummary />
      <div className="flex justify-between items-center">
        <div>Shipping</div>{" "}
        <div className="font-bold">$ {shipping.toFixed(2)}</div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div>Sales Tax</div> <div className="font-bold">$ {tax}</div>
      </div>
      <div className="bg-neutral-400 flex justify-between items-center p-4">
        <div className="font-bold text-2xl">Order Total</div>
        <div className="font-bold text-3xl">$ {orderTotal}</div>
      </div>
      <Checkbox
        label="Email me about new products and deals"
        name="subscirbe"
      />
    </div>
  );
}

export function PaymentMethods() {
  const [openPayment, setOpenPayment] = useState(0);
  const changePayment = (method: number) => {
    if (openPayment === method) {
      setOpenPayment(0);
    } else {
      setOpenPayment(method);
    }
  };
  return (
    <div className="container mx-auto p-4">
      <Accordion
        title="Credit Card"
        icon={<GoCreditCard className="w-[50px] h-[50px] p-1" />}
        isOpen={openPayment === 1}
        handleChange={() => changePayment(1)}
      >
        <FormField label="Cardholder First Name" name="cardFirstName" />
        <FormField label="Cardholder Last Name" name="cardLastName" />
        <FormField label="Card Number" name="cardNumber" hidden={true} />
      </Accordion>
      <Accordion
        title="PayPal"
        icon="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg"
        isOpen={openPayment === 2}
        handleChange={() => changePayment(2)}
      >
        <FormField label="PayPal Info" name="paypalInfo" />
      </Accordion>
      <Accordion
        title="Google Pay"
        icon="/images/Google_Pay_Logo.svg"
        isOpen={openPayment === 3}
        handleChange={() => changePayment(3)}
      >
        <FormField label="Google Pay Info" name="googlePayInfo" />
      </Accordion>
    </div>
  );
}

export function ShippingOptions({
  options,
  preferred,
  handleChange,
}: {
  options: { price: number; time: string; name: string; poBox: boolean }[];
  preferred: number;
  handleChange: (option: number) => void;
}) {
  const [active, setActive] = useState(preferred);
  return (
    <div className="w-4/5 flex flex-col">
      <h4 className="w-full font-bold text-center pb-2">Select Shipping</h4>
      <div className="w-full border border-neutral-300">
        {options.map((opt, i) => {
          return (
            <ShippingOption
              price={opt.price === 0 ? "FREE" : `$ ${opt.price} USD`}
              name={opt.name}
              description={`${opt.time} Business Days`}
              active={active === i + 1}
              poBox={opt.poBox}
              setActive={() => {
                setActive(i + 1);
                handleChange(i);
              }}
              key={i + 1}
            />
          );
        })}
      </div>
    </div>
  );
}

export function ShippingOption({
  price,
  name,
  description,
  active,
  poBox,
  setActive,
}: {
  price: string;
  name: string;
  description: string;
  active: boolean;
  poBox: boolean;
  setActive: () => void;
}) {
  return (
    <div
      className={`flex w-full p-2 ${active ? "bg-red-100" : "hover:bg-red-50"}`}
      onClick={setActive}
    >
      <div className="font-bold text-lg h-min w-3/5">{price}</div>
      <div className="flex flex-col px-4 w-full">
        <div>{name}</div>
        <div className="text-sm text-neutral-500">{description}</div>
        <div className="text-sm">
          {!poBox ? "Not available for P.O. Boxes" : ""}
        </div>
      </div>
      <div className="w-1/5 flex justify-center items-center">
        <input
          type="radio"
          name={name}
          checked={active}
          onChange={() => null}
        />
      </div>
    </div>
  );
}
