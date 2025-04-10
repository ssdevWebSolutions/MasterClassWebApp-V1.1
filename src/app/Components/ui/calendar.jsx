import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export function Calendar({ selected, onSelect, className = "", ...props }) {
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={onSelect}
      className={`bg-white rounded-md p-2 ${className}`}
      {...props}
    />
  );
}
