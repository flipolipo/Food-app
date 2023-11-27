import React, { useState } from 'react';
import DropDownItem from './DropDownItem';
import { CSSTransition } from 'react-transition-group';
function DropDownMenu(props) {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  function calcHeight(element) {
    const height = element.offsetHeight;
    setMenuHeight(height);
  }
  const health = [
    'alcohol-cocktail',
    'alcohol-free',
    'celery-free',
    'crustacean-free',
    'dairy-free',
    'DASH',
    'egg-free',
    'fish-free',
    'fodmap-free',
    'gluten-free',
    'immuno-supportive',
    'keto-friendly',
    'kidney-friendly',
    'kosher',
    'low-fat-abs',
    'low-potassium',
    'low-sugar',
    'lupine-free',
    'Mediterranean',
    'mollusk-free',
    'mustard-free',
    'no-oil-added',
    'paleo',
    'peanut-free',
    'pescatarian',
    'pork-free',
    'red-meat-free',
    'sesame-free',
    'shellfish-free',
    'soy-free',
    'sugar-conscious',
    'sulfite-free',
    'tree-nut-free',
    'vegan',
    'vegetarian',
    'wheat-free',
  ];

  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === 'main'}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <DropDownItem
          goToMenu="settings"
          key="health-labels"
          setActiveMenu={setActiveMenu}
        >
          Health labels
        </DropDownItem>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === 'settings'}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div>
          {health.map((type) => {
            return (
              <DropDownItem
                filter={props.filter}
                goToMenu="main"
                key={type}
                setActiveMenu={setActiveMenu}
              >
                {type}
              </DropDownItem>
            );
          })}
        </div>
      </CSSTransition>
    </div>
  );
}

export default DropDownMenu;
