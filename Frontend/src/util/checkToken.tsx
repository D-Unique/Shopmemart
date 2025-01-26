// function to validate token

interface User {
  id: string;
  name: string;
  email: string;
}

export const validateToken = async (
  token: string | null
): Promise<{ user: User } | null> => {
  try {
    if (!token) {
      console.log("No token found, skipping validation.");
      return null;
    }

    console.log("Validating token...");
    const response = await fetch("http://localhost:3000/api/v1/user/validateToken", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) {
      console.error("Token validation failed with status:", response.status);
      throw new Error("Token validation failed");
    }

    const result = await response.json();
    console.log("Token validation successful. User data:", result);
    return result;
  } catch (err) {
    console.error("Token validation error:", err);
    return null;
  }
};
