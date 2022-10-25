import { useStore } from "./store/store";

export function ConfirmationModal() {
  const changeModalStatus = useStore.use.changeModalStatus();

  return (
    <div className="border border-black h-[180px] aspect-video rounded flex flex-col items-center absolute top-1/2 left-1/2 z-10 -translate-y-[50%] -translate-x-[50%] bg-red-500">
      <button
        type="button"
        onClick={() => changeModalStatus()}
        className="self-end px-1 py-1 border border-black mr-1 mt-1 rounded bg-blue-300"
      >
        close
      </button>
      <span className="absolute bottom-1/2 translate-y-[50%]">
        The modal is Open
      </span>
    </div>
  );
}
