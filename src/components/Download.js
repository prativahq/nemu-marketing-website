import React from "react";
import useScreenSize from "../hooks/useScreenSize";
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
import { DownloadIcon } from "lucide-react";

export const Download = () => {
  const screenSize = useScreenSize();

  if (screenSize.width < 768) {
    return (
      <Drawer>
        <DrawerTrigger className=" py-5 sm:py-3 px-6 w-full text-base md:text-lg font-semibold leading-4 text-white  text-center bg-emerald-500 hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 border border-emerald-500 rounded-lg shadow-sm">
          Download App
        </DrawerTrigger>
        <DrawerContent>
          <Content />
        </DrawerContent>
      </Drawer>
    );
  } else
    return (
      <Dialog>
        <DialogTrigger className="flex items-center py-5 sm:py-3 px-6 w-fit text-base md:text-lg font-semibold leading-4 text-white  text-center bg-emerald-500 hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 border border-emerald-500 rounded-lg shadow-sm">
          Download App
          {/* <DownloadIcon className="w-6 h-6 ml-2" /> */}
        </DialogTrigger>
        <DialogContent>
          <Content />
        </DialogContent>
      </Dialog>
    );
};

function Content() {
  const screenSize = useScreenSize();

  return (
    <div className="flex flex-col gap-10 justify-start px-5 py-10">
      <div className="flex flex-col gap-3">
        <h3 className="text-3xl font-medium font-heading">
          Download the nemu app!
        </h3>
        <p className="text-lg  leading-9 text-coolGray-500">
          Select the platform you wish to download for{" "}
        </p>
      </div>
      <div className="flex flex-wrap justify-between  gap-5">
        <a
          className="mx-auto sm:mx-0"
          target="_blank"
          href="https://apps.apple.com/us/app/nemu/id6471528649"
        >
          <img
            alt=""
            src={
              screenSize.width > 768
                ? "images/downloadAppStore.svg"
                : "images/downloadAppStoreMobile.svg"
            }
          />
        </a>
        <a
          className="mx-auto sm:mx-0"
          target="_blank"
          href="https://play.google.com/store/apps/details?id=com.company.nemu"
        >
          <img
            alt=""
            src={
              screenSize.width > 768
                ? "images/downloadPlayStore.svg"
                : "images/downloadPlayStoreMobile.svg"
            }
          />
        </a>
      </div>
      {screenSize.width > 768 && (
        <div className="flex items-center shrink-0 gap-3 bg-[#F3F7F7] p-3 rounded-lg border-2 border-[#B2CACE]">
          <img alt="" src="images/iconLeft.svg" />
          <p className="text-[#075362]">
            <a
              href="https://share.hsforms.com/1kBWXOHsJRwONL9Xa3h80WAq6kww"
              target="_blank"
              className="font-semibold underline"
            >
              Click here
            </a>{" "}
            to join our Web App waitlist!
          </p>
        </div>
      )}
    </div>
  );
}
