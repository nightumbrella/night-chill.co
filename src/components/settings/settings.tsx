"use client";
import React, { useEffect, useRef, useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import useDraggable from "@/hooks/use-draggable.hook";

interface positionType {
  x: any;
  y: any;
}

const Settings = () => {
  const lx = localStorage.getItem("positionX");
  const ly = localStorage.getItem("positionY");
  console.log(lx, typeof ly);
  const [position, setPosition] = useState<positionType>({ x: lx, y: ly });
  const divRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });

  // Load the position from local storage when the component mounts
  useEffect(() => {
    const savedX = localStorage.getItem("positionX");
    const savedY = localStorage.getItem("positionY");

    if (savedX && savedY) {
      setPosition({ x: parseInt(savedX), y: parseFloat(savedY) });
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && divRef.current) {
        const x = e.clientX - offset.current.x;
        const y = e.clientY - offset.current.y;
        setPosition({ x, y });

        // Save the position to local storage
        localStorage.setItem("positionX", x.toString());
        localStorage.setItem("positionY", y.toString());
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect();
      offset.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
      setIsDragging(true);
    }
  };

  return (
    <div
      ref={divRef}
      className="movable-div select-none cursor-move"
      style={{ left: position.x, top: position.y }}
      onMouseDown={handleMouseDown}
    >
      <Card className="w-[500px]">
        <CardHeader>
          <div>
            <CardTitle>General Settings</CardTitle>
            <Button variant={"ghost"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </Button>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};

export default Settings;