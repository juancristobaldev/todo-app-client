import React from "react";
import Main from "../Main";
import Section from "../Section";
import '../../styles/scss/Login.scss';

const LoginLayout = ({ children,width }) => {
    return(
        <Main className="mainLogin">
        <Section className="sectionFormLogin">
            { children }
        </Section>
        <Section
        className="welcomeLogin">
            <div>
                {width > 600 && 
                <React.Fragment>
                    <h1>Task's App</h1>
                    <h3>
                        Control your daily's task's
                    </h3>
                </React.Fragment>
                }
            </div>
        </Section>
    </Main>
)
}

export default LoginLayout;