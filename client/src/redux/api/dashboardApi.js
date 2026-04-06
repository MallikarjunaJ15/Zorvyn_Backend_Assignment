import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
console.log(import.meta.env.VITE_DASHBOARD_URL);
export const dashboardApi = createApi({
  reducerPath: "dashboardApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_DASHBOARD_URL,
    credentials: "include",
  }),
  tagTypes: ["Dashboard"],
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: () => "/summary",
      providesTags: ["Dashboard"],
    }),
    getMonthlyTrends: builder.query({
      query: () => "/monthly-trends",
      providesTags: ["Dashboard"],
    }),
    getCategoryWise: builder.query({
      query: () => "/category-breakdown",
      providesTags: ["Dashboard"],
    }),
    getWeeklySummary: builder.query({
      query: () => "/weekly-summary",
      providesTags: ["Dashboard"],
    }),
    getRecentActivity: builder.query({
      query: () => "/recent-activity",
      providesTags: ["Dashboard"],
    }),
  }),
});

export const {
  useGetSummaryQuery,
  useGetMonthlyTrendsQuery,
  useGetCategoryWiseQuery,
  useGetWeeklySummaryQuery,
  useGetRecentActivityQuery
} = dashboardApi;
