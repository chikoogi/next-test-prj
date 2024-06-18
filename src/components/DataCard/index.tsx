"use client"

import styled from "./style.module.scss";
import {useDrag} from "react-dnd";

function Card({name}: any) {
    const [{ isDragging }, drag, preview] = useDrag(
        () => ({
            type: "table",
            item: {name},
            collect: (monitor) => {
                return {
                    isDragging: monitor.isDragging(),
                };
            },
        }),
        [name]
    );

    return (
        <div className={styled.tableWrapper} ref={drag as any}>
            {name}
        </div>
    )

}


function DataCard() {

    const LIST = [...new Array(6)];
    const TABLE_LIST = [...new Array(10)];



    return (
        <div className={styled.wrapper}>
            {
                LIST.map((item, index) => (
                    <div className={styled.folderWrapper}>
                        {`폴더 ${index + 1}`}
                        {
                            TABLE_LIST.map((_, index) => {
                                return (
                                    <Card name={`table_${index}`} key={index} />
                                )
                            })
                        }

                    </div>
                ))
            }

        </div>


    )
}

export default DataCard;