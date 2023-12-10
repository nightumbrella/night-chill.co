"use client";
import useModalStore from "@/zustand-store/modal.store";
import { useWindowModal } from "@/zustand-store/window-modal";
import React, { useState } from "react";
import { motion as m, AnimatePresence } from "framer-motion";
import ModalItem from "./moda-item";
import Settings from "./settings/settings";
import Notes from "./notes";

const allRoutes = [
  {
    label: "Account Settings",
    icon: "UserCog",
  },
  {
    label: "Integrations",
    icon: "Usb",
  },
  {
    label: "Settings",
    icon: "settings",
  },
  {
    label: "Help",
    icon: "badge-help",
  },
  {
    label: "Activity",
    icon: "activity",
  },
  {
    label: "Notes",
    icon: "file",
  },
  {
    label: "Calendar",
    icon: "calendar-check",
  },
];

const layout = [
  {
    comp: <Settings />,
    label: "Settings",
  },
  {
    comp: <Notes />,
    label: "Notes",
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
    <>
      <button className="text-white" onClick={() => openModal()}>
        open modal
      </button>
      <AnimatePresence>
        {isModal && (
          <m.div
            initial={{ x: "100%", opacity: 0, visibility: "hidden" }}
            animate={{ x: 0, opacity: 1, visibility: "initial" }}
            exit={{ x: "-100%", opacity: 0, visibility: "initial" }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className={`bg-[#0c0c26d7] backdrop-blur-lg 
            border-[2px] mt-16 border-[#ababec65] 
            rounded-lg mx-auto  max-w-5xl h-[800px] 
            ${activeLabelState.length > 0 ? "w-[400px] h-[600px]" : ""}
            `}
          >
            <div className="border-b h-[30px] border-[#ababec65] ">
              <button className="text-white" onClick={() => closeModal()}>
                close
              </button>
            </div>

            <div className="">
              {allRoutes.map((data) => (
                <ModalItem
                  key={data.label}
                  label={data.label}
                  onClick={activeLabelModal}
                  activeLabel={activeLabelState}
                />
              ))}
            </div>

            <div className="grid grid-cols-2">
              {layout.map((data) => (
                <div key={data.label}>{data.comp}</div>
              ))}
            </div>

          </m.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalAll;
