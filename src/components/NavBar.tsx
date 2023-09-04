const NavBar = () => {
  return (
    <nav className="relative flex w-full flex-wrap items-center justify-between py-2 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700  lg:py-4 mb-6">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <a
          className="ml-2 text-xl text-white hover:text-darkEmerald active:text-darkEmerald transition duration-500"
          href="/"
        >
          Podcast
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
