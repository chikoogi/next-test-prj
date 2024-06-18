"use client"

import styled from "./styles.module.scss";
import FolderList from "@/components/FolderList";
import DataTable from "../../components/DataTable";
import DataCard from "@/components/DataCard";
import {useState} from "react";

export default function DataPool() {
    const [type, setType] = useState<string>("table");


    return (
        <div className={styled.wrapper}>
            <div className={styled.topWrapper}>
                <div className={styled.rightSide}>
                    <button onClick={() => setType("card")}>card</button>
                    <button onClick={() => setType("table")}>table</button>
                </div>
                <FolderList/>
            </div>
            <div className={styled.mainWrapper}>
                <div className={styled.leftContents}>Left</div>
                <div className={styled.rightContents}>
                    {type === "table" && <DataTable />}
                    {type === "card" && <DataCard />}
                </div>
            </div>
        </div>
    )
}