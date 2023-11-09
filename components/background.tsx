import React from "react";

const Background = ({ children }: { children: React.ReactNode }) => {
  
  return (
    <div className="h-screen w-screen relative overflow-hidden">
      {/* video background */}
      <div className="absolute top-0 left-0 -z-50">
        <video src="/wal1.mp4" autoPlay loop muted></video>
      </div>
      {/* video background */}
      {children}
    </div>
  );
};

export default Background;
