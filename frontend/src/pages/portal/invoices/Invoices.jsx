import React,{useState,useEffect} from 'react'
import { useCourse } from '@/contexts/CourseContext'
import { DataTable } from './components/data-table'
import {columns} from "./components/columns"
import { data } from 'react-router-dom'

const Invoices = () => {
  const {getallInvoices}=useCourse()
  
  const data = [
    {
      id: "11113456",
      customerId: 416,
      photoId: "t6754",
      date: " 2024-04-09",
      amount: 400,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magnam max incidunt labore sequi hic provident, ab a repellendus ut molestiae vel nisi architecto delectus tempore laboriosam tempora fugit minus",
    },
    {
      id: "2222456",
      customerId: 300,
      photoId: "6789",
      date: " 2026-04-09",
      amount: 300,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magnam max incidunt labore sequi hic provident, ab a repellendus ut molestiae vel nisi architecto delectus tempore laboriosam tempora fugit minus",
    },
    {
      id: "2222456",
      customerId: 300,
      photoId: "6789",
      date: " 2026-04-09",
      amount: 300,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magnam max incidunt labore sequi hic provident, ab a repellendus ut molestiae vel nisi architecto delectus tempore laboriosam tempora fugit minus",
    },
    {
      id: "2222456",
      customerId: 300,
      photoId: "6789",
      date: " 2026-04-09",
      amount: 300,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magnam max incidunt labore sequi hic provident, ab a repellendus ut molestiae vel nisi architecto delectus tempore laboriosam tempora fugit minus",
    },
    {
      id: "3333567",
      customerId: 376,
      photoId: "34567",
      date: " 2023-08-05",
      amount: 200,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magnam max incidunt labore sequi hic provident, ab a repellendus ut molestiae vel nisi architecto delectus tempore laboriosam tempora fugit minus",
    },
    {
      id: "44446789",
      customerId: 356,
      photoId: "56789",
      date: " 2024-03-09",
      amount: 600,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magnam max incidunt labore sequi hic provident, ab a repellendus ut molestiae vel nisi architecto delectus tempore laboriosam tempora fugit minus",
    },
    {
      id: "2222456",
      customerId: 300,
      photoId: "6789",
      date: " 2026-04-09",
      amount: 300,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magnam max incidunt labore sequi hic provident, ab a repellendus ut molestiae vel nisi architecto delectus tempore laboriosam tempora fugit minus",
    },
    {
      id: "3333567",
      customerId: 376,
      photoId: "34567",
      date: " 2023-08-05",
      amount: 200,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magnam max incidunt labore sequi hic provident, ab a repellendus ut molestiae vel nisi architecto delectus tempore laboriosam tempora fugit minus",
    },
    {
      id: "44446789",
      customerId: 356,
      photoId: "56789",
      date: " 2024-03-09",
      amount: 600,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magnam max incidunt labore sequi hic provident, ab a repellendus ut molestiae vel nisi architecto delectus tempore laboriosam tempora fugit minus",
    },
  ];
  useEffect(()=>{
    const fetchInvoices=async()=>{
      try{
        const response=await getallInvoices()
        console.log(response)
      }
      catch(error){
        console.log(error)
      }
    }
    fetchInvoices()

  },[])
  const handleDetailClick=()=>{

  }
console.log("column",columns)
  return (
    <div className=' flex justify-center'>
      <DataTable 
      columns={columns({ handleDetailClick })}

      data={data}/>
    </div>
  )
}

export default Invoices