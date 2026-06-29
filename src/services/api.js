const BASE_URL = "http://localhost:3000";

export async function getCardHistory() {

  const response = await fetch(
    "http://localhost:3000/card-history"
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
      articleUrl,
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
    "http://localhost:3000/remaining"
  );

  const data = await response.json();

  if (!response.ok) {

    throw new Error("Failed to load remaining count");

  }

  return data;

}