import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const mobile = (styles) => `
  @media only screen and (max-width: 600px) {
    ${styles}
  }
`;

const Container = styled.div`
  height: 60px;
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: white;
  ${mobile(`
    height: 50px;
  `)}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile(`
    padding: 10px 0px;
  `)}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile(`
    justify-content: center;
  `)}
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile(`
    display: none;
  `)}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile(`
    margin-left: 10px;
  `)}
`;

const Input = styled.input`
  border: none;
  ${mobile(`
    width: 50px;
  `)}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile(`
    font-size: 24px;
  `)}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile(`
    flex: 2;
    justify-content: center;
  `)}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile(`
    font-size: 12px;
    margin-left: 10px;
  `)}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Logo>StyleSaga.</Logo>
          </Link>
        </Center>
        <Right>
          <Link
            to="/Register"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link
            to="/Login"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MenuItem>SIGN IN</MenuItem>
          </Link>
          <Link to="/Cart" style={{ textDecoration: "none", color: "inherit" }}>
            <MenuItem>
              <Badge badgeContent={2} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
