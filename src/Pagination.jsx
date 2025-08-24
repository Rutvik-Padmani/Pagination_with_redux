import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPageData } from './service/pageservice';
import { PageRequest } from './slice/pageslice';

export default function Pagination() {

    
    const [pagesize,setPageSize] = useState(5);
    const [page,setPage] = useState(1);
    const pagedata = useSelector(y => y.page.data)

    const dis = useDispatch();

    useEffect(() => {
        dis(PageRequest())
    },[page,pagesize])


    const ABC = () =>{
       let p = [];

       for(let i = 0 ; i<= Math.ceil(pagedata.length/pagesize); i++){
        p.push(i)
       }

       return p ;
    }
  return (
    <div>

        <ul>
            {
               pagedata.slice((page-1)*pagesize, ((page-1)*pagesize)+pagesize).map((p) => {
                    return (<li key={p.id}>{p.title}</li>)
                })
            }
        </ul>

        {

        ABC().map((v)=>{

        return (<button onClick={()=>{
            setPage(v);
          }}>{v}</button>)
        })


            }

    </div>
  )
}
