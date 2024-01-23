
function Navbar() {


  return (
    <div className="flex justify-center py-2 z-0 ">
      <div className="navbar w-11/12  bg-base-300 shadow-md rounded-full px-4">
        <div className="navbar-start">
          <a className="btn btn-ghost text-2xl rounded-full ">Calculator</a>
        </div>
        <div className="navbar-end">
          <label htmlFor="my-drawer" className="btn btn-ghost rounded-full mr-4 text-xl bg-base-100" >Themes</label>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
