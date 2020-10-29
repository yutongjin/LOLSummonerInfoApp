import React from "react";
import ButtonGroup from "@bit/nexxtway.react-rainbow.button-group";
import ButtonMenu from "@bit/nexxtway.react-rainbow.button-menu";
import MenuItem from "@bit/nexxtway.react-rainbow.menu-item";
import ButtonIcon from "@bit/nexxtway.react-rainbow.button-icon";
import "./style.css";

const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome");
const {
  faCog,
  faShareAlt,
  faPlus,
  faBell,
  faSlidersH,
} = require("@fortawesome/free-solid-svg-icons");

function FirstBin() {
  return (
    <div>
      <ButtonGroup className="rainbow-m-right_medium">
        <ButtonMenu
          menuAlignment="left"
          menuSize="x-small"
          icon={<FontAwesomeIcon icon={faCog} />}
        >
          <MenuItem label="Menu Positioned Left" />
          <MenuItem label="Menu Positioned Left" />
          <MenuItem label="Menu Positioned Left" />
        </ButtonMenu>
        <ButtonIcon
          icon={<FontAwesomeIcon icon={faSlidersH} />}
          variant="border-filled"
          disabled
        />
        <ButtonIcon
          icon={<FontAwesomeIcon icon={faShareAlt} />}
          variant="border-filled"
          disabled
        />
      </ButtonGroup>
      <ButtonMenu
        menuAlignment="right"
        menuSize="x-small"
        buttonVariant="base"
        icon={<FontAwesomeIcon icon={faBell} />}
        style={{ marginLeft: 50 }}
      >
        <MenuItem label="Menu Positioned Right" />
        <MenuItem label="Menu Positioned Right" />
        <MenuItem label="Menu Positioned Right" />
      </ButtonMenu>
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
export default FirstBin;
