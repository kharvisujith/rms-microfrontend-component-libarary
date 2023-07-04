import { useEffect, useRef, useState } from "react";
import InfoDrawer from "./InfoDrawer";

import { fetchCandiateInfoDetails,fetchCandidateJobHistoryInfo } from "../../../Redux/slices/JobSlice";
import { useAppDispatch } from "../../../Redux/store/configureStore";

const DrawerOpen = () => {
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const buttonRef = useRef(null);

  const handleDrawerOpen = async () => {
    setIsOpen((prev: boolean) => !prev);
    try {
      dispatch(fetchCandiateInfoDetails());
      dispatch(fetchCandidateJobHistoryInfo());
    } catch (error: any) {
      console.log("Error in fetching Candiate Info :: ", error);
    }
  };

  const handleDrawerClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        event.target instanceof HTMLElement &&
        !event.target.closest(".MuiDrawer-root") &&
        event.target !== buttonRef.current
      ) {
        handleDrawerClose();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div>
        <button onClick={handleDrawerOpen} ref={buttonRef}>
          Open drawer
        </button>
        <InfoDrawer isOpen={isOpen} handleClose={handleDrawerClose} />
      </div>
    </>
  );
};

export default DrawerOpen;
