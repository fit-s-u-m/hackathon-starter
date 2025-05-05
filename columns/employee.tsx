"use client"

import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react"

export type Employee = {
  id: string
  firstName: string
  lastName: string
  email: string
  age: number
}

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: "id",
    header: "Id",
    enableMultiSort: true
  },
  {
    accessorKey: "firstName",
    header: "First name",
    enableHiding: false,

  },
  {
    accessorKey: "lastName",
    header: "LastName",
    enableSorting: false,
  },
  {
    accessorKey: "age",
    header: ({ column }) => {
      return (
        <div>
          Age
          < Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            <ArrowUp />
          </Button >
          < Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "desc")}
          >
            <ArrowDown />
          </Button >
        </div>
      )
    }
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <div>
          Email
          < Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            <ArrowUp />
          </Button >
          < Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "desc")}
          >
            <ArrowDown />
          </Button >
        </div>
      )
    },
    cell: ({ row }) => (
      row.index % 2 == 0 ? (
        <div className="lowercase bg-background p-2" >
          {row.getValue("email")}
        </div >
      ) : (
        <div className="lowercase  bg-secondary p-2 rounded-sm" >
          {row.getValue("email")}
        </div >
      )
    ),
  },
]

