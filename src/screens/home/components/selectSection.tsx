import React, { useState, useEffect } from "react";


const today = new Date();
    const mockDates:any[] = [];
    
    // Adding 3 months to today's date
    const endDate = new Date(today);
    endDate.setMonth(today.getMonth() + 3);
    
    // Loop through from today to the end date
    let currentDate = new Date(today);
    currentDate.setDate(currentDate.getDate() + 1);
    while (currentDate <= endDate) {
      mockDates.push({"label":currentDate.toISOString().split('T')[0],"value":currentDate.toISOString().split('T')[0]});
        currentDate.setDate(currentDate.getDate() + 1);
    }

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
              <option key={date['value']} value={date['label']}>
                {date['label']}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};