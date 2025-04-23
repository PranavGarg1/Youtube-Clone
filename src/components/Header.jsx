const Header = () => {
  return (
    <div className="flex justify-between p-2 mx-4 ">
      <div className="flex">
        <img className="h-8  m-auto "
            src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png?f=webp&w=256"
            alt="menu"
        />
        <img className="h-8 m-auto mx-4"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
            alt="logo"
        />
      </div>
      <div className="flex h-12 w-150 justify-between border-1 rounded-4xl">
            <input placeholder="search" className=" px-4 outline-none w-145 "/>
            <img className="rounded-4xl cursor-pointer"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHLL3US_9kedP3tGyEM2behM09DIO31rofcQ&s"
            alt="search"
        />
      </div>
      <div>
        <img className="h-8  m-auto"
            src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
            alt="user"
        />
      </div>
    </div>
  );
};

export default Header;
