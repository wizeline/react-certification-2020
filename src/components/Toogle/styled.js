import styled from "styled-components";

export const Container = styled.div`
    width: 100px;
    display: flex;

`;
export const Label = styled.label`
    width: 58px;
    height: 38px;
    display: none;
    padding: 12px;
    z-index: 0;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    flex-shrink: 0;
    vertical-align: middle;
    margin-right: -12px;
    @media (min-width: 1024px) {
      display: inline-flex;
    }
    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
    }
    .input { 
        opacity: 0;
        width: 0;
        height: 0;
    }
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: .4s;
      transition: .4s;
    }

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}
input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
`;