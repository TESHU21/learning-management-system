import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

export const columns = ({ handleDetailClick }) => [
  {
    accessorKey: "id",
    header: "Sales Id",
    cell: ({ row }) => <div className=" capitalize">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "customerId",
    header: "Customer ID",
    filterFn: "includesString", // Add this line
    cell: ({ row }) => (
      <div className=" capitalize">{row.getValue("customerId")}</div>
    ),
  },
  {
    accessorKey: "photoId",
    header: "Photo Id",
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("photoId")}</div>
    ),
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("date")}</div>,
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
    id: "details",
    header: "Details",
    cell: ({ row }) => (
      <Button onClick={() => handleDetailClick(row.original)}>detail</Button>
    ),
  },
];
