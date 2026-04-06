import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setUser } from "../app/authSlice";
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_AUTHURL,
    credentials: "include",
  }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (formdata) => ({
        url: "/register",
        method: "POST",
        body: formdata,
      }),
      invalidatesTags: ["Auth"],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data.user));
        } catch (error) {
          console.error("Login failed:", error);
        }
      },
    }),
    loginUser: builder.mutation({
      query: (formdata) => ({
        url: "/login",
        method: "POST",
        body: formdata,
      }),
      invalidatesTags: ["Auth"],

      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data.user));
        } catch (error) {
          console.error("Login failed:", error);
        }
      },
    }),
    getMe: builder.query({
      query: () => "/me",
      providesTags: ["Auth"],
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
      invalidatesTags: ["Auth"],
    }),
    getAllUsers: builder.query({
      query: () => "/users",
      providesTags: ["Auth"],
    }),
    updateUserRole: builder.mutation({
      query: ({ id, role }) => ({
        url: `/${id}/role`,
        method: "PATCH",
        body: { role },
      }),
      invalidatesTags: ["Auth"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetMeQuery,
  useLogoutUserMutation,
  useGetAllUsersQuery,
  useUpdateUserRoleMutation,
  useDeleteUserMutation,
} = authApi;
