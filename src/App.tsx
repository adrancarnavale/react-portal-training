import { ConfirmationModal } from "./ConfirmationModal";
import { Modal } from "./Portals/Modal";
import { useStore } from "./store/store";

export function App() {
  const modalStatus = useStore.use.modalStatus();
  const changeModalStatus = useStore.use.changeModalStatus();

  return (
    <div className="h-screen w-screen px-4 py-2 flex flex-col justify-center items-center">
      <button
        onClick={() => changeModalStatus()}
        type="button"
        className="border border-black rounded px-4 py-2"
      >
        Open
      </button>
      {modalStatus ? (
        <Modal>
          <ConfirmationModal />
        </Modal>
      ) : null}
    </div>
  );
}
