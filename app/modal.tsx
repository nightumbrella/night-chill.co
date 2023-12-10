"use client";
import useModalStore from "@/zustand-store/modal.store";
import React from "react";

const Modal = ({ id }: any) => {
  const isOpen = useModalStore((state) => state.modals[id]);
  const closeModal = useModalStore((state) => state.closeModal)
  if(!isOpen) return null
  
  return <div className="border w-20 h-20">data</div>;
};

export default Modal;
