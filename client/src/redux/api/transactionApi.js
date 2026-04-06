import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const transactionApi = createApi({
  reducerPath: "transactionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_TRANSACTION_URL,
    credentials: "include",
  }),
  tagTypes: ["Transaction"],
  endpoints: (builder) => ({
    createTransaction: builder.mutation({
      query: (formdata) => ({
        url: "/create",
        method: "POST",
        body: formdata,
      }),
      invalidatesTags: ["Transaction"],
    }),
    getAllTransactionWithFilters: builder.query({
      query: (params) => {
        const cleanParams = Object.fromEntries(
          Object.entries(params).filter(([_, v]) => v !== ""),
        );
        const queryString = new URLSearchParams(cleanParams).toString();
        return `?${queryString}`;
      },
      providesTags: ["Transaction"],
    }),
    updateTransaction: builder.mutation({
      query: ({ id, data }) => ({
        url: `/update/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Transaction"],
    }),
    deleteTransaction: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Transaction"],
    }),
  }),
});

export const {
  useCreateTransactionMutation,
  useGetAllTransactionWithFiltersQuery,
  useUpdateTransactionMutation,
  useDeleteTransactionMutation,
} = transactionApi;
