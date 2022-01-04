import React, { FunctionComponent } from "react";
import { LayoutProps } from "./Layout.props";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Sidebar } from "./Sidebar/Sidebar";
import styles from "./Layout.module.css";

const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <>
            <Header/>
            <div>
                <Sidebar/>
                { children }
            </div>
            <Footer/>
        </>
    )
};


export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponents (props: T): JSX.Element {
        return (
            <Layout>
                <Component { ...props } />
            </Layout>
        );
    };
};