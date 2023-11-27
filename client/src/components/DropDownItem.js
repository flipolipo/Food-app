import React from 'react'
import { CSSTransition } from 'react-transition-group'
function DropDownItem(props){
    return(
        <div
        className="menu-item"
        onClick={(e) => {
          props.setActiveMenu && props.setActiveMenu(props.goToMenu);
          props.filter && props.filter(e.target.textContent);
          
        }}
      >
        {props.children}
      </div>
        
    )
}
export default DropDownItem