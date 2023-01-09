import React, { useEffect, useState } from "react";

type useBackClickReturnType = [
  elementIsOpen: boolean,
  updateElementIsOpen: (newState: boolean) => void
];

export default function useBackClick(
  elementContentSelector: string,
  handler: () => void
): useBackClickReturnType {
  const [elementIsOpen, setElementIsOPen] = useState(false);

  const updateElementIsOpen = (newState: boolean) => {
    setElementIsOPen(newState);
  };

  const onDocumentClickHandler = (event: MouseEvent) => {
    if (elementIsOpen) {
      const element = document.querySelector(elementContentSelector) as Element;
      if (!event.composedPath().includes(element)) {
        handler();
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", onDocumentClickHandler);

    return () => document.removeEventListener("click", onDocumentClickHandler);
  }, [elementIsOpen]);

  return [elementIsOpen, updateElementIsOpen];
}
