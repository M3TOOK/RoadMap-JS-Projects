function formatName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

function getGreeting(timeOfDay) {
  if (timeOfDay === "morning") {
    return "Good morning";
  } else if (timeOfDay === "afternoon") {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
}

function createGreeting(firstName,lastName,timeOfDay){
  const name = formatName(firstName,lastName);
  const greeting = getGreeting(timeOfDay);

  return `${greeting}, ${name}`;
}

console.log(createGreeting('Ava', 'Stone', 'morning'));
console.log(createGreeting('Noah', 'Kim', 'evening'));
console.log(createGreeting('Mina', 'Patel', 'afternoon'));
