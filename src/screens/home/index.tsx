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
    useState<string>("Relocation");
  const navigate = useNavigate();
  return (
    <div
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
              fontSize: 48,
              marginBottom: 5,
            }}
          >
            Post Nachsendeauftrag
          </h2>
          <p
            style={{
              marginTop: 0,
              fontSize: 20,
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
                fontSize: 20,
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
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px solid rgb(201, 214, 223)",
                marginBottom: 10,
                paddingBottom: 10,
              }}
            >
            <SelectSection
              title="Absence Options"
              options={["Umzug", "Vorübergehende Abwesenheit"]}
              onSelect={setSelectedRelocation}
              selectedValue={selectedRelocation}
            />

            </div>
            <SelectSection
                title="Timing"
                options={[
                  "Sofort (ab dem 05.03.2025)",
                  "Späterer Startzeitpunkt",
                ]}
                additionalOptions={[
                  "Sofort (ab dem 05.03.2025)",
                  "Späterer Startzeitpunkt",
                ]}
                onSelect={setSelectedTiming}
                selectedValue={selectedTiming}
              />
          </form>
        </div>
      </div>

      <button
        style={{
          backgroundColor: "black",
          fontSize: 22,
          borderRadius: 12,
          padding: "10px 20px",
          border: "1px solid transparent",
          color: "white",
          cursor: "pointer",
          alignSelf: "flex-end",
          marginTop: 40
        }}
        onClick={() => {
          navigate("/impressum");
        }}
      >
        Jetzt online beantragen
      </button>
      <p
        style={{
          textAlign: "left",
          margin: "40px 0px",
        }}
      >
        Sie möchten einen Nachsendeauftrag online stellen, dann sind Sie hier richtig. Privatpersonen können den Nachsendeauftrag ab 11,50€ im Monat inkl. MwSt. stellen. Gewerbetreibende können den Nachsendeauftrag ab 12,33€ im Monat inkl. MwSt. stellen.
      </p>
    </div>
  );
};

export default Home;
