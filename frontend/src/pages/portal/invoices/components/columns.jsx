import { Button } from "@/components/ui/button";
import { ArrowUpDown, Eye, EyeOff } from "lucide-react";

export const columns = ({ handleDetailClick, visibleRows }) => [
  {
    accessorKey: "id",
    header: () => <div className="text-center w-full">#</div>,
    cell: ({ row }) => (
      <div className="text-center w-full">{row.getValue("id")}</div>
    ),
  },
  {
    accessorKey: "date",
    header: () => <div className="text-center w-full">Date</div>,
    cell: ({ row }) => (
      <div className="text-center w-full">{row.getValue("date")}</div>
    ),
  },
  {
    accessorKey: "amount",
    header: ({ column }) => (
      <div className="text-center w-full">
        <Button
          variant="ghost"
          onClick={() =>
            column.toggleSorting(column.getIsSorted() === "asc")
          }
          className="mx-auto flex items-center justify-center"
        >
          Amount
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
    ),
    cell: ({ row }) => {
      const id = row.original.id;
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "ETB",
      }).format(amount);

      return (
        <div className="text-center font-medium">
          {visibleRows[id] ? formatted : "***"}
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: () => <div className="text-center w-full">Status</div>,
    cell: ({ row }) => {
      const id = row.original.id;
      const status = row.getValue("status");

      return (
        <div className="text-center font-medium">
          {visibleRows[id] ? status : "***"}
        </div>
      );
    },
  },
  {
    id: "details",
    header: () => <div className="text-center w-full"></div>,
    cell: ({ row }) => {
      const id = row.original.id;
      const isVisible = visibleRows[id];

      return (
        <div className="flex justify-center">
          <Button
            variant="ghost"
            onClick={() => handleDetailClick(row.original)}
            className="p-2"
          >
            {isVisible ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </Button>
        </div>
      );
    },
  },
];
