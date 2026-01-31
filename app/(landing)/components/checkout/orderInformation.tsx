import React from "react";
import CardWithHeader from "../ui/cardWithHeader";
import InputGroup from "./../ui/inputGroup";

const OrderInformation = () => {
  return (
    <CardWithHeader header="Order Information">
      <div className="flex flex-col gap-5 px-6.25 pb-13">
        <InputGroup
          label="Full Name"
          type="text"
          placeholder="Type your full name"
        />
        <InputGroup label="Whatsap Number" type="tel" placeholder="+62xxxx" />
        <InputGroup label="Shipping address">
          <textarea
            className="bg-[#F0F0F0D1] px-4 py-2.5 outline-none focus:border focus:border-gray-400 text-sm"
            name=""
            rows={7}
            id=""
            placeholder="Example Street, 18, West Jakarta, Indonesia, 66521"
          ></textarea>
        </InputGroup>
      </div>
    </CardWithHeader>
  );
};

export default OrderInformation;
