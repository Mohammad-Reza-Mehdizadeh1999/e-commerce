import { useContext } from "react";
import { favContext } from "./favContext";

export const useFavContext = () => useContext(favContext);
