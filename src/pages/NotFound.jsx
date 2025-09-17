import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center">
      <img
        onClick={() => navigate("/")}
        className="w-full h-screen"
        src="https://imgs.search.brave.com/KW9Qm4fhBYryY0G4oH1xfSiWZg8KXKJ-rhlGarOek7o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/ZXJyb3ItNDA0LWNv/bmNlcHQtbGFuZGlu/Zy1wYWdlXzUyNjgz/LTEzNjE3LmpwZz9z/ZW10PWFpc19oeWJy/aWQmdz03NDAmcT04/MA"
        alt=""
      />
    </div>
  );
};

export default NotFound;
