"use client";
import React, { useState } from "react";
import ReactPlayer from "react-player/lazy";
import YouTubePlayer from "react-player/youtube";
import YouTube from 'react-youtube';

const Background = ({ children }: { children: React.ReactNode }) => {
  const [videoUrl, setVideoUrl] = useState<string>("/wal1.mp4");
  const [isValidUrl, setIsValidUrl] = useState<boolean>(true);
  const [isModal, setIsModal] = useState<boolean>(true);
  const [videoId, setVideoId] = useState<string>("");
  const [isYouTube, setIsYouTube] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputUrl = event.target.value;
    setVideoUrl(inputUrl);
  };

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   setIsValidUrl(validateUrl(videoUrl));
  //   setIsModal(false);
  // };

  const validateUrl = (url: string): boolean => {
    // Perform your URL validation here
    return url.match(/\.(mp4|ogg|webm|mov)$/) !== null;
  };

  const openModal = () => {
    setIsModal(true);
  };

  // for youtube url ↓↓↓
  const getYouTubeVideoId = (url: string): string => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : "";
  };

  const validateYouTubeUrl = (id: string): boolean => {
    // Perform your validation logic here
    return id.length === 11; // Basic check for video ID presence
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsValidUrl(validateYouTubeUrl(videoId));
  };

  return (
    <div className="h-screen w-screen relative overflow-hidden">
      {/* modal button */}
      <div className="relative z-50">
        {isModal ? (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter video URL"
              onChange={handleChange}
            />
            <button type="submit">Play</button>
          </form>
        ) : (
          <h1 className="" onClick={openModal}>
            Open modal
          </h1>
        )}
      </div>

      {/* modal button */}
      {/* video background */}
      <div className="absolute top-0 left-0 -z-50">
        {/* <video src={videoUrl} autoPlay loop muted></video> */}
      </div>
      <div>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=_ITiwPMUzho"
            controls={false}
            playing
            muted
            loop
            key={'youtube'}
          />
        </main>
      </div>
      {/* video background */}
      {children}
    </div>
  );
};

export default Background;
