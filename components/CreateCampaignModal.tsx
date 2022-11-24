import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { AiOutlineClose, AiOutlineCloudUpload } from "react-icons/ai";

const inputGroup = "flex flex-col gap-1";

const inputStyles =
  "border  border-gray-300 focus:outline-none focus:border-gray-200 outline-none active:outline-none focus:border-gray-400 py-1 px-2 rounded-sm";

export default function CreateCampaignModal({
  show,
}: {
  show: boolean;
}): JSX.Element | null {
  if (!show) return null;

  const [image, setImage] = useState<any>("");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    amount: 0,
    url: "",
  });

  const onDrop = useCallback((acceptedFiles: any) => {
    handleDrop(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragAccept, open } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    maxFiles: 1,
  });

  const handleDrop = (acceptedFiles: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(acceptedFiles[0]);
    reader.onabort = () => console.log("file reading was aborted");
    reader.onerror = () => console.log("file reading has failed");
    reader.onload = () => {
      const imageUri = reader.result;
      setImage(imageUri);
    };
  };

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="fixed w-full h-full bg-gray-900/[.6] backdrop-blur-sm" />
      <div
        className={`w-11/12 max-w-[500px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg`}
      >
        <ModalHeader />
        <div className="p-4 pt-0">
          <form className="flex flex-col gap-4 max-h-[80vh] overflow-auto">
            <div
              style={{
                borderColor: isDragAccept ? "#134cae" : "",
                borderWidth: image ? 0 : 1,
              }}
              className="aspect-w-2 aspect-h-1 flex flex-col gap-2"
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              {image ? (
                <img
                  className="w-full h-full object-cover"
                  src={image}
                  alt={formData.name}
                />
              ) : (
                <>
                  <AiOutlineCloudUpload className="text-sm text-neutral-400" />
                  <p>Upload Image</p>
                </>
              )}
            </div>

            <div className={inputGroup}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                className={inputStyles}
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className={inputGroup}>
              <label htmlFor="url">Website URL</label>
              <input
                id="url"
                name="url"
                type="text"
                className={inputStyles}
                value={formData.url}
                onChange={handleChange}
              />
            </div>
            <div className={inputGroup}>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                className={inputStyles}
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <div className={inputGroup}>
              <label htmlFor="amount">Amount</label>
              <input
                id="amount"
                name="amount"
                type="number"
                className={inputStyles}
                value={formData.amount}
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

function ModalHeader() {
  return (
    <div className="flex items-center justify-between p-4">
      <h3 className="text-xl font-medium">Create Campaign</h3>
      <span className="w-[24] h-[24] rounded-full group hover:bg-neutral-100 p-1 cursor-pointer ">
        <AiOutlineClose className="text-neutral-500 group-hover:text-neutral-800" />
      </span>
    </div>
  );
}
