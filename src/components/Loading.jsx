import React from "react";
import { Container } from "./generals/Container";
import ReactLoading from "react-loading"
import '../styles/scss/Loading.scss'

const Loading = () => {
    return (
        <Container
            className={'loading'}
        >
            <ReactLoading type="spinningBubbles"/>
        </Container>
    )
}

export {Loading}