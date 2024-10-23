import React from 'react';
import "./Board.css";
import { MoreHorizontal, Plus} from 'react-feather';

import Card from '../Card/Card'

const Board = ( props ) => {

    console.log(props)
    const logoReference = {
        "Backlog": <img src={process.env.PUBLIC_URL + "/icons/Backlog.svg"} className='logo-pic' alt="Backlog" />,
        "Todo": <img src={process.env.PUBLIC_URL + "/icons/To-do.svg"} className='logo-pic' alt="Todo" />,
        "In progress": <img src={process.env.PUBLIC_URL + "/icons/in-progress.svg"} className='logo-pic' alt="In progress" />,
        "Done": <img src={process.env.PUBLIC_URL + "/icons/Done.svg"} className='logo-pic' alt="Done" />,
        "Cancelled": <img src={process.env.PUBLIC_URL + "/icons/Cancelled.svg"} className='logo-pic' alt="Cancelled" />
    };

  return (
    <div className='board'>
        <div className='board-top'>
            <div className='board-top-left'>
                {props.groupingOption === "status" && logoReference[props.title]}
                <p className='board-title bold'>{props.title}</p>
                <span className='board-count'>{props.count}</span>
            </div>
            <div className='board-top-right'>
                <MoreHorizontal className='icon'/>
                <Plus className='icon'/>
            </div>
        </div>
        <div className='card-container'>
            {props.tickets.map((ticket) => (
                <Card key={ticket.id} ticket={ticket} groupBy={props.groupingOption} users={props.users} />
            ))}
        </div>
    </div>
  );
};

export default Board