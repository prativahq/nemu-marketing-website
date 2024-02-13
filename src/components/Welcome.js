import React, { useEffect } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../components/ui/drawer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";

import useScreenSize from "../hooks/useScreenSize";
import { WelcomeForm } from "./WelcomeForm";

export const Welcome = () => {
  const screenSize = useScreenSize();

  useEffect(() => {
    sessionStorage.setItem("welcome", "true");
  }, []);

  if (screenSize.width < 768) {
    return (
      <Drawer open={true}>
        {/* <DrawerTrigger>Open</DrawerTrigger> */}
        <DrawerContent>
          <WelcomeForm />
        </DrawerContent>
      </Drawer>
    );
  } else
    return (
      <Dialog defaultOpen={true}>
        {/* <DialogTrigger className="">Open</DialogTrigger> */}
        <DialogContent>
          <WelcomeForm />
        </DialogContent>
      </Dialog>
    );
};
