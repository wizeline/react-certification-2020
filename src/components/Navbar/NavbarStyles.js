import styled from 'styled-components';

export const MenuStyles = styled.div`
  /* Position and sizing of burger button */
  .bm-burger-button {
    position: absolute;
    width: 26px;
    height: 20px;
    left: 26px;
    top: 20px;
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
    top: 0;
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
    padding: 0.8em 0;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
    color: papayawhip;
    text-decoration: none;
    padding: 0 0.8rem;
    :focus {
      outline: none;
    }
  }

  .bm-item.selected {
    outline: 1px solid papayawhip;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
    top: 0;
  }
`;

export const NavbarWrapper = styled.div`
  background-color: lavender;
  height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .search-input {
    margin-left: 80px;
    background-color: snow;
    border-radius: 20px;
    line-height: 1rem;
    padding: 4px 8px;
    font-size: 18px;
    :focus {
      outline: none;
    }
  }
`;
