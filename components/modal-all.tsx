"use client";
import useModalStore from "@/zustand-store/modal.store";
import { useWindowModal } from "@/zustand-store/window-modal";
import React from "react";
import { motion as m, AnimatePresence } from "framer-motion";



const allRoutes = [
    {
        label:"Account Settings",
        icon:'UserCog' ,
    },
    {
        label:"Integrations",
        icon:'Usb' ,
    },
    {
        label:"Settings",
        icon:'settings' ,
    },
    {
        label:"Help",
        icon:'badge-help' ,
    },
    {
        label:"Activity",
        icon:'activity' ,
    },
    {
        label:"Notes",
        icon:'file' ,
    },
    {
        label:"Calendar",
        icon:'calendar-check' ,
    },
]


const ModalAll = () => {
  const { isModal, openModal, closeModal } = useWindowModal();


  return (
    <>
      <button className="text-white" onClick={() => openModal()}>
        open modal
      </button>
      <AnimatePresence>
        {isModal && (
          <m.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="bg-[#0c0c26d7] backdrop-blur-lg border-[2px] mt-16 border-[#ababec65] rounded-lg mx-auto  max-w-5xl h-[800px]"
          >
            <div className="border-b h-[30px] border-[#ababec65] ">
              <button className="text-white" onClick={() => closeModal()}>
                close
              </button>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalAll;
