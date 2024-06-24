export const login = async (data: { email: string; password: string }) => {
  const response = await fetch("http://localhost:3333/company/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ ...data }),
  });
  console.log(response);

  if (!response.ok) {
    throw new Error("Erreur lors de la création de la companie");
  }
  return response.json();
};

export const logout = async () => {
  const response = await fetch("http://localhost:3333/company/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });
  console.log(response);

  if (!response.ok) {
    throw new Error("Erreur lors de la déconnection de la companie");
  }
  return response.json();
};

export const createCompany = async (data: {
  email: string;
  password: string;
}) => {
  const response = await fetch("http://localhost:3333/company/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(data),
  });
  console.log(response);

  if (!response.ok) {
    throw new Error("Erreur lors de la création de la companie");
  }
  return response.json();
};

export type Company = {
  name: string;
  image: string;
};

export const getCompany = async (): Promise<Company> => {
  const response = await fetch(`http://localhost:3333/company`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });
  if (!response.ok)
    throw new Error("Erreur lors de la récupération de la company");
  return response.json();
};

export const forgetPassword = async (data: {
  password1: string;
  password2: string;
  email: string;
}) => {
  const response = await fetch(
    "http://localhost:3333/company/forget/password",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data }),
    }
  );
  if (!response.ok)
    throw new Error("Erreur lors de la déconnection de l'utilisateur");
  return response.json();
};

export const getJob = async () => {
  const response = await fetch("http://localhost:3333/company/job/all", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Erreur lors de la recherche des jobs");
  }
  return response.json();
};

export const getUserJobLiked = async () => {
  const response = await fetch(
    "http://localhost:3333/company/job/likedbyuser",
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    }
  );
  if (!response.ok) {
    throw new Error("Erreur lors de la recherche des jobs");
  }
  return response.json();
};

export const getUserJobLikedCount = async () => {
  const response = await fetch(
    "http://localhost:3333/company/job/countlikedbyuser",
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    }
  );
  if (!response.ok) {
    throw new Error("Erreur lors de la recherche des jobs");
  }
  return response.json();
};

export const getUserWhoLikedJob = async (id: number) => {
  const response = await fetch(`http://localhost:3333/user/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Erreur lors de la recherche des jobs");
  }
  return response.json();
};
