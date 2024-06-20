import {ReactNode} from "react";
import styled from "./styles.module.scss";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

export default function DataPoolLayout({children, modal}: {children: ReactNode, modal: ReactNode}) {


    return (
        <>
            <section className={styled.layoutWrapper}>
                {children}
            </section>
            {modal}
        </>


    )
}