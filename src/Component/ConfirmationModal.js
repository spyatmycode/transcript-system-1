import React from "react";

const ConfirmationModal = ({ message, onYes,onNo }) => {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8">
        <p className="text-lg text-red-700 mb-4">{message}</p>
        <div className="flex justify-end">
          <button
            className="mr-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            onClick={onYes}
          >
            OK
          </button>
        
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;