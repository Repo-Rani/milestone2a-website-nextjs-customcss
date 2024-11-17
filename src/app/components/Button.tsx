import Link from "next/link";
import React from "react";

const Button = () => {
  return (
    <Link href="/contact">
      <div className="button-container">
        <button className="button">TRY NOW</button>
      </div>
    </Link>
  );
};

export default Button;
