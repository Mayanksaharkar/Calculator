import { useState } from "react";
import Calculator from "./Calculator";
function Drawer() {

      const [theme, setTheme] = useState(localStorage.getItem('theme') );
  localStorage.setItem("theme", theme);
  const themes = [
    "light",
    "cupcake",
    "emerald",
    "corporate",
    "garden",
    "pastel",
    "fantasy",
    "wireframe",
    "nord",
    "dark",
    "dim",
    "dracula",
    "halloween",
    "forest",
    "night",
    "luxury",
    "black",
  ];
  const body = document.getElementsByTagName("body")[0];
  body.setAttribute("data-theme", theme);

  const handleThemeClick =(theme)=>{
      localStorage.setItem("theme", theme);
    body.setAttribute('data-theme'  , localStorage.getItem('theme'));
  }

  return (
    <div className="drawer drawer-end flex justify-center h-full bg-base-300 align-middle " id="calculator">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
   
   <div  className="drawer-content flex flex-row justify-center align-middle   w-6/6">
    <Calculator/>
     </div>

  <div className="drawer-side z-2 ">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content rounded-s-3xl">
        {themes.map((theme)=>(
            <li  key={theme} onClick={e=>{ e.preventDefault(); handleThemeClick(theme)}}>
                <div data-theme={theme}  className="flex flex-row justify-between menu py-2  px-1 capitalize text-sm m-2 cursor-pointer rounded-xl hover:text-accent">
                <span className="ml-3 font-semibold">
                {theme}
                </span>

                <div>
                    <div className="w-7 h-7 rounded-full bg-primary mr-3"></div>
                </div>

                </div>
            </li>
        ))}
      
    </ul>
  </div>
</div>
  )
}

export default Drawer