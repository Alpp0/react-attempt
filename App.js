import React, { useState } from "react";
import Drawer from "./Drawer";

const App = () => {
  const [leftDrawerOpen, setLeftDrawerOpen] = useState(false);
  const [rightDrawerOpen, setRightDrawerOpen] = useState(false);

  const toggleLeftDrawer = () => {
    setLeftDrawerOpen(!leftDrawerOpen);
  };

  const toggleRightDrawer = () => {
    setRightDrawerOpen(!rightDrawerOpen);
  };

  const closeDrawers = () => {
    setLeftDrawerOpen(false);
    setRightDrawerOpen(false);
  };

  return (
    <div className="app">
      <button onClick={toggleLeftDrawer}>Toggle Left Drawer</button>
      <button onClick={toggleRightDrawer}>Toggle Right Drawer</button>

      <Drawer side="left" isOpen={leftDrawerOpen} onClose={closeDrawers} />
      <Drawer side="right" isOpen={rightDrawerOpen} onClose={closeDrawers} />
    </div>
  );
};

export default App;
