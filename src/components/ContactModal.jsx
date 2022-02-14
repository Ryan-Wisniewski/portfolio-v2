import React from 'react'
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/PacmanLoader";
// faseloader, moonloader

const ContactModal = () => {
    const override = css`
        display: block;
        margin: 8rem auto;
        `;
    return (
        <div className="sweet-loading">
        <ClipLoader
            css={override}
            size={150}
            size={"150px"}
            color={"yellow"}
            loading={true}
        />
      </div>
    )
}

export default ContactModal
