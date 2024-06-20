"use client"

import styled from "@/app/data-pool/styles.module.scss";
import FolderList from "@/components/FolderList";
import {ReactNode, useState} from "react";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";


function DataPoolListLayout({children, card, table}
                                : {children: ReactNode, card: ReactNode, table: ReactNode}) {
    const [type, setType] = useState<string>("table");
    const [preview, setPreview] = useState<boolean>(false);


    return (
        <>
            <DndProvider backend={HTML5Backend}>
                <div className={styled.wrapper}>
                    <div className={styled.mainWrapper}>
                        <div className={styled.topWrapper}>
                            <div className={styled.rightSide}>
                                <button onClick={() => setType("card")}>card</button>
                                <button onClick={() => setType("table")}>table</button>
                                <button onClick={() => setPreview(!preview)}>preview</button>
                            </div>
                            <FolderList/>
                        </div>
                        <div className={styled.bottomWrapper}>
                            <div className={styled.leftContents}>Left</div>
                            <div className={styled.rightContents}>
                                {type === "card" && card}
                                {type === "table" && table}
                            </div>
                        </div>
                    </div>
                    {preview && <div className={styled.previewWrapper}>
                        미리보기
                    </div>}
                </div>
            </DndProvider>
        </>



    )
}

export default DataPoolListLayout;