import './filter.css';
import {ReactComponent as Icon} from "./filter.svg"
import React, {useState} from "react"
function NavItem(props) {
  const [open, setOpen] = useState(false)
  return (
    <li className="nav-item">
      <a onClick={()=>setOpen(!open)} href="#" className="icon-button"><Icon></Icon></a>
      {open && props.children}
    </li>
  );
}

export default NavItem;
