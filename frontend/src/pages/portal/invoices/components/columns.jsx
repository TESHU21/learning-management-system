import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { Eye } from "lucide-react";

export const columns = ({ handleDetailClick }) => [
  {
    accessorKey: "id",
    header: "#",
    cell: ({ row }) => <div className=" capitalize">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "date",
    header: "Date",
    filterFn: "includesString", // Add this line
    cell: ({ row }) => (
      <div className=" capitalize">{row.getValue("date")}</div>
    ),
  },

 
  {
    accessorKey: "amount",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Amount
        <ArrowUpDown className=" ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "ETB",
      }).format(amount);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "amount",
    header: "Status",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "ETB",
      }).format(amount);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  
  {
    id: "details",
    header: "",
    cell: ({ row }) => (
      <Eye/>
      // <Button onClick={() => handleDetailClick(row.original)}>detail</Button>
    ),
  },
];
