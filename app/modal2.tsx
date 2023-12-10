"use client";
import useModalStore from "@/zustand-store/modal.store";
import React from "react";

const ModalTwo = ({ id }: any) => {
  const isOpen = useModalStore((state) => state.modals[id]);
  const closeModal = useModalStore((state) => state.closeModal)
  if(!isOpen) return null
  
  return <div className="border w-20 h-20">data 2</div>;
};

export default ModalTwo;
