import React, { FC, MouseEvent } from 'react';

type VideoPlayerButtonProps = {
  icon: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

const VideoPlayerButton: FC<VideoPlayerButtonProps> = ({ icon, onClick }) => {
  return (
    <button onClick={onClick}>
      {icon}
    </button>
  );
};

export default VideoPlayerButton;