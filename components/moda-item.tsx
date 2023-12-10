"use client";
import React from "react";
import { LucideIcon } from "lucide-react";

const ModalItem = ({
  label,
  activeLabel,
  onClick,
  icon: Icon,
}: {
  label: string;
  icon: LucideIcon;
  activeLabel: string;
  onClick: (e: string) => void;
}) => {
  const checkLabel = label === activeLabel;

  return (
    <div onClick={() => onClick(label)} className="flex items-center gap-3 px-2 py-3 cursor-pointer hover:bg-[#ababec65] transition rounded-md">
      <div>
        <Icon className="text-slate-300"/>
      </div>
      {label}
    </div>
  );
};

export default ModalItem;
