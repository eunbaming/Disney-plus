import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => (props.show ? "#090b13" : "transparent")};
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
  color: #fff;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  cursor: pointer;

  img {
    display: block;
    width: 100%;
  }
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  transition: all 0.2s ease 0s;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: gray;
    border-color: transparent;
  }
`;

const Input = styled.input`
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: rgba(0, 0, 0, 0.582);
  border: none;
  border-radius: 5px;
  padding: 5px;
  color: #fff;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0;
  width: 100%;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0 0 18px 0;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  opacity: 0;
`;
const SignOut = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;
const USerImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

const Nav = () => {
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [userData, setUserData] = useState({});

  const { pathname } = useLocation(); // 소문자로 쓰기 주의!
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  console.log("pathName", pathname);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("user: ", user);
      if (user) {
        if (pathname == "/") {
          navigate("/main");
        }
      } else {
        navigate("/");
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    console.log("e", e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };

  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("result", result);
        setUserData(result.user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUserData({});
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <NavWrapper show={show}>
      <Logo>
        <img
          src="/images/logo.svg"
          alt="Disney Plus Logo"
          onClick={() => {
            window.location.href = "/";
          }}
        />
      </Logo>

      {pathname == "/" ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <Input
            value={searchValue}
            onChange={handleChange}
            className="nav_input"
            type="text"
            placeholder="검색해주세요."
          />

          <SignOut>
            <USerImg src={userData.photoURL} alt={userData.displayName} />
            <DropDown>
              <span onClick={handleSignOut}>Sign Out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </NavWrapper>
  );
};

export default Nav;
