import { useSyncExternalStore } from "react";
import { modalsStore } from "./store";

export const CuteEmojiesConfirmContainer = () => {
  const currentModal = useSyncExternalStore(
    modalsStore.subscribe,
    modalsStore.getSnapshot
  );

  if (!currentModal) return null;

  return <div className={'cute-emojies-modal-container'}>
    {currentModal && <div className="cute-emojies-modal-overlay"
      onClick={() => modalsStore.setCurrentModal(null)}></div>}
    <div className="center-box">

      {currentModal}
    </div>
  </div>;
};
