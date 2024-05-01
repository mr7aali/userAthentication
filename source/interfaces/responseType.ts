export type IGenericMetaResponse<T> = {
    meta: {
        page: number; limit: number; total: number;
    },
    data: T
}