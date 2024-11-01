import { Context } from "./AppContext";
import { AppState, PropsProvider } from "../interfaces/interface";

const state: AppState = {
  name: "Black Widow",
  url: "https://marvel.io/bw",
  time: "2 horas",
};
export const AppProvider = ({ children }: PropsProvider) => {
  return <Context.Provider value={{ state }}>{children}</Context.Provider>;
};
