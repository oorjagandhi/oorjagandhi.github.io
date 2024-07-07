import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col justify-center items-center h-20 mt-20 bg-background text-lesswhite font-display">
      <div>
        <p className="text-[15px] font-medium text-sm">
          Built and designed by Oorja Gandhi
        </p>
      </div>
      <div>
        <p className="text-[15px] font-medium text-sm">All rights reserved. © 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
