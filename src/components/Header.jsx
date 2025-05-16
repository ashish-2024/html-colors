import React from "react";
import { FaGithub } from "react-icons/fa";
import styled from "styled-components";

const Header = () => {
    const openGithub = () => {
        window.open(
            "https://github.com/ashish-2024/html-colors",
            "_blank",
            "noopener,noreferrer"
        );
    };

    return (
        <>
            <Heading>
                HTML Colors{" "}
                <FaGithub
                    title="GitHub code"
                    className="icon"
                    onClick={openGithub}
                    style={{ cursor: "pointer" }}
                />
            </Heading>
        </>
    );
};

export default Header;

const Heading = styled.h1`
    /* border: 1px solid #f00000; */
    height: 100px;
    padding: 15px;
    display: flex;
    align-items: center;
    gap: 50px;
`;
