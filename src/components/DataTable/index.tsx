"use client"

import styled from "./style.module.scss";
import {DragPreviewImage, useDrag} from "react-dnd";
import folder from "./folder.png";
import Image from "next/image";
import Link from "next/link";

function TestImage() {

    return (
        <Image src={folder} alt="프로필 이미지" width={200} height={200} />
    )
}

function TableRow({id}) {
    const [{ isDragging }, drag, preview] = useDrag(
        () => ({
            type: "table",
            item: {id},
            collect: (monitor) => {
                return {
                    isDragging: monitor.isDragging(),
                };
            },
        }),
        [id]
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
                }}>{id}</td>
                <td>Orange</td>
                <td>Orange</td>
                <td>Orange</td>
            </tr>
        </>


    )
}


export default function DataTable() {

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
                LIST.map((_,index)=>{

                    return (
                        <TableRow id={index} key={index} />
                )
                })
            }


            </tbody>

        </table>
    )
}