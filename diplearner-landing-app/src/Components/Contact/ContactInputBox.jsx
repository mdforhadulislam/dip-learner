import React from "react";

const ContactInputBox = ({type, placeholder, name, value, action}) => {
  return (
    <div className="mb-6">
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[#f0f0f0] outline-none focus-visible:shadow-none focus:border-[#00B1E9]"
        value={value}
        onChange={action}
      />
    </div>
  );
};

export default React.memo(ContactInputBox);
