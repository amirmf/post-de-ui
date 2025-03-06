import React, { useState } from "react";
import PostCan from "assets/images/briefkasten.png";
import { SelectSection } from "./components/selectSection";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [selectedPrivateCommercial, setSelectedPrivateCommercial] =
    useState<string>("Privater Nachsendeauftrag");
  const [selectedTiming, setSelectedTiming] = useState<string>(
    "Sofort (ab dem 05.03.2025)",
  );
  const [selectedRelocation, setSelectedRelocation] =
    useState<string>("Umzug");
  const navigate = useNavigate();
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
              wordBreak:"break-word"
            }}
          >
            Post Nachsendeauftrag
          </h2>
          <p
            style={{
              marginTop: 0,
              paddingBottom:10,
              marginBottom:10,
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
                  "Privater Nachsendeauftrag",
                  "Gewerblicher Nachsendeauftrag",
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
              title="Absence Options"
              options={["Umzug", "Vorübergehende Abwesenheit","Sterbefall"]}
              onSelect={setSelectedRelocation}
              selectedValue={selectedRelocation}
            />
            {selectedRelocation=="Vorübergehende Abwesenheit" && (
                    <div style={{
                      paddingLeft:"20px"
                    }}>
                      <label style={{marginTop:10}} htmlFor="date-options2" >Wieder zustellen ab:</label>
                      <select
                      style={{
                        marginTop:0
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
            </div>
            <SelectSection
                title="Timing"
                options={[
                  "Sofort ",
                  // "Sofort (ab dem 05.03.2025)",
                  "Späterer Startzeitpunkt",
                ]}
                additionalOptions={[
                  // "Sofort (ab dem 05.03.2025)",
                  "Sofort ",
                  "Späterer Startzeitpunkt",
                ]}
                onSelect={setSelectedTiming}
                selectedValue={selectedTiming}
              />
          </form>
        </div>
      </div>

      <button
        onClick={() => {
          navigate("/submission");
        }}
      >
        Jetzt online beantragen
      </button>
      <p
        style={{
          textAlign: "justify"
        }}
      >
        Unser Service ermöglicht Ihnen die Online-Beantragung eines Nachsendeauftrags - für Privatpersonen und Gewerbetreibende. Schnell, sicher und unkompliziert.
      </p>
    </div>
  );
};

export default Home;
