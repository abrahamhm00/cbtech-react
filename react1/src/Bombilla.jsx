import { useState } from "react";
import b_off from "../assets/bombilla-off.svg";
import b_on from "../assets/bombilla-on.svg";

export default function Bombilla() {
  const [encendida, setEncendida] = useState(false);
  return (
    <div className="w-16 p-1" onClick={() => setEncendida(!encendida)}>
      <img src={encendida ? b_on : b_off} alt="Bombilla" />
    </div>
  );
}
