import React, { useEffect, useState } from "react";
import { useSpring, animated, config } from '@react-spring/web';
import { useSyncExternalStore } from "react";
import { modalsStore } from "./store";

export const CuteEmojiesConfirmContainer = () => {
  const currentModal = useSyncExternalStore(
    modalsStore.subscribe,
    modalsStore.getSnapshot
  );
  const [isVisible, setIsVisible] = useState(false);

  // Animation for the modal
  const [modalSpring, modalApi] = useSpring(() => ({
    from: { y: -100, opacity: 0 },
    config: { ...config.gentle }
  }));

  // Animation for the container/overlay
  const [containerSpring, containerApi] = useSpring(() => ({
    from: { opacity: 0 },
    config: { ...config.gentle },
    onRest: () => {
      // Hide the container completely when fade-out animation finishes
      if (!currentModal) {
        setIsVisible(false);
      }
    }
  }));

  useEffect(() => {
    if (currentModal) {
      // Show container immediately when modal appears
      setIsVisible(true);
      // Animate in
      modalApi.start({
        from: { y: -100, opacity: 0 },
        to: { y: 0, opacity: 1 },
        config: { tension: 280, friction: 20 }
      });
      containerApi.start({
        opacity: 1
      });
    } else {
      // Animate out
      modalApi.start({
        to: { y: 100, opacity: 0 }
      });
      containerApi.start({
        opacity: 0
      });
      // Container will be hidden after animation completes via onRest callback
    }
  }, [currentModal, modalApi, containerApi]);

  if (!isVisible) return null;

  return (
    <animated.div
      className="cute-emojies-modal-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...containerSpring
      }}
    >
      {currentModal && (
        <animated.div
          className="cute-emojies-modal-overlay"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            ...containerSpring
          }}
          onClick={() => modalsStore.setCurrentModal(null)}
        />
      )}
      {currentModal && (
        <animated.div
          className={'center-box'}
          style={{
            width: 80,
            height: 80,
            background: '#ff6d6d', 
            position: 'relative',
            zIndex: 1,
            ...modalSpring
          }}
        >
          {currentModal}
        </animated.div>
      )}
    </animated.div>
  );
};

export default CuteEmojiesConfirmContainer;