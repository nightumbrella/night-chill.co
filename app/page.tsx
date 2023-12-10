"use client";
import Settings from "@/components/settings/settings";
import useModalStore from "@/zustand-store/modal.store";

const Home = () => {
  const { openModal,modals } = useModalStore();
  console.log(modals)
  return (
    <div>
      <Settings />
      <div className="ml-10">
        <button onClick={() => openModal("modal1")}>Open Modal 2</button>
        <button onClick={() => openModal("modal2")}>Open Modal 2</button>
      </div>
    </div>
  );
};

export default Home;
