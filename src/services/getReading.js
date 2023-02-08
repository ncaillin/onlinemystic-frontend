import axios from "axios";

import { BACKEND_URL } from "../utils/config";

const getMajorTarotReading = async () => {
  const reading = await axios.get(BACKEND_URL)
  return reading.data 
}
const getMajorTarotReadingWithCards = async (data) => {
  const reading = await axios.post(`${BACKEND_URL}/given-cards`, {data})
  return reading.data
}

export { getMajorTarotReading, getMajorTarotReadingWithCards }