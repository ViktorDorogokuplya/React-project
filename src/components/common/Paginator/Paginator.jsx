import React from "react";
import style from "./Paginator.module.css"


const Paginator = (props) => {
    
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);
    }

    pages = pages.slice(0, 10);

    return <div>
                {pages.map(page => {
                return <span className={props.currentPage === page ? style.selectedPage : ""} onClick={(e) =>{props.onPageChanged(page)}}>{page + ' '}</span>})}
            </div>
}

export default Paginator;