export default function Section({ children, id, menuContent }) {
  console.log("Section Component");
  return (
    <section id={id}>
      <h2>{children}</h2>
      {menuContent}
    </section>
  );
}
