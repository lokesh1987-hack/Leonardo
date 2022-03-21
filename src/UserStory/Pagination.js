import React from 'react'

function Pagination({ perPageData, totalCards, paginate ,currentPage, handlePrev, handleNext }) {


    const pageNumber = []

    for (let i = 1; i <= Math.ceil(totalCards / perPageData); i++) {
        pageNumber.push(i)
    }
    

    const style = {
        active :{
            backgroundColor:"blue",
            color:"white",
            PointerEvent:"auto"
        },
        inactive:{
            color:"blue",
            PointerEvent:"auto"
        }
    }



    return (
        <div className="m-5">
            <div className="container">
            <div className="d-flex justify-content-center">
                <ul className="pagination shadow" >
                    <button  className="page-item page-link" onClick={()=>handlePrev()}>Prev</button>
                    {pageNumber.map((number) => {
                        return (<li key={number} className="page-item page-link" style={(number===currentPage)?style.active:style.inactive}><a onClick={() => paginate(number)}>{number}</a></li>)
                    })}
                    <button  className="page-item page-link" onClick={()=>handleNext()}>Next</button>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default Pagination