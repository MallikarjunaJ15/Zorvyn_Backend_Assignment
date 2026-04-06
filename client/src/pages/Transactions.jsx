import { useState, useEffect } from "react";
import StatsCards from "../components/StatsCards";
import Filters from "../components/Filters";
import TransactionTable from "../components/TransactionTable";
import TransactionModal from "../components/TransactionModal";
import EditModal from "../components/EditModal";
import DeleteModal from "../components/DeleteModal";
import { useSelector } from "react-redux";
import {
  useCreateTransactionMutation,
  useDeleteTransactionMutation,
  useGetAllTransactionWithFiltersQuery,
  useUpdateTransactionMutation,
} from "../redux/api/transactionApi";
import { useNavigate } from "react-router-dom";
import { useGetSummaryQuery } from "../redux/api/dashboardApi";
const Transactions = () => {
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.auth);
  const [open, setOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [input, setInput] = useState({
    amount: "",
    type: "",
    category: "",
    note: "",
    date: "",
  });
  const [filters, setFilters] = useState({
    search: "",
    type: "",
    category: "",
    startDate: "",
    endDate: "",
  });
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [createTransaction, { isSuccess }] = useCreateTransactionMutation();
  const { data: filteredData } = useGetAllTransactionWithFiltersQuery(filters);
  const [updateTransaction, { isSuccess: updateSuccess }] =
    useUpdateTransactionMutation();
  const [deleteTransaction] = useDeleteTransactionMutation();
  const { data } =useGetSummaryQuery();
  const handleSubmit = async () => {
    const payload = {
      ...input,
      amount: Number(input.amount),
    };
    if (selectedTransaction) {
      await updateTransaction({ id: selectedTransaction._id, data: payload });
    } else {
      await createTransaction(payload);
    }
  };
  useEffect(() => {
    if (isSuccess) {
      setInput({
        amount: "",
        type: "",
        category: "",
        note: "",
        date: "",
      });
      setOpen(false);
      navigate(-1);
    }
  }, [isSuccess]);
  useEffect(() => {
    if (selectedTransaction) {
      setInput(selectedTransaction);
    }
  }, [selectedTransaction]);
  useEffect(() => {
    if (updateSuccess) {
      setSelectedTransaction(null);
      setInput({
        amount: "",
        type: "",
        category: "",
        note: "",
        date: "",
      });
      setIsEditOpen(false);
    }
  }, [updateSuccess]);

  const handleDelete = async () => {
    try {
      await deleteTransaction(selectedTransaction._id).unwrap();
      setIsDeleteOpen(false);
      setSelectedTransaction(null);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="p-6 bg-black min-h-screen text-white space-y-6">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <p className="text-emerald-400 text-xs tracking-widest">
            FINANCIAL RECORDS
          </p>
          <h1 className="text-4xl font-bold">Transactions</h1>
        </div>
        {user?.role === "admin" ? (
          <button
            onClick={() => setOpen(true)}
            className="bg-emerald-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-emerald-300 transition"
          >
            + NEW TRANSACTION
          </button>
        ) : (
          ""
        )}
      </div>

      <StatsCards  data={data}/>
      <Filters filters={filters} setFilters={setFilters} />
      <TransactionTable
        isEditOpen={isEditOpen}
        setIsEditOpen={setIsEditOpen}
        isDeleteOpen={isDeleteOpen}
        setIsDeleteOpen={setIsDeleteOpen}
        data={filteredData}
        setSelectedTransaction={setSelectedTransaction}
      />
      {open && (
        <TransactionModal
          input={input}
          setInput={setInput}
          onClose={() => setOpen(false)}
          onSubmit={handleSubmit}
        />
      )}
      <EditModal
        input={input}
        setInput={setInput}
        open={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        onSubmit={handleSubmit}
      />

      <DeleteModal
        open={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default Transactions;
