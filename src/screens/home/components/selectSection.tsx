import React, { useState, useEffect } from "react";
function getWeekdaysFromNowToNext3Months() {
  const today = new Date();
  const endDate = new Date();
  endDate.setMonth(today.getMonth() + 3);
  
  const dateList = [];
  let currentDate = new Date(today);
  currentDate.setDate(currentDate.getDate() + 7);
  while (currentDate <= endDate) {
      const dayOfWeek = currentDate.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Exclude Sundays (0) and Saturdays (6)
          const day = String(currentDate.getDate()).padStart(2, '0');
          const month = String(currentDate.getMonth() + 1).padStart(2, '0');
          const year = currentDate.getFullYear();
          // dateList.push(`${day}-${month}-${year}`);
          dateList.push({"label":`${day}.${month}.${year}`,"value":`${year}-${month}-${day}`});
      }
      currentDate.setDate(currentDate.getDate() + 1);
  }
  
  return dateList;
}

    const mockDates:any[] = getWeekdaysFromNowToNext3Months();
    

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
      if (selectedValue === "spatererStartzeitpunkt") {
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
      {options.map((option:any) => (
        <div key={option.value}>
          <input
          style={{
            verticalAlign: "middle"
          }}
            type="radio"
            id={option.value}
            name={title}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onSelect(option.value)}
          />
          <label htmlFor={option.value} style={{
            verticalAlign: "middle",
            display:"inline",
            paddingLeft:"10px"
          }}>{option.label}</label>
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