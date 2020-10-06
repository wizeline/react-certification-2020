import styled from 'styled-components';

export const MenuStyles = styled.div`
  /* Position and sizing of burger button */
  .bm-burger-button {
    position: absolute;
    width: 36px;
    height: 30px;
    left: 15px;
    top: 15px;
  }
  /* 
  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #373a47;
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: papayawhip;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #bdc3c7;
  }

  /*
  Sidebar wrapper styles
  Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
  */
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
  }

  /* General sidebar styles */
  .bm-menu {
    background: #373a47;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
    color: papayawhip;
    text-decoration: none;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
`;

export const NavbarWrapper = styled.div`
  background-color: lavender;
  height: 70px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .search-input {
    margin-left: 100px;
    background-color: snow;
    border-radius: 20px;
    height: 70%;
  }
`;
