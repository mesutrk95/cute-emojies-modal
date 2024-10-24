import { useEffect, useState } from "react";
import { useSpring, animated, config, easings } from "@react-spring/web";
import { useSyncExternalStore } from "react";
import { modalsStore } from "./store";

export const CuteEmojiesConfirmContainer = () => {
  const currentModal = useSyncExternalStore(
    modalsStore.subscribe,
    modalsStore.getSnapshot
  );
  const [isVisible, setIsVisible] = useState(false);
  const [lastModal, setLastModal] = useState<React.ReactNode | null>(null);

  // Animation for the modal
  const [modalSpring, modalApi] = useSpring(() => ({
    from: { transform: "translateY(-100%)", opacity: 0 },
    config: { ...config.gentle },
  }));

  // Animation for the container/overlay
  const [containerSpring, containerApi] = useSpring(
    () => ({
      from: { opacity: 0 },
      config: { ...config.gentle },
      onRest: () => {
        if (!currentModal) {
          setIsVisible(false);
        }
      },
    }),
    [currentModal]
  );

  useEffect(() => {
    if (currentModal) {
      // Show container immediately when modal appears
      setIsVisible(true);
      setLastModal(currentModal)
      // Animate in
      modalApi.start({
        from: { transform: "translateY(-100%)", opacity: 0 },
        to: { transform: "translateY(0%)", opacity: 1 },
        config: { tension: 280, friction: 20,  },
      });
      containerApi.start({
        opacity: 1,
      });
    } else {
      // Animate out
      modalApi.start({
        to: { transform: "translateY(-100%) scale(80%)", opacity: 0 }, 
      });
      containerApi.start({
        opacity: 0,
        config: { 
          duration: 200,
          easing: easings.easeInCubic, // Makes the closing speed up
        },
      });
      // Container will be hidden after animation completes via onRest callback
    }
  }, [currentModal, modalApi, containerApi]);

  if (!isVisible) return null;

  return (
    <animated.div
      className="cute-emojies-modal-container"
      style={{
        ...containerSpring,
      }}
    >
      <animated.div
        className="cute-emojies-modal-overlay"
        style={{
          ...containerSpring,
        }}
        onClick={() => modalsStore.setCurrentModal(null)}
      />
      <animated.div
        className={"center-box"}
        style={{
          ...modalSpring,
        }}
      >
        {lastModal}
      </animated.div>
    </animated.div>
  );
};

export default CuteEmojiesConfirmContainer;
