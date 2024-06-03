import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data.js";

export default function TabButtons() {
  console.log("TabButtons Component");
  let [selectedOption, setSelectedOption] = useState();
  const exampleKey = Object.keys(EXAMPLES);

  function onClick(buttonId) {
    setSelectedOption(buttonId);
  }
  return (
    <>
      <menu>
        {exampleKey.map((example) => (
          <TabButton
            key={example}
            isSelected={selectedOption === example}
            onClick={() => onClick(example)}
          >
            {example}
          </TabButton>
        ))}
      </menu>
      <div id="tab-content">
        <menu>
          {!selectedOption ? (
            <p>Please select a topic</p>
          ) : (
            <div>
              <h3>{EXAMPLES[selectedOption].description}</h3>
              <p>
                <code>{EXAMPLES[selectedOption].code}</code>
              </p>
            </div>
          )}
        </menu>
      </div>
    </>
  );
}
