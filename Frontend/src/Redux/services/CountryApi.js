import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const CountryApi = createApi({
    reducerPath: "categoryApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
    endpoints: (builder) => ({
        getCountryData: builder.query({
            query: () => "/country",
        }),
        CountryPostData: builder.mutation({
            query: (newObj) => ({
                url: "/country",
                method: "POST",
                body: newObj,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            }),
        }),
        DeleteData: builder.mutation({
            query: (id) => ({
                url: `/country/${id}`,
                method: "DELETE",
            }),
        }),
        CountryUpdateData: builder.mutation({
            query: (newUpdateObj, id) => ({
                url: `/country/${id}`,
                method: "Put",
                body: newUpdateObj,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            }),
        }),
    }),


});
export const {
    useGetCountryDataQuery,
    useCountryPostDataMutation,
    useDeleteDataMutation,

} = CountryApi;