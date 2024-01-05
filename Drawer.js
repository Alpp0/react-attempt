import React from "react";
import "./Drawer.css";

const Drawer = ({ side, isOpen, onClose }) => {
  const menuItems = [
    { id: 1, title: "Hakkımızda", content: "Firmamız hakkında bilgiler..." },
    { id: 2, title: "İletişim", content: "İletişim bilgilerimiz..." },
    { id: 3, title: "Ulaşım", content: "Ulaşım bilgilerimiz..." },
    { id: 4, title: "Bilgi", content: "Genel bilgiler..." },
  ];

  const handleMenuItemClick = (item) => {
    console.log(`Clicked: ${item.title}`);
    onClose();
  };

  return (
    <div className={`drawer ${side} ${isOpen ? "open" : ""}`}>
      <div className={`content ${side}`}>
        {menuItems.map(
          (item) =>
            isOpen && (
              <div key={item.id} className="content-item">
                <h2>{item.title}</h2>
                <p>{item.content}</p>
              </div>
            )
        )}
      </div>
      {menuItems.map((item) => (
        <div
          key={item.id}
          className="menu-item"
          onClick={() => handleMenuItemClick(item)}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default Drawer;
