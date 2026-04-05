import { useState } from "react";
import StatsCards from "../components/StatsCards";
import Filters from "../components/Filters";
import TransactionTable from "../components/TransactionTable";
import TransactionModal from "../components/TransactionModal";
import EditModal from "../components/EditModal";
import DeleteModal from "../components/DeleteModal";

const Transactions = () => {
  const [open, setOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  return (
    <div className="p-6 bg-black min-h-screen text-white space-y-6">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <p className="text-emerald-400 text-xs tracking-widest">
            FINANCIAL RECORDS
          </p>
          <h1 className="text-4xl font-bold">Transactions</h1>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="bg-emerald-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-emerald-300 transition"
        >
          + NEW TRANSACTION
        </button>
      </div>

      <StatsCards />
      <Filters />
      <TransactionTable
        isEditOpen={isEditOpen}
        setIsEditOpen={setIsEditOpen}
        isDeleteOpen={isDeleteOpen}
        setIsDeleteOpen={setIsDeleteOpen}
      />
      {open && <TransactionModal onClose={() => setOpen(false)} />}
      <EditModal
        open={isEditOpen}
        onClose={() => setIsEditOpen(false)}
      />

      <DeleteModal
        open={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={() => {
          console.log("delete");
          setIsDeleteOpen(false);
        }}
      />
    </div>
  );
};

export default Transactions;
