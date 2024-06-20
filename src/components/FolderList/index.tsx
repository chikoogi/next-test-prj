"use client"
import styled from "./style.module.scss";
import {useCallback, useState} from "react";
import {useDrag, useDrop} from "react-dnd";


function Folder({item, findCard, moveCard}:any) {
    const [selected, setSelected] = useState<boolean>(false);
    const [{ opacity, isDragging }, drag, preview] = useDrag(
        {
            type: "folder",
            item: item,
            collect: (monitor: any) => ({
                opacity: monitor.isDragging() ? 0.2 : 1,
                isDragging: monitor.isDragging(),
            }),
            end: (item, monitor) => {},
        },
        [item.id, item.name]
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
        drop: (dropItem:any, monitor) => {
            console.log(dropItem, item);
            moveCard(dropItem.id, item.id);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }),[moveCard])


    const isActive = isOver && canDrop
/*    let backgroundColor = '#fff'
    if (isActive) {
        backgroundColor = '#EFF2FF'
    }*/

return (
    <div className={styled.folder}>
        <div className={`${styled.folderWrapper} ${selected ? styled.selected : ""} ${isActive ? styled.isActive : ""}`}
             ref={(node) => {
                 drop(node);
                 drag(node);
             }}
            onClick={() => setSelected(!selected)}
        >
            {item.name}
        </div>

        <div className={styled.sortableWrapper} ref={(node) => {
            drop2(node);
        }}>
            <div className={styled.sortableLine}
                 style={{opacity: isOver2 ? 1 : 0}}
            />
        </div>
    </div>)

}

export default function FolderList() {
    const [cards, setCards] = useState<any[]>([{
        id: 1,
        name: "폴더 1",
    },{
        id: 2,
        name: "폴더 2",
    },{
        id: 3,
        name: "폴더 3",
    },{
        id: 4,
        name: "폴더 4",
    },{
        id: 5,
        name: "폴더 5",
    }]);

    // const FOLDER_LIST = [...new Array(40)];
    const [show, setShow] = useState(false);

    const addCard = useCallback(() => {
        if(cards.length >= 17) return;
        setCards(prev => {
            const idx = prev.length;
            return [...prev, {
                id: idx + 1,
                name: `새폴더 ${idx + 1}`
            }]
        })

    },[cards]);

    const findCard = useCallback(
        (id: string) => {
            const card = cards.find((v: any) => `${v.id}` === id.toString()) as any;
            return {
                ...card,
                index: cards.indexOf(card),
            };
        },
        [cards]
    );

    const moveCard = useCallback(
        async (fromId: string, toId: string) => {
            const fromCard = findCard(fromId);
            const toCard = findCard(toId);
            const movingCard = cards.splice(fromCard.index, 1);
            cards.splice(toCard.index, 0, movingCard[0]);
            setCards([...cards]);


        },
        [findCard, cards]
    );


    return (
        <div className={styled.wrapper}>
            <div className={`${styled.leftBox} ${show ? styled.show : ""}`}>
                <button className={styled.addFolderWrapper} onClick={addCard}>
                    새 폴더 추가
                </button>
                <div className={styled.sortableWrapper} >
                    <div className={styled.sortableLine}
                         style={{opacity: 0}}
                    />
                </div>
                {
                    cards.map((item, index) => {
                        return (
                            <Folder key={item.id} item={item}
                                    moveCard={moveCard}
                                    findCard={findCard}/>
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