"use client"

import styled from "./styles.module.scss";
import FolderList from "@/components/FolderList";
import DataTable from "../../components/DataTable";
import DataCard from "@/components/DataCard";
import {useState} from "react";

export default function DataPool() {
    const [type, setType] = useState<string>("table");
    const [preview, setPreview] = useState<boolean>(false);


    return (
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
                        {type === "table" && <DataTable/>}
                        {type === "card" && <DataCard/>}
                    </div>
                </div>
            </div>
            {preview && <div className={styled.previewWrapper}>
                미리보기
            </div>}
        </div>
    )
}