import React, {useState} from "react";


function Book(
    id,
    bookName,
    img,
    count
){
    const [isExist, isBookExist] = useState(true)
    count !== 0 ? isBookExist(true) : isBookExist(false)
    return(
        <section className="flex-container">
            <div className="book-bg">
                <ul className="book">
                    <img className="book-img" alt={'bookImg'} src={img}/>
                    <li>
                        <div className={'name-book justify-content-between'}>
                            <div>{bookName}</div>
                            <div>Количество:&nbsp {count}</div>
                        </div>
                        <div className={'btn-book-locked'}>
                            <div className={'btn__menu'}>Забронировать
                            </div>
                        </div>


                        <div className={'btn-book'}>
                            <div className={'btn__menu'}>Забронировать</div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

    )
}
export default Book;