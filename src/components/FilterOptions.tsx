import { useState } from "react";

interface FilterOptionsProps {
  onFilterChange: (filters: Record<string, any>) => void;
}

const FilterOptions: React.FC<FilterOptionsProps> = ({ onFilterChange }) => {
  const [diet, setDiet] = useState("");
  const [maxTime, setMaxTime] = useState(0);

  return (
    <div className="flex space-x-4 p-4">
      <select className="border p-2" onChange={(e) => setDiet(e.target.value)}>
        <option value="">Select Diet</option>
        <option value="vegan">Vegan</option>
        <option value="gluten-free">Gluten-Free</option>
      </select>

      <input
        type="number"
        className="border p-2"
        placeholder="Max time (mins)"
        onChange={(e) => setMaxTime(Number(e.target.value))}
      />

      <button
        className="bg-blue-500 text-white p-2"
        onClick={() => onFilterChange({ diet, maxTime })}
      >
        Apply Filters
      </button>
    </div>
  );
};
export default FilterOptions;
