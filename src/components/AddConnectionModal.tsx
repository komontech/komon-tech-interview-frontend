import { Connection, Item, ModalProps } from "@/types";
import { useState } from "react";
import { followerCount, images, postCount } from "../data/newConnection.json";
import { useRouter } from "next/navigation";
import { addConnection, updateConnection } from "@/services";

const AddConnectionModal = (props: ModalProps) => {
  const router = useRouter();
  const {
    editing,
    id = "",
    isOpen,
    onClose,
    platform: prevPlatform = "",
    userName = "",
    followerCount: prevFollowerCount = 0,
    postCount: prevPostCount = 0,
    images: prevImages = [],
  } = props;
  const [name, setName] = useState(userName);
  const [platform, setPlatform] = useState(prevPlatform);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newItem: Connection = {
      id: editing ? id : Date.now().toString(),
      userName: name,
      platform,
      // mocking the data that is supposed to be fetched from the corresponding platform
      followerCount: editing
        ? prevFollowerCount
        : Math.round(Math.random() * 1500),
      postCount: editing ? prevPostCount : Math.round(Math.random() * 100),
      images: editing ? prevImages : images,
    };
    editing ? await updateConnection(newItem) : await addConnection(newItem);
    router.refresh();
    onClose();
  };

  return isOpen ? (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed top-0 left-0 w-full h-full  bg-black bg-opacity-70">
        <div className="relative w-4/5 my-6 mx-auto max-w-3xl z-10">
          {/*content*/}
          <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-black border-2 border-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold ">
                {editing ? "Edit connection" : "Add connection"}
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0  opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={onClose}
              >
                <span className="bg-transparent  opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            <form className="p-5 " onSubmit={handleSubmit}>
              <label htmlFor="platform" className="block mb-2">
                Platform:
              </label>
              <select
                id="platform"
                className="border border-gray-300 rounded px-3 py-2 mb-4 w-full bg-black"
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
              >
                <option value="">Select Platform</option>
                <option value="Instagram">Instagram</option>
                <option value="Twitter">Twitter</option>
                <option value="YouTube">YouTube</option>
                <option value="LinkedIn">LinkedIn</option>
              </select>

              <label htmlFor="name" className="block mb-2">
                Username:
              </label>
              <input
                type="text"
                id="name"
                className="border border-gray-300 rounded px-3 py-2 mb-4 w-full bg-black"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <div className="flex justify-end gap-5 justify-between">
                <button
                  type="button"
                  onClick={onClose}
                  className="border border-gray-300 px-4 py-2 rounded  bg-red-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                >
                  {editing ? "Save changes" : "Add"}
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
