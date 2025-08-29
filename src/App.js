import Card from "./components/Card";

function App() {
  const cards = [
    { title: "Card 1", desc: "Learn react 4 fun", color: "blue" },
    { title: "Card 2", desc: "css by tailwind", color: "green" },
    { title: "Card 3", desc: "Reusable Component", color: "red" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center gap-6 bg-gradient-to-r from-purple-500 to-pink">
      {cards.map((c, i) => (
        <Card key={i} title={c.title} desc={c.desc} color={c.color} />
      ))}
    </div>
  );
}

export default App;
