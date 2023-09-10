import React from "react";
import OrderCard from "./OrderCard";

const AppetizerOrder = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl font-medium p-2">Appetizers</h2>
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
    </div>
  );
};

export default AppetizerOrder;
