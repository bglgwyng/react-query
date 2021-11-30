import { QueryObserver } from '../core'
import { QueryFunction, QueryKey } from '../core/types'
import { parseQueryArgs } from '../core/utils'
import { UseQueryOptions, UseQueryResult } from './types'
import { useBaseQuery } from './useBaseQuery'

// HOOK

export function useQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
  TSuspended extends boolean = boolean
>(
  options: UseQueryOptions<TQueryFnData, TError, TData, TQueryKey, TSuspended>
): UseQueryResult<TData, TError, TSuspended>
export function useQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
  TSuspended extends boolean = boolean
>(
  queryKey: TQueryKey,
  options?: Omit<
    UseQueryOptions<TQueryFnData, TError, TData, TQueryKey, TSuspended>,
    'queryKey'
  >
): UseQueryResult<TData, TError, TSuspended>
export function useQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
  TSuspended extends boolean = boolean
>(
  queryKey: TQueryKey,
  queryFn: QueryFunction<TQueryFnData, TQueryKey>,
  options?: Omit<
    UseQueryOptions<TQueryFnData, TError, TData, TQueryKey, TSuspended>,
    'queryKey' | 'queryFn'
  >
): UseQueryResult<TData, TError, TSuspended>
export function useQuery<
  TQueryFnData,
  TError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
  TSuspended extends boolean = boolean
>(
  arg1: TQueryKey | UseQueryOptions<TQueryFnData, TError, TData, TQueryKey, TSuspended>,
  arg2?:
    | QueryFunction<TQueryFnData, TQueryKey>
    | UseQueryOptions<TQueryFnData, TError, TData, TQueryKey, TSuspended>,
  arg3?: UseQueryOptions<TQueryFnData, TError, TData, TQueryKey, TSuspended>
): UseQueryResult<TData, TError, TSuspended> {
  const parsedOptions = parseQueryArgs(arg1, arg2, arg3)
  return useBaseQuery(parsedOptions, QueryObserver)
}
