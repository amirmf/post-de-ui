import React, { useState, useEffect } from "react";

// Mock Data for Dates
const mockDates = [
  "March 10, 2025",
  "March 12, 2025",
  "March 14, 2025",
  "March 16, 2025",
  "March 18, 2025",
  "March 20, 2025",
  "March 22, 2025",
  "March 24, 2025",
  "March 26, 2025",
  "March 28, 2025",
];

interface SectionProps {
  title: string;
  options: string[];
  additionalOptions?: string[];
  onSelect: (value: string) => void;
  selectedValue: string;
}

export const SelectSection: React.FC<SectionProps> = ({
  title,
  options,
  additionalOptions,
  onSelect,
  selectedValue,
}) => {
  const [isLaterSelected, setIsLaterSelected] = useState<boolean>(false);

  useEffect(() => {
    if (additionalOptions) {
      // If "Later start time" is selected, show the mock dates
      if (selectedValue === additionalOptions[1]) {
        setIsLaterSelected(true);
      } else {
        setIsLaterSelected(false);
      }
    }
  }, [selectedValue, additionalOptions]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
        flexDirection: "column",
      }}
    >
      {options.map((option) => (
        <div key={option}>
          <input
            type="radio"
            id={option}
            name={title}
            value={option}
            checked={selectedValue === option}
            onChange={() => onSelect(option)}
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}

      {isLaterSelected && additionalOptions && (
        <div style={{
          paddingLeft: 20
        }}>
          <select
            id="date-options"
            style={{
              display: "block",
              height: 34,
              padding: "6px 12px",
              fontSize: "14px",
              color: "#555",
              backgroundColor: "#fff",
              backgroundImage: "none",
              border: "1px solid #ccc",
              borderRadius: 4,
              boxShadow: "inset 0 1px 1px rgba(0, 0, 0, .075)",
              marginBottom: 0,
            }}
          >
            {mockDates.map((date, index) => (
              <option key={index} value={date}>
                {date}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};
