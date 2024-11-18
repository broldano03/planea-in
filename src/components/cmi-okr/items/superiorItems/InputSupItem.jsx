import { useState } from "react";
import usePlaneaLib from "../../../../lib/planealib";

const InputSupItem = ({ aspectCmi }) => {
  const planealib = usePlaneaLib();
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = () => {
    if (inputValue.trim()) {
      planealib.createObjective(aspectCmi.id, inputValue);
      setInputValue(""); // Limpia el input después de agregar el objetivo
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddItem(); // Llama a `handleAddItem` directamente
    }
  };

  return (
    <div>
      <input
        className="py-2 px-3 text-black bg-slate-100 rounded-md"
        name="text"
        type="text"
        placeholder="Redacta aquí"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown} // Pasar `handleKeyDown` sin callback extra
      />
    </div>
  );
};

export default InputSupItem;
