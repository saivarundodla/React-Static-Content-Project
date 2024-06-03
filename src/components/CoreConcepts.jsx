import { CORE_CONCEPTS } from "../data.js";
import CoreConcept from "./CoreConcept.jsx";

export default function CoreConcepts() {
  console.log("CoreConcepts Component");
  return (
    <ul>
      {CORE_CONCEPTS.map((concept) => (
        <CoreConcept
          key={concept.title}
          title={concept.title}
          description={concept.description}
          image={concept.image}
        />
      ))}
    </ul>
  );
}
