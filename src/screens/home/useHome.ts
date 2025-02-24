import { useState } from "react";

export const useHome = () => {
  const [title, setTitle] = useState("Home");
  return {
    title,
    setTitle,
  };
};
