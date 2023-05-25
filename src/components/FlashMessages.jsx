import React, { useState, useEffect } from "react";

function FlashMessages(props) {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className={`fixed -z-50 top-16 left-0 right-0 mx-auto w-300 ${
        showAlert ? "block" : "hidden"
      }`}
    >
      {props.messages.map((msg, index) => {
        return (
          <div
            key={index}
            className="bg-green-500 text-white text-center rounded shadow-sm p-2"
          >
            {msg}
          </div>
        );
      })}
    </div>
  );
}

export default FlashMessages;
