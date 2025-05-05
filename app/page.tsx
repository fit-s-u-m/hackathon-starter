'use client'

import { useQuery } from "@tanstack/react-query";
import { columns } from "@/columns/employee";
import { DataTable } from "@/components/table/data-table";
import axios from "axios";
const url = 'https://dummyjson.com/users'
export default function PrivatePage() {
  const getEmployee = async () => {
    const response = await axios.get(url)
    console.log(response)
    return response.data.users
  }
  const { data, isFetching, isPending, error } = useQuery({ queryFn: () => getEmployee(), queryKey: ["employee"] })
  console.log(error)
  return (
    <div className="flex items-center justify-center h-full">
      {
        data ? (
          <DataTable data={data} columns={columns} />
        ) : null
      }
      {
        isFetching ? (
          <div>is Loading</div>
        ) : null
      }
      {
        error ? (
          <div>
            <div className="text-red-500">{error.name}</div>
            <div className="text-gray-400">{error.message}</div>
          </div>
        ) : null
      }
    </div>
  )
}
