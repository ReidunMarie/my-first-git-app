import React from 'react'
import { H1, H2, Button, Modal, Ul, Space } from "dnb-ui-lib";
import { hamburger, loupe } from "dnb-ui-lib/icons";
import {ReactComponent as DnbLogo} from './dnb.svg';
import "./styles.css"

function MenuBar() {
  return (
    <div id="menu-bar">
    <div>
    <MenuButton />
    </div>
    <div className="logo-container">
    <Button variant="tertiary">
      <DnbLogo className="dnb-logo" />
    </Button>
    <Button variant="tertiary" text="Aksjehandel"/>
    </div>
    <div>
    <Button variant="tertiary" icon={loupe} icon_position="left" text="Søk etter instrument" />
    </div>
    </div>
  );
}

const MenuButton = () => {
  return (
  <Button variant="tertiary" icon={hamburger} icon_position="left" text="Meny"
  on_click={() => (
    <Modal
    content_id="meny-modal"
      title="Meny"
      trigger_hidden
      open_state="opened"
      labelled_by="custom-triggerer"
      mode="drawer"
      container_placement="top"
    >

    <div className="logo-container">
    <Button variant="tertiary">
      <DnbLogo className="dnb-logo" />
    </Button>
    <Button variant="tertiary" text="Aksjehandel"/>
    </div>
    <Modal.Inner>
      <nav id="menu">
        <div>
        <H2 className="dnb-h--medium">Mine sider</H2>
        <Ul>
        <li><MenuItem title="Min portefølje"/></li>
        <li><MenuItem title="Mine ordre"/></li>
        <li><MenuItem title="Min transaksjoner"/></li>
        <li><MenuItem title="Min side"/></li>
        </Ul>
        </div>
        <div>
          <div>
          <H2 className="dnb-h--medium">Marked</H2>
          <Ul>
          <li><MenuItem title="Markedslisten"/></li>
          <li><MenuItem title="ETN"/></li>
          <li><MenuItem title="ETF"/></li>
          </Ul>
          </div>

            <Space top>
            <H2 className="dnb-h--medium">Marked</H2>
            <Ul>
            <li><MenuItem title="Markedslisten"/></li>
            <li><MenuItem title="ETN"/></li>
            <li><MenuItem title="ETF"/></li>
            </Ul>
            </Space>
          </div>

            <div>
            <H2 className="dnb-h--medium">Lær mer</H2>
            <Ul>
            <li><MenuItem title="Aksjeordbok"/></li>
            <li><MenuItem title="Hjelpevideoer"/></li>
            <li><MenuItem title="FQA"/></li>
            </Ul>
            </div>

      </nav>
    </Modal.Inner>
    </Modal>
  )}
/>
  )
}

const MenuItem = ({ url, title }) => {
  return (
    <li><Button variant="tertiary" icon="chevron_right" on_click={() => console.log(url)}>{title}</Button></li>
  )
}

export default MenuBar;
