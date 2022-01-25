import react, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faHeart,
  faMapMarkerAlt,
  faPencilAlt,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
// import PostListContainer from "./PostListView"
import { useHistory } from "react-router-dom";
const Outer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  z-index: 100;
  /* position: sticky; */
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  @media screen and (min-width: 1081px) {
    width: 1080px;
  }
`;

const Buttons = styled.div`
  background-color: WHITE;
  height: 70px;
  right: 0;
  bottom: 0;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 101;
  border-top: 1px solid #dbdbdb;

  @media screen and (min-width: 1081px) {
    // position: fixed;
    // background-color: white;
    // border-top: 1px solid #dbdbdb;
    // border-left: 1px solid #dbdbdb;
    // position: fiexd;
    // width: 400px;
    display: none;
  }
`;

const Button1 = styled.button`
  padding: 0.5rem;
  margin: 0.5rem;
  font-size: 2rem;
  img:hover {
    filter: opacity(0.2) drop-shadow(0 0 0 red);
    background: url("img/home.png");
  }
`;
const Button2 = styled.button`
  padding: 0.5rem;
  margin: 0.5rem;
  font-size: 2rem;
  img:hover {
    filter: opacity(0.2) drop-shadow(0 0 0 red);
    background: url("img/bookmark.png");
  }
`;
const Button3 = styled.button`
  padding: 0.5rem;
  margin: 0.5rem;
  font-size: 2rem;
  img:hover {
    filter: opacity(0.2) drop-shadow(0 0 0 red);
    background: url("img/location.png");
  }
`;
const Button4 = styled.button`
  padding: 0.5rem;
  margin: 0.5rem;
  font-size: 2rem;
  img:hover {
    filter: opacity(0.2) drop-shadow(0 0 0 red);
    background: url("img/pencil.png");
  }
`;
const Button5 = styled.button`
  padding: 0.5rem;
  margin: 0.5rem;
  font-size: 2rem;
  img:hover {
    filter: opacity(0.2) drop-shadow(0 0 0 red);
    background: url("img/setting.png");
  }
`;
export default function MenuBar() {
  const [url1, setUrl1] = useState("img/home0.png");
  const [curClick, setCurClick] = useState("");
  const history = useHistory();
  const [selectBtn, setSelectBtn] = useState("");
  return (
    <Outer className="menuBar">
      <Buttons>
        <Button1>
          <img src={url1} onClick={() => history.push("/homeorlogin")} />
        </Button1>
        <Button2>
          <img
            src="https://img.icons8.com/ios/45/000000/bookmark-ribbon--v1.png"
            onClick={() => history.push("/bookmarkorlogin")}
          />
        </Button2>
        <Button3>
          <img
            src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/45/000000/external-location-map-location-flatart-icons-outline-flatarticons-13.png"
            onClick={() => history.push("/map")}
          />
        </Button3>
        <Button4>
          <img
            src="https://img.icons8.com/ios/45/000000/pencil--v1.png"
            onClick={() => history.push("/writeorlogin")}
          />
        </Button4>
        <Button5>
          <img
            src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/45/000000/external-user-interface-kiranshastry-lineal-kiranshastry.png"
            onClick={() => history.push("/moreoruserinfo")}
          />
        </Button5>
      </Buttons>
    </Outer>
  );
}
