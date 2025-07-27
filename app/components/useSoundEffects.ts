import useSound from 'use-sound';

export const useSoundEffects = () => {
  const [playHover] = useSound('/sounds/hover.mp3', { volume: 0.5 });
  const [playClick] = useSound('/sounds/click.mp3', { volume: 0.5 });
  const [playSuccess] = useSound('/sounds/success.mp3', { volume: 0.5 });
  const [playError] = useSound('/sounds/error.mp3', { volume: 0.5 });
  const [playNotification] = useSound('/sounds/notification.mp3', { volume: 0.5 });
  const [playTransition] = useSound('/sounds/transition.mp3', { volume: 0.5 });

  return {
    playHover,
    playClick,
    playSuccess,
    playError,
    playNotification,
    playTransition,
  };
};

export default useSoundEffects; 