import { useMutation, UseMutationResult } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";

interface ResponseData {
  success: boolean;
  message: string;
}

export const usePostData = (
  endpoint: string
): UseMutationResult<
  AxiosResponse<ResponseData>,
  AxiosError,
  Record<any, any>
> => {
  return useMutation({
    mutationFn: (data: Record<any, any>) => {
      return axios.post(endpoint, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
  });
};
