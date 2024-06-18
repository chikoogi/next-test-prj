"use client"
import styled from "./style.module.scss";
import {useState} from "react";
import {useDrag, useDrop} from "react-dnd";


function Folder({name}:any) {
    const [{ opacity, isDragging }, drag, preview] = useDrag(
        {
            type: "folder",
            item: { name },
            collect: (monitor: any) => ({
                opacity: monitor.isDragging() ? 0.2 : 1,
                isDragging: monitor.isDragging(),
            }),
            end: (item, monitor) => {},
        },
        [name]
    );



    const [{isOver, canDrop}, drop] = useDrop(() => ({
        accept: ["table"],
        drop: (item: any, monitor) => {
            console.log(item);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }),[])

    const [{isOver :isOver2, canDrop:canDrop2}, drop2] = useDrop(() => ({
        accept: ["folder"],
        drop: (item: any, monitor) => {
            console.log(item);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }),[])


    const isActive = isOver && canDrop
    let backgroundColor = '#fff'
    if (isActive) {
        backgroundColor = 'darkgreen'
    }

return (
    <>
        <div className={styled.folderWrapper}
             style={{backgroundColor}}
             ref={(node) => {
                 drop(node);
                 drag(node);
             }}>
            {name}
        </div>

        <div className={styled.sortableWrapper} ref={drop2}>
            <div className={styled.sortableLine}
                 style={{opacity: isOver2 ? 1 : 0}}
            />
        </div>
    </>)

}

export default function FolderList() {

    const FOLDER_LIST = [...new Array(40)];
    const [show, setShow] = useState(false);

    return (
        <div className={styled.wrapper}>
        <div className={`${styled.leftBox} ${show ? styled.show : ""}`}>
                <div className={styled.folderWrapper}>
                    새 폴더 추가
                </div>
                {
                    FOLDER_LIST.map((_,index)=>{
                        return (
                            <Folder name={`새폴더 ${index+1}`} />
                        )
                    })
                }
            </div>
            <div className={styled.rightBox}>
                <button onClick={() => setShow(!show)}>{show ? "접기" : "펼치기"}</button>
            </div>
        </div>
    )
}