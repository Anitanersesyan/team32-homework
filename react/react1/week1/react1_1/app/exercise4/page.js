/* Create a functional component called Person containing two constants name and age. The component should display the text: {name} is an adult if the age is 18 or higher or {name} is a minor if the age is less than 18.*/

function Person() {
  const name = "Anita";
  const age = 23;

  return <>{age >= 18 ? `${name} is an adult` : `${name} is a minor`}</>;
}

export default function Home() {
  return <Person />;
}
