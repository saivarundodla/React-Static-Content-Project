import Header from "./components/Header";
import Section from "./components/Section.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import TabButtons from "./components/TabButtons.jsx";

function App() {
  console.log("App Component");
  return (
    <div>
      <Header />
      <main>
        <Section id="core-concepts" menuContent={<CoreConcepts />}>
          Core Concepts
        </Section>
        <Section id="examples" menuContent={<TabButtons />}>
          Detailed Information
        </Section>
      </main>
    </div>
  );
}

export default App;
