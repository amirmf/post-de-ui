// @ts-nocheck 
import React, { useState, useEffect } from "react";
import PostCan from "assets/images/briefkasten.png";
import { SelectSection } from "./components/selectSection";
import { useNavigate } from "react-router-dom";
function getWeekdaysFromNowToNext3Months() {
  const today = new Date();
  const endDate = new Date();
  endDate.setMonth(today.getMonth() + 9);

  const dateList = [];
  let currentDate = new Date(today);
  currentDate.setDate(currentDate.getDate() + (7 + 14));
  while (currentDate <= endDate) {
    const dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Exclude Sundays (0) and Saturdays (6)
      const day = String(currentDate.getDate()).padStart(2, '0');
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const year = currentDate.getFullYear();
      // dateList.push(`${day}-${month}-${year}`);
      dateList.push({ "label": `${day}.${month}.${year}`, "value": `${year}-${month}-${day}` });
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dateList;
}
function getWeekdaysFromNowToNext3Months_() {
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

const Home = () => {
  const [selectedPrivateCommercial, setSelectedPrivateCommercial] =
    useState<string>("privat");
  const [selectedTiming, setSelectedTiming] = useState<string>(
    "sofort",
  );
  const [selectedRelocation, setSelectedRelocation] =
    useState<string>("umzug");
  const navigate = useNavigate();
  const today = new Date();
  const mockDates: any[] = getWeekdaysFromNowToNext3Months();
  useEffect(() => {
    if (window.gtag) {
      window.gtag("event", "page_view", {
        page_title: "home",
        page_path: "/",
      });
    }
  }, []);
  
  return (
    <div
      className="home-holder"
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          alignItems: "center",
          // justifyContent: "flex-end",
          gap: 5,
        }}
      >
        {/* <img
          style={{
            width: "30%",
          }}
          src={PostCan}
          alt="briefkasten"
        /> */}
        <div>
          <h2
            style={{
              marginBottom: 5,
              marginTop:"15px",
              wordBreak: "break-word"
            }}
          >
            Post Nachsendeauftrag
          </h2>
          <p
            style={{
              marginTop: 0,
              paddingBottom: 10,
              marginBottom: 10,
              borderBottom: "1px solid rgb(201, 214, 223)",
            }}
          >
            Art und Zeitpunkt des Nachsendeauftrags:
          </p>
          <form>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px solid rgb(201, 214, 223)",
                marginBottom: 10,
                paddingBottom: 10,
              }}
            >
              <SelectSection
                title="Forwarding Options"
                options={[
                  {
                    label: "Privater Nachsendeauftrag",
                    value: "privat"
                  },
                  {
                    label: "Gewerblicher Nachsendeauftrag",
                    value: "geschaftlich"
                  },
                ]}
                onSelect={setSelectedPrivateCommercial}
                selectedValue={selectedPrivateCommercial}
              />
            </div>
            <div
              style={{
                justifyContent: "space-between",
                borderBottom: "1px solid rgb(201, 214, 223)",
                marginBottom: 10,
                paddingBottom: 10,
              }}
            >
              <SelectSection
              title="Timing"
              options={[
                {
                  label: "Sofort (" + getWeekdaysFromNowToNext3Months_()[0].label + ")",
                  value: "sofort"
                },
                {
                  label: "Späterer Startzeitpunkt",
                  value: "spatererStartzeitpunkt"
                }
              ]}
              additionalOptions={[
                {
                  label: "Sofort (" + getWeekdaysFromNowToNext3Months()[0].label + ")",
                  value: "sofort"
                },
                {
                  label: "Späterer Startzeitpunkt",
                  value: "spatererStartzeitpunkt"
                }
              ]}
              onSelect={setSelectedTiming}
              selectedValue={selectedTiming}
            />
            </div>
            
              <SelectSection
                title="Absence Options"
                options={[
                  {
                    label: "Umzug",
                    value: "umzug"
                  },
                  {
                    label: "Vorübergehende Abwesenheit",
                    value: "vorubergehendeAbwesenheit"
                  },
                  {
                    label: "Sterbefall",
                    value: "sterbefall"
                  },
                ]}
                onSelect={setSelectedRelocation}
                selectedValue={selectedRelocation}
              />
              {selectedRelocation == "vorubergehendeAbwesenheit" && (
                <div style={{
                  paddingLeft: "20px"
                }}>
                  <label style={{ marginTop: 10 }} htmlFor="date-options2" >Wieder zustellen ab:</label>
                  <select
                    style={{
                      marginTop: 0
                    }}
                    id="date-options2">
                    {mockDates.map((date, index) => (
                      <option key={date['value']} value={date['label']}>
                        {date['label']}
                      </option>
                    ))}
                  </select>
                </div>
              )}
           
          </form>
        </div>
      </div>

      <button
        onClick={() => {
          const startDate = !!document.getElementById("date-options") ? document.getElementById("date-options").options[document.getElementById("date-options").selectedIndex].value : '';
          const endDate = !!document.getElementById("date-options2") ? document.getElementById("date-options2").options[document.getElementById("date-options2").selectedIndex].value : '';
          if(!!endDate){
            const startDate_ = Date.parse((startDate.split('.')[2]+'-'+startDate.split('.')[1]+'-'+startDate.split('.')[0]+'-'));
            const endDate_ = Date.parse((endDate.split('.')[2]+'-'+endDate.split('.')[1]+'-'+endDate.split('.')[0]+'-'));
            if(endDate_ < startDate_){
              alert('Enddatum muss grösser sein als das startdatum');
              return;
            } 
            const diffTime = Math.abs(endDate_ - startDate_);
            const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); 
            if(diffDays < 18){
              alert('Das Datum, ab dem wieder zugestellt werden soll muss mindestens 18 Tage nach dem Startzeitpunkt liegen. Bitte ändern Sie Ihre Eingaben.');
              return;
            }
            if(diffDays >= 6*30){
              alert('Die maximale Laufzeit für vorübergehende Nachsendeaufträge (Vorübergehende Abwesenheit) beträgt 6 Monate nach dem Startzeitpunkt. Bitte ändern Sie Ihre Eingaben.');
              return;
            }

          }
          if (window.gtag) {
            window.gtag("event", "conversion", {
              send_to: "AW-11453395597/tMKZCNvw_akaEI3ls9Uq",
              button_name: "start",
            }); 

            window.gtag("event", "button_click", {
              button_name: "start",
            }); 
          }
          navigate(`/submission?artDerNachsendung=${selectedPrivateCommercial}&art=${selectedRelocation}&zeitpunkt=${selectedTiming}&spatererStartzeitpunkt=${!!document.getElementById("date-options") ? document.getElementById("date-options").options[document.getElementById("date-options").selectedIndex].value : ''}&wiederZustellenAb=${!!document.getElementById("date-options2") ? document.getElementById("date-options2").options[document.getElementById("date-options2").selectedIndex].value : ''}`);
        }}
      >
        Jetzt online beantragen
      </button>
      <p
        style={{
          textAlign: "justify"
        }}
      >
        Unser Service ermöglicht die Online-Beantragung eines Nachsendeauftrages für Privatpersonen und Gewerbetreibende. Schnell, zuverlässig und unkompliziert.
      </p>
    </div>
  );
};

export default Home;
