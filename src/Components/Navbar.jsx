import { useState } from "react";
function Navbar() {
  const [theme, setTheme] = useState("black");
  localStorage.setItem("theme", theme);
  const themes = [
    "light",
    "dark",
    "cupcake",
    "emerald",
    "corporate",
    "halloween",
    "garden",
    "forest",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "night",
    "dim",
    "nord",
  ];
  const body = document.getElementsByTagName("body")[0];
  body.setAttribute("data-theme", theme);

  const handleThemeClick = (theme) => {
    body.setAttribute("data-theme", theme);
    setTheme(theme);
    localStorage.setItem("theme", theme);
  };
  return (
    <div className="flex justify-center py-2">
      <div className="navbar w-11/12  bg-base-300 shadow-md rounded-full px-4">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl ">Calculator</a>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1 ">
            <li>
              <details>
                <summary className="capitalize w-30 ">
                  {" "}
                  Themes &nbsp;:&nbsp;&nbsp; {theme}
                </summary>
                <ul className="p-2  rounded-t-none rounded-2xl glass  ">
                  {themes.map((theme) => (
                    <a
                      key={theme}
                      className="menu  px-1 rounded-xl hover:text-accent"
                      onClick={(e) => {
                        e.preventDefault();
                        handleThemeClick(theme);
                      }}
                    >
                      <li className="capitalize  cursor-pointer">{theme}</li>
                    </a>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
