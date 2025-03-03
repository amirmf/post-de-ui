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
        fontSize:"18px"
      }}
    >
      {options.map((option) => (
        <div key={option}>
          <input
          style={{
            verticalAlign: "middle"
          }}
            type="radio"
            id={option}
            name={title}
            value={option}
            checked={selectedValue === option}
            onChange={() => onSelect(option)}
          />
          <label htmlFor={option} style={{
            verticalAlign: "middle",
            display:"inline",
            paddingLeft:"10px"
          }}>{option}</label>
        </div>
      ))}

      {isLaterSelected && additionalOptions && (
        <div style={{
          paddingLeft: 20
        }}>
          <select
            id="date-options">
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