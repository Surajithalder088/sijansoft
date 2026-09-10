
const VerticalLink = () => {
    const handleClick = () => { alert(`Government Registration ID: UDYAM-WB-10-0223251`); };
  return (
    <p
      onClick={handleClick}
      className="
        fixed
        right-0
        top-1/2
        -translate-y-1/2
        z-50
        cursor-pointer
        flex
        items-center
        justify-center

        px-3
        py-6

        bg-black
        text-white
         text-[10px]
         md:text-[18px]
        rounded-l-lg

        hover:bg-gray-800
        transition-colors
        duration-300
      "
    >
      <span className="[writing-mode:vertical-rl] rotate-180">
        Govt. Registered
      </span>
    </p>
  );
};

export default VerticalLink;

