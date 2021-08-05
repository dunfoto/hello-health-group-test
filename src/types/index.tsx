export * from './Dashboard'
export * from './Increment'
export interface Pagination {
    page: number
    total: number
    limit: number
}

export interface RoutesTypes {
    name: string
    pathName: string
    component: React.FC<any>
}
