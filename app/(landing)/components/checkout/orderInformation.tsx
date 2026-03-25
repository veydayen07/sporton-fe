import React, { Dispatch, SetStateAction } from "react";
import CardWithHeader from "../ui/cardWithHeader";
import InputGroup from "./../ui/inputGroup";
import { CustomerInfo } from "@/app/types";

const OrderInformation = ({
  formData,
  setFormData,
}: {
  formData: CustomerInfo;
  setFormData: Dispatch<SetStateAction<CustomerInfo>>;
}) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <CardWithHeader header="Order Information">
      <div className="flex flex-col gap-5 px-6.25 pb-13 pt-4">
        <InputGroup
          label="Full Name"
          name="customerName"
          type="text"
          placeholder="Type your full name"
          value={formData.customerName ?? ""}
          onChange={handleInputChange}
        />
        <InputGroup
          label="Whatsap Number"
          name="customerContact"
          type="tel"
          placeholder="+62xxxx"
          value={formData.customerContact ?? ""}
          onChange={handleInputChange}
        />
        <InputGroup label="Shipping address">
          <textarea
            className="bg-[#F0F0F0D1] px-4 py-2.5 outline-none focus:border focus:border-gray-400 text-sm"
            name="customerAddress"
            rows={7}
            id=""
            placeholder="Example Street, 18, West Jakarta, Indonesia, 66521"
            value={formData.customerAddress ?? ""}
            onChange={handleInputChange}
          ></textarea>
        </InputGroup>
      </div>
    </CardWithHeader>
  );
};

export default OrderInformation;
