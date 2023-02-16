import { useLocomotiveScroll } from "react-locomotive-scroll";

function Nav() {
  const { scroll } = useLocomotiveScroll();
  return (
    <nav data-scroll-sticky className=" py-6 sticky bg-transparent z-30">
      <div className="relative">
        <div className="drop" />
        <div className="flex justify-between container items-center">
          <h2 className="text-lg md:text-xl font-bold cursor-pointer">
            Summa
            <span className="text-xl md:text-3xl font-extrabold px-2">
              &#123; Rizz &#125;
            </span>
            er
          </h2>
          <ul className="flex text-[0.6rem] md:text-xs space-x-4 font-bold">
            <p
              onClick={() => {
                const target = document.querySelector("#about");
                scroll.scrollTo(target);
              }}
              className="py-1.5 px-3 border-2 border-[#332C39] rounded-full cursor-pointer hover:scale-105 ease-in-out transition-transform"
            >
              About
            </p>
            {/* <p className="py-1.5 px-3 border-2 border-[#332C39] rounded-full cursor-pointer hover:scale-105 ease-in-out transition-transform">
              Support
            </p> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
