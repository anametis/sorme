import { createContext, useContext, useEffect, useState } from "react";

const SidebarContext = createContext<{
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}>({
  isOpen: false,
  setIsOpen: () => {},
});

export default SidebarContext;
