console.log("MODE:", import.meta.env.MODE);
console.log("BASE_URL:", BASE_URL);
const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:3000"
    : import.meta.env.VITE_API_URL;

export async function getCardHistory() {

const response = await fetch(
  `${BASE_URL}/card-history`
);

  const data = await response.json();

  if (!response.ok) {

    throw new Error("Failed to load history");

  }

  return data;

}

export async function login(email, password) {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Login failed");
  }

  return data;
}

export async function generateCard(articleUrl) {
  const response = await fetch(`${BASE_URL}/generate-card`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      articleUrl
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Backend error");
  }

  return data;
}

export async function getRemaining() {

const response = await fetch(
  `${BASE_URL}/remaining`
);

  const data = await response.json();

  if (!response.ok) {

    throw new Error("Failed to load remaining count");

  }

  return data;

}