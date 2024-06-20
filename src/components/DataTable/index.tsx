"use client"

import styled from "./style.module.scss";
import {DragPreviewImage, useDrag} from "react-dnd";
import folder from "./folder.png";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

function TestImage() {

    return (
        <Image src={folder} alt="프로필 이미지" width={200} height={200} />
    )
}

function TableRow({item}) {
    const [{ isDragging }, drag, preview] = useDrag(
        () => ({
            type: "table",
            item: item,
            collect: (monitor) => {
                return {
                    isDragging: monitor.isDragging(),
                };
            },
        }),
        [item]
    );

    return (
        <>
            {/*<TestImage />*/}
            {/*<DragPreviewImage*/}
            {/*    connect={preview}*/}
            {/*    src={<TestImage />}*/}
            {/*/>*/}
            <tr>
                <td ref={(node) => {
                    // preview(node);
                    drag(node);
                }}>{item.name}</td>
                <td>{item.folder.join(", ")}</td>
                <td>{item.creator}</td>
                <td>{item.createdAt}</td>
            </tr>
        </>


    )
}


export default function DataTable() {

    const [table, setTable] = useState<any[]>([
        {
            name: "Fact Table Name",
            folder: ["폴더 1"],
            creator: "admin",
            createdAt: "2024.06.01",
        },
        {
            name: "Fact Table Name",
            folder: ["폴더 2"],
            creator: "admin",
            createdAt: "2024.06.01",
        },
        {
            name: "Fact Table Name",
            folder: ["폴더 3"],
            creator: "admin",
            createdAt: "2024.06.01",
        },{
            name: "Fact Table Name",
            folder: ["폴더 1"],
            creator: "admin",
            createdAt: "2024.06.01",
        },{
            name: "Fact Table Name",
            folder: ["폴더 1","폴더 2"],
            creator: "admin",
            createdAt: "2024.06.01",
        }

    ])

    const LIST = [...new Array(30)];

    return (
        <table className={styled.table}>
            <tbody>
            <tr>
                <th>데이터명</th>
                <th>폴더</th>
                <th>생성자</th>
                <th>생성 일시</th>
            </tr>
            {
                table.map((item,index)=>{

                    return (
                        <TableRow item={item} key={index} />
                )
                })
            }


            </tbody>

        </table>
    )
}