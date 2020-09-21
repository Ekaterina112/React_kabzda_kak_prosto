import React, {useState, KeyboardEvent, useEffect} from 'react';
import styles from './SelectTwo.module.css'

export type ItemType = {
    title: string
    value: any
}

export type SelectPropsType = {
    value?: any
    items: ItemType[]
    onChange: (value: any) => void
}

function SelectTwo(props: SelectPropsType) {
    const [active, setActive] = useState<boolean>(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)//???
    const hoveredElement = props.items.find(i => i.value === hoveredElementValue)//??

    useEffect(() => {
        setHoveredElementValue(props.value);
    }, [props.value])


    const toggle = () => setActive(!active)

    const onItemClick = (value: any) => {
        props.onChange(value)
        toggle()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendedElement = e.key === "ArrowDown"
                        ? props.items[i + 1]
                        : props.items[i - 1];

                    if (pretendedElement) {
                        props.onChange(pretendedElement.value)
                        break
                    }
                }
                if (selectedItem) {
                    props.onChange(props.items[0].value)
                    return
                }
            }
        }
        if (e.key==="Enter" || e.key==="Escape") {
            setActive(false)
        }
    }
    return (
        <>
            <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={styles.main} onClick={toggle}>
                    {selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={styles.items}>
                        {props.items.map(i => <div
                            onMouseEnter={() => {
                                setHoveredElementValue(i.value)
                            }}
                            className={styles.item + ' ' + (hoveredElement === i ? styles.selected : '')}
                            key={i.value}
                            onClick={() => {//не могу вынести
                                props.onChange(i.value);
                                toggle()
                            }}>
                            {i.title}</div>)}
                    </div>
                }
            </div>
        </>
    )
}


export default SelectTwo