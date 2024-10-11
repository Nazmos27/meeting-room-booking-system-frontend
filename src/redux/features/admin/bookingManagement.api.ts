import { TQueryParam } from "../../../types/global.types";
import { baseApi } from "../../api/baseApi";

const bookingManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBookings: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: "/bookings",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["bookings"],
    }),
    updateBookings: builder.mutation({
      query: (args) => ({
        url: `/bookings/${args.id}`,
        method: "PUT",
        body: args.data,
      }),
      invalidatesTags: ["bookings"],
    }),
    deleteBookings: builder.mutation({
      query: (id) => ({
        url: `/bookings/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["bookings"],
    }),
  }),
});

export const {
  useUpdateBookingsMutation,
  useDeleteBookingsMutation,
  useGetAllBookingsQuery,
} = bookingManagementApi;
