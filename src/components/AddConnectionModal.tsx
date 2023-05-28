import { Item, ModalProps } from "@/types/intex";
import { useState } from "react";

const AddConnectionModal = (props: ModalProps) => {
  const { isOpen, onClose } = props;
  const [name, setName] = useState("");
  const [platform, setPlatform] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newItem: Item = {
      id: Date.now(),
      name,
      platform,
    };
    //onSubmit(newItem); // POST request
    onClose();
  };

  return isOpen ? (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed top-0 left-0 w-full h-full  bg-black bg-opacity-70">
        <div className="relative w-4/5 my-6 mx-auto max-w-3xl z-10">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black border-2 border-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold ">Add connection</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0  opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={onClose}
              >
                <span className="bg-transparent  opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            <form className="p-5" onSubmit={handleSubmit}>
              <label htmlFor="platform" className="block mb-2">
                Platform:
              </label>
              <select
                id="platform"
                className="border border-gray-300 rounded px-3 py-2 mb-4 w-full"
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
              >
                <option value="">Select Platform</option>
                <option value="Instagram">Instagram</option>
                <option value="Twitter">Twitter</option>
                <option value="YouTube">YouTube</option>
              </select>

              <label htmlFor="name" className="block mb-2">
                Name:
              </label>
              <input
                type="text"
                id="name"
                className="border border-gray-300 rounded px-3 py-2 mb-4 w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  className="border border-gray-300 px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default AddConnectionModal;
