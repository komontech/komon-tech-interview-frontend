"use client";
import { useState } from "react";
import AddConnectionModal from "./AddConnectionModal";

const AddConnection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button className="outline p-5" onClick={() => setIsOpen(true)}>
        Add connection
      </button>
      <AddConnectionModal
        editing={false}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        userName=""
        id=""
        platform=""
      />
    </div>
  );
};

export default AddConnection;
