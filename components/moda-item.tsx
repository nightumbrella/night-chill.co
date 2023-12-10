"use client";
import React from "react";

const ModalItem = ({
  label,
  activeLabel,
  onClick,
}: {
  label: string;
  activeLabel: string;
  onClick: (e: string) => void;
}) => {
  const checkLabel = label === activeLabel;
  

  return <div onClick={() => onClick(label)}>modalItems</div>;
};

export default ModalItem;
