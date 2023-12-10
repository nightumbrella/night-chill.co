"use client";
import useModalStore from "@/zustand-store/modal.store";
import { useWindowModal } from "@/zustand-store/window-modal";
import React, { useState } from "react";
import { motion as m, AnimatePresence } from "framer-motion";
import ModalItem from "./moda-item";
// import Settings from "./settings/settings";
import Notes from "./notes";
import Calendar from "./calendar";
import {
  Activity,
  BadgeHelp,
  CalendarCheck,
  CheckCheck,
  File,
  Settings,
  Usb,
  UserCog,
} from "lucide-react";

const allRoutes = [
  {
    label: "Account Settings",
    icon: UserCog,
  },
  {
    label: "Integrations",
    icon: Usb,
  },
  {
    label: "Settings",
    icon: Settings,
  },
  {
    label: "Help",
    icon: BadgeHelp,
  },
  {
    label: "Activity",
    icon: Activity,
  },
  {
    label: "Notes",
    icon: File,
  },
  {
    label: "Calendar",
    icon: CalendarCheck,
  },
];

const layout = [
  //   {
  //     comp: <Settings />,
  //     label: "Settings",
  //   },
  {
    comp: <Notes />,
    label: "Notes",
  },
  {
    comp: <Calendar />,
    label: "Calendar",
  },
];

const ModalAll = () => {
  const { isModal, openModal, closeModal } = useWindowModal();
  const [activeLabelState, setActiveLabelState] = useState("");
  console.log(activeLabelState);

  const activeLabelModal = (e: string) => {
    setActiveLabelState(e);
  };

  return (
    <div className="h-screen w-screen relative">
        {/* shadow */}
        <div className={`absolute w-screen h-screen -z-10 inset-x-0 ${isModal && "bg-[#1c1c2b65]"}`}></div>
      <button className="text-white" onClick={() => openModal()}>
        open modal
      </button>
      <AnimatePresence>
        {isModal && (
          <m.div
            initial={{  opacity: 0, visibility: "hidden" }}
            animate={{ opacity: 1, visibility: "initial" }}
            exit={{  opacity: 0, visibility: "initial" }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className={`bg-[#0c0c26d7] backdrop-blur-lg 
            border-[2px] mt-16 border-[#ababec65] p-3
            rounded-lg mx-auto  w-[400px] h-[600px]
            `}
          >
            <div className="border-b h-[35px] border-[#ababec65]">
              <button className="text-white" onClick={() => closeModal()}>
                close
              </button>
            </div>

            <div className="mt-2 text-white">
              {allRoutes.map((data) => (
                <ModalItem
                  key={data.label}
                  label={data.label}
                  icon={data.icon}
                  onClick={activeLabelModal}
                  activeLabel={activeLabelState}
                />
              ))}
            </div>

            {/* <div className="absolute translate-x-2/4 translate-y-2/4  ">
              {layout.map((data) => (
                <div key={data.label} className="">
                  {data.comp}
                </div>
              ))}
            </div> */}
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ModalAll;
