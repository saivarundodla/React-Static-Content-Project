export default function TabButton(props) {
  console.log("TabButton Component");
  return (
    <li>
      <button
        className={props.isSelected ? "active" : ""}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </li>
  );
}
