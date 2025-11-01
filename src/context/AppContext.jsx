import { createContext } from "react";
import { topstay } from "../assets/assets";

export const AppContext = createContext();

const currencySymbol = '₹'



const AppContextProvider = (props) => {
  const value = {
    topstay,currencySymbol
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
