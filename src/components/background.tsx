import React from "react";

const Background = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ background: "red" }} className="h-screen w-screen relative overflow-hidden">
      {/* video background */}
      <div className="absolute top-0 left-0">
        <video src="/wal1.mp4"></video>
      </div>
      {/* video background */}
      {children}
    </div>
  );
};

export default Background;
