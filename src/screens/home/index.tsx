import React, { useState } from "react";
import PostCan from "assets/images/briefkasten.png";
import { SelectSection } from "./components/selectSection";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [selectedPrivateCommercial, setSelectedPrivateCommercial] =
    useState<string>("Private forwarding order");
  const [selectedTiming, setSelectedTiming] = useState<string>(
    "Immediately (from March 2, 2025)",
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
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: 40,
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
              fontSize: 45,
              marginBottom: 5,
            }}
          >
            Post forwarding order
          </h2>
          <p
            style={{
              marginTop: 0,
              borderBottom: "1px solid rgb(201, 214, 223)",
            }}
          >
            Type and timing of the forwarding order:
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
                  "Private forwarding order",
                  "Commercial forwarding order",
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
              options={["Relocation", "Temporary Absence"]}
              onSelect={setSelectedRelocation}
              selectedValue={selectedRelocation}
            />

            </div>
            <SelectSection
                title="Timing"
                options={[
                  "Immediately (from March 2, 2025)",
                  "Later start time",
                ]}
                additionalOptions={[
                  "Immediately (from March 2, 2025)",
                  "Later start time",
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
        }}
        onClick={() => {
          navigate("/impressum");
        }}
      >
        Apply online now
      </button>
      <p
        style={{
          textAlign: "center",
          margin: 40,
        }}
      >
        If you would like to place a forwarding order online, then you have come
        to the right place. Private individuals can place a forwarding order
        from €11.50 per month including VAT. Businesses can place a forwarding
        order from €12.33 per month including VAT.
      </p>
    </div>
  );
};

export default Home;
