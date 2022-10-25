import { useStore } from "../store/store";

export function ConfirmationModal() {
  const changeModalStatus = useStore.use.changeModalStatus();

  return (
    <div className="border border-black h-[180px] aspect-[4/3] rounded flex flex-col items-center bg-[#4C566A]">
      <button
        type="button"
        onClick={() => changeModalStatus()}
        className="self-end px-1 py-1 border border-black mr-1 mt-1 rounded bg-[#BF616A]"
      >
        close
      </button>
      <span className="absolute top-1/2 -translate-y-[50%]">
        The modal is Open
      </span>
    </div>
  );
}
