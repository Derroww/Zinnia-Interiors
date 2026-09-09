let submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", () => {
  let userName = document.getElementById("name").value;

  let userAge = Number(document.getElementById("age").value);

  const userObject = { name: userName, age: userAge };

  let userString = JSON.stringify(userObject);
  localStorage.setItem("user", userString);

  showProfile(userObject);
});

let retrievedUserString = localStorage.getItem("user");

if (retrievedUserString !== null) {
  let userStoredDataObject = JSON.parse(retrievedUserString);
  showProfile(userStoredDataObject);
}

function showProfile(userData) {
  displayGreeting(userData.name, userData.age);
  displayAgeInMonths(userData.age);
  displayCollectionAccess(userData.age);
  displayQuotes();
}

function displayGreeting(name, age) {
  let greetingMessage;

  if (age >= 18 && age <= 120) {
    greetingMessage = `Hello ${name}, welcome to Zinnia Interiors! You have full access to every collection we carry.`;
  } else if (age >= 0 && age < 18) {
    greetingMessage = `Hello ${name}, welcome to Zinnia Interiors! We already have plenty to show you.`;
  } else {
    greetingMessage = `Hello ${name}, welcome to Zinnia Interiors!`;
  }

  document.getElementById("greeting").innerHTML = greetingMessage;
}

let calcAgeInMonths = (age) => age * 12;

function displayAgeInMonths(age) {
  let ageInMonthMessage = `Your age in months is ${calcAgeInMonths(age)} months.`;
  document.getElementById("age-months").innerHTML = ageInMonthMessage;
}

function displayCollectionAccess(age) {
  let accessMessage;

  if (age >= 18 && age <= 120) {
    accessMessage = `You are old enough for our Grand Cellar & Bar Collection: statement bar carts, decanter shelving, and moody wine-room lighting.`;
  } else if (age >= 0 && age < 18) {
    accessMessage = `You are not 18 yet, so here is our Bright Beginnings Collection instead: window seats, growth-chart walls, and furniture built to survive an actual childhood.`;
  } else {
    accessMessage = `We could not tell how old you are, so here is our general collection instead.`;
  }

  document.getElementById("collection-access").innerHTML = accessMessage;
}

function displayQuotes() {
  let quoteMessage = "";

  for (let i = 0; i < 5; i++) {
    quoteMessage += `<p class="swatch">"A home isn't finished until it feels like you."</p>`;
  }

  document.getElementById("quotes").innerHTML = quoteMessage;
}
