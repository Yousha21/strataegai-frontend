import axios from "axios";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8000";

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 30000
});

export const scrapeProduct = async (productName: string) => {
  const res = await api.post("/scraper/start", {
    product_name: productName
  });
  return res.data;
};
