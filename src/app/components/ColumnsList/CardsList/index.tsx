import React from 'react';
import "./styles.scss";


interface IProps {
    list: ITask[],
    class?: string,
}

const CardsList = (props: IProps) => {
    return <ul className={`cards-list ${props.class ? props.class : ""}`}>{props.list.map((el) => {
        return <li key={el.id}>{el.title}</li>
    })}</ul>
}

export default CardsList;