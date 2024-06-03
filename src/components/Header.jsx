import reactImg from "../assets/react-core-concepts.png";

export default function Header() {
  console.log("Header Component");
  const headerContent = ["Fundamental", "Crucial", "Core"];

  function getRandomInt(len) {
    return Math.floor(Math.random() * len);
  }

  const contentDesc = headerContent[getRandomInt(headerContent.length)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {contentDesc} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
