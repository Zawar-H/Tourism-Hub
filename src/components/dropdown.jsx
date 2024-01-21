import { secureHeapUsed } from "crypto";
import React, { useState } from "react";

const Dropdown = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (

    <section className="dropdown">
    <div className="vertical">
      <div
        className={open ? "faqcomp active" : "faqcomp"}
        onClick={() => setOpen(!open)}
      >
        <h1>{question}</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="12"
          viewBox="0 0 20 12"
          fill="none"
        >
          <path
            d="M9.11612 10.8839C9.60427 11.372 10.3957 11.372 10.8839 10.8839L18.8388 2.92893C19.327 2.44078 19.327 1.64932 18.8388 1.16116C18.3507 0.673009 17.5592 0.673009 17.0711 1.16116L10 8.23223L2.92893 1.16117C2.44078 0.673011 1.64932 0.673011 1.16116 1.16117C0.673009 1.64932 0.673009 2.44078 1.16116 2.92893L9.11612 10.8839ZM8.75 9L8.75 10L11.25 10L11.25 9L8.75 9Z"
            fill="#005836"
          />
        </svg>
      </div>

      {open && <DropdownItem answer={answer} />}
    </div>
    </section>
  );
};

function DropdownItem({ answer }) {
  return <p className="dropdowncomp">{answer}</p>;
}

export default Dropdown;
