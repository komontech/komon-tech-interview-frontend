"use client";
import { useState } from "react";
import AddConnectionModal from "./AddConnectionModal";

const AddConnection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="outline px-5 py-2 w-32 hover:bg-white hover:text-black"
        onClick={() => setIsOpen(true)}
      >
        Add connection
      </button>
      <AddConnectionModal
        editing={false}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default AddConnection;
