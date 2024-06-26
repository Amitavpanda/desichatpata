"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

 
import { Button } from "@repo/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@repo/ui/dropdownMenu"
import { info } from "@repo/logs/logs"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Order = {
  id : string
  name: string;
  phoneNumber: string
  address : string
  productsOrdered : string[]
  orderStatus : string
}

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "id",
    header: "OrderID",
  },
  {
    accessorKey: "name",
    header: "name of the customer",
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone Number",
  },

  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "productsOrdered",
    header: "Products Ordered",
  },
  {
    accessorKey: "orderStatus",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => {
            info("the button is clicked");
            column.toggleSorting(column.getIsSorted() === "asc")}}
        >
          Order Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },

  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => {
            info("the button is clicked");
            column.toggleSorting(column.getIsSorted() === "asc")}}
        >
          created At
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },

  },

  {
    accessorKey: "updatedAt",
    header: "Updated At",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
