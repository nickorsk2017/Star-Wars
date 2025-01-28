"use client";
import { FC, useEffect, useRef, Ref } from "react";
import "./styles.css";

const SoundEffects: FC = () => {
  const refAudio: Ref<HTMLAudioElement> = useRef(null);

  useEffect(() => {
    document.body.addEventListener("mousemove", function () {
      if (navigator.userActivation.isActive && refAudio.current!.paused) {
        refAudio.current!.volume = 0.05;
        refAudio.current!.play();
      }
    });
  }, []);

  return (
    <div className="fa-sounds">
      <audio ref={refAudio}>
        <source src="/sound accompaniment.mp3" />
      </audio>
    </div>
  );
};

export default SoundEffects;
