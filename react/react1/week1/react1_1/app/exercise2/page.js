function Greeting() {
  return <h1>Hello, React!</h1>;
}

function Card() {
  return (
    <>
      <h2>Card Title</h2>
      <p>This is a card component</p>
    </>
  );
}

export default function Home() {
  return (
    <>
      <Greeting />
      <Card />
    </>
  );
}
