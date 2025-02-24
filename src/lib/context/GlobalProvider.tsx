import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface GlobalType {
  copy: boolean;
  setCopy: Dispatch<SetStateAction<boolean>>;
  copyToClipboard: (code: string) => Promise<void>;
}

const GlobalContext = createContext<GlobalType>({} as GlobalType);

function GlobalProvider({ children }: { children: React.ReactNode }) {
  const [copy, setCopy] = useState(false);

  const copyToClipboard = async (code: string) => {
    setCopy(true);
    try {
      await navigator.clipboard.writeText(code);
    } catch (err) {
      console.error("Failed to copy: ", err);
    } finally {
      setTimeout(() => {
        setCopy(false);
      }, 1000);
    }
  };

  return (
    <GlobalContext.Provider value={{ copy, setCopy, copyToClipboard }}>
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobal = () => useContext(GlobalContext);

export default GlobalProvider;
