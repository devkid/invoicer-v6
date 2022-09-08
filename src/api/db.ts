import { fetchBaseQuery} from '@reduxjs/toolkit/query';
import { createApi } from '@reduxjs/toolkit/query/react'

export const dbApi = createApi({
    reducerPath: 'dbApi',
    baseQuery: fetchBaseQuery({
         baseUrl: 'https://v2.jokeapi.dev/joke/'
        //  baseUrl: 'https://jsonplaceholder.typicode.com'
        // baseUrl: 'http://localhost:7000'
    }),
    endpoints: (builder) => ({
        getDbApi: builder.query({
            query: () => `Any`
        }),
    }),
});


// @ts-ignore
export const { useGetDbApiQuery } = dbApi;