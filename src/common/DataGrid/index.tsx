import { GridCellParams, GridCellValue, GridValueGetterParams } from '@material-ui/data-grid'
import { Avatar } from '@material-ui/core'
import moment from 'moment'

const columns = [
    {
        field: 'avatar',
        headerName: 'Avatar',
        width: 100,
        type: 'image',
        renderCell: (params: GridCellParams) => {
            return <Avatar alt="demo" src={params.row.avatar} />
        },
    },
    {
        field: 'id',
        headerName: 'ID',
        width: 100,
    },
    {
        field: 'name',
        headerName: 'Name',
        width: 150,
        editable: true,
    },
    {
        field: 'email',
        headerName: 'email',
        width: 250,
        editable: false,
    },
    {
        field: 'position',
        headerName: 'Position',
        width: 250,
        editable: true,
    },
    {
        field: 'createdAt',
        headerName: 'Created At',
        width: 150,
        valueGetter: (params: GridValueGetterParams): GridCellValue =>
            moment(params.row.createdAt).format('YYYY-MM-DD HH:mm'),
    },
]

export default columns
