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
        Unser Service ermöglicht Ihnen die Online-Beantragung eines Nachsendeauftrags - für Privatpersonen ab 11,50 €, für Gewerbetreibende ab 12,33 € pro Monat (inkl. MwSt.). Schnell, sicher, unkompliziert.
      </p>
    </div>
  );
};

export default Home;
