import React from "react";
import ButtonGroup from "@bit/nexxtway.react-rainbow.button-group";
import ButtonMenu from "@bit/nexxtway.react-rainbow.button-menu";
import MenuItem from "@bit/nexxtway.react-rainbow.menu-item";
import "./style.css";

const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome");
const { faPlus } = require("@fortawesome/free-solid-svg-icons");

function PlusItemButton() {
  return (
    <div>
      <div style={{ marginTop: 50 }}>
        <ButtonMenu
          menuAlignment="bottom"
          buttonVariant="brand"
          menuSize="x-small"
          icon={<FontAwesomeIcon icon={faPlus} />}
        >
          <MenuItem label="Menu Positioned Bottom" />
          <MenuItem label="Menu Positioned Bottom" />
          <MenuItem label="Menu Positioned Bottom" />
        </ButtonMenu>
      </div>
    </div>
  );
}
export default PlusItemButton;
