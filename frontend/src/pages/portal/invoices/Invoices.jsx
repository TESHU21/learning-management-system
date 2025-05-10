import React,{useState,useEffect} from 'react'
import { useCourse } from '@/contexts/CourseContext'
import { DataTable } from './components/data-table'
import {columns} from "./components/columns"
import { data } from 'react-router-dom'

const Invoices = () => {
  const {getallInvoices}=useCourse()
  const [showValues,setShowValues]=useState(false)
  const [data,setData]=useState([])
  const [visibleRows, setVisibleRows] = useState({});
  const [isloading,setIsloading]=useState(false)

  
  // const data = [
  //   {
  //     id: "1",
  //     customerId: 416,
  //     photoId: "t6754",
  //     date: " 2024-04-09",
  //     amount: 400,
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magnam max incidunt labore sequi hic provident, ab a repellendus ut molestiae vel nisi architecto delectus tempore laboriosam tempora fugit minus",
  //   },
  //   {
  //     id: "2",
  //     customerId: 300,
  //     photoId: "6789",
  //     date: " 2026-04-09",
  //     amount: 300,
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magnam max incidunt labore sequi hic provident, ab a repellendus ut molestiae vel nisi architecto delectus tempore laboriosam tempora fugit minus",
  //   },
  //   {
  //     id: "3",
  //     customerId: 300,
  //     photoId: "6789",
  //     date: " 2026-04-09",
  //     amount: 300,
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magnam max incidunt labore sequi hic provident, ab a repellendus ut molestiae vel nisi architecto delectus tempore laboriosam tempora fugit minus",
  //   },
  //   {
  //     id: "4",
  //     customerId: 300,
  //     photoId: "6789",
  //     date: " 2026-04-09",
  //     amount: 300,
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magnam max incidunt labore sequi hic provident, ab a repellendus ut molestiae vel nisi architecto delectus tempore laboriosam tempora fugit minus",
  //   },
  //   {
  //     id: "5",
  //     customerId: 376,
  //     photoId: "34567",
  //     date: " 2023-08-05",
  //     amount: 200,
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magnam max incidunt labore sequi hic provident, ab a repellendus ut molestiae vel nisi architecto delectus tempore laboriosam tempora fugit minus",
  //   },
  //   {
  //     id: "6",
  //     customerId: 356,
  //     photoId: "56789",
  //     date: " 2024-03-09",
  //     amount: 600,
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magnam max incidunt labore sequi hic provident, ab a repellendus ut molestiae vel nisi architecto delectus tempore laboriosam tempora fugit minus",
  //   },
  //   {
  //     id: "7",
  //     customerId: 300,
  //     photoId: "6789",
  //     date: " 2026-04-09",
  //     amount: 300,
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magnam max incidunt labore sequi hic provident, ab a repellendus ut molestiae vel nisi architecto delectus tempore laboriosam tempora fugit minus",
  //   },
  //   {
  //     id: "8",
  //     customerId: 376,
  //     photoId: "34567",
  //     date: " 2023-08-05",
  //     amount: 200,
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magnam max incidunt labore sequi hic provident, ab a repellendus ut molestiae vel nisi architecto delectus tempore laboriosam tempora fugit minus",
  //   },
  //   {
  //     id: "9",
  //     customerId: 356,
  //     photoId: "56789",
  //     date: " 2024-03-09",
  //     amount: 600,
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magnam max incidunt labore sequi hic provident, ab a repellendus ut molestiae vel nisi architecto delectus tempore laboriosam tempora fugit minus",
  //   },
  // ];
  useEffect(()=>{
    const fetchInvoices=async()=>{
      try{
        const response=await getallInvoices()
        console.log(response)
       
        // Extracted data
        const extracted=response.data.invoices.map((invoice,index)=>({
          id:index+1,
          amount:invoice.amount,
          date:new Date(invoice.createdAt).toISOString().split('T')[0],
          status: invoice.status, }))
         setData(extracted)
      }
     
      catch(error){
        console.log(error)
      }
    }
    fetchInvoices()

  },[])
 
  const handleDetailClick = (row) => {
    setVisibleRows((prev) => ({
      ...prev,
      [row.id]: !prev[row.id], // Toggle visibility
    }));
  };
  return (
    <div className=' flex justify-center'>
      <DataTable 
      columns={columns({ handleDetailClick,visibleRows })}

      data={data}/>
    </div>
  )
}

export default Invoices