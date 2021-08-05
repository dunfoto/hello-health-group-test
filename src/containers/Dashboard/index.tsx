import React from 'react'
import { connect } from 'react-redux'
import { DashboardTypes } from 'src/types'
import { Reducer } from 'src/redux/types'
import { useEffect } from 'react'
import { GET_EMPLOYEE, UPDATE_PAGINATION } from 'src/redux/reducers/employee'
import { DataGrid } from '@material-ui/data-grid'
import {
    Pagination,
    Select,
    MenuItem,
    Grid,
    Container,
    Button,
    Box,
    Modal,
    Typography,
    TextField,
    SelectChangeEvent
} from '@material-ui/core'
import { Add } from '@material-ui/icons'
import columns from 'src/common/DataGrid'
import style from './styles'
import { useForm, Controller } from 'react-hook-form'
import axios from 'src/utils/axios'

interface DataForm {
    name: string
    email: string
    position: string
}
const DashboardComponent = React.memo((props: DashboardTypes) => {
    const { dispatch, employees, pagination } = props,
        { limit, page } = pagination,
        [open, setOpen] = React.useState(false),
        {
            handleSubmit,
            control,
            formState: { errors },
        } = useForm()

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const getUsers = () => {
        dispatch({
            type: GET_EMPLOYEE,
        })
    }

    const onPageChange = (_: React.ChangeEvent<unknown>, p: number) => {
        if (p === pagination.page) return
        dispatch({
            type: UPDATE_PAGINATION,
            data: {
                ...pagination,
                page: p,
            },
        })
    }

    const handleChange = (e: SelectChangeEvent<number>) => {
        dispatch({
            type: UPDATE_PAGINATION,
            data: {
                ...pagination,
                limit: e.target.value,
            },
        })
    }

    const onSubmit = async (data: DataForm) => {
        try {
            await axios.post('/users', data)
            getUsers()
            setOpen(false)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        dispatch({
            type: GET_EMPLOYEE,
        })
    }, [dispatch, limit, page])

    return (
        <Container>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Create new employee
                    </Typography>
                    <Typography component="div" id="modal-modal-description" sx={{ mt: 2 }}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Controller
                                control={control}
                                name="name"
                                defaultValue=""
                                rules={{
                                    required: true
                                }}
                                render={({ field }) => <TextField
                                    {...field}
                                    defaultValue=""
                                    error={Boolean(errors['name'])}
                                    fullWidth
                                    margin="dense"
                                    id="name"
                                    label="Name"
                                    variant="outlined"
                                />}
                            />

                            <Controller
                                name="email"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: true,
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'invalid email address',
                                    }
                                }}
                                render={({ field }) => <TextField
                                    {...field}
                                    error={Boolean(errors['email'])}
                                    type="email"
                                    fullWidth
                                    margin="dense"
                                    id="email"
                                    label="Email"
                                    variant="outlined"
                                />}
                            />

                            <Controller
                                name="position"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: true
                                }}
                                render={({ field }) => <TextField
                                    {...field}
                                    error={Boolean(errors['position'])}
                                    fullWidth
                                    margin="dense"
                                    id="position"
                                    label="Position"
                                    variant="outlined"
                                />}
                            />


                            <Button variant="outlined" type="submit">
                                Submit
                            </Button>
                        </form>
                    </Typography>
                </Box>
            </Modal>
            <div
                style={{
                    height: 82 + 52 * pagination.limit,
                    width: 'auto',
                    content: 'center',
                    marginBottom: 10,
                }}
            >
                <Typography component="h2">
                    <b>EMPLOYEES</b>
                </Typography>
                <DataGrid
                    rows={employees}
                    columns={columns}
                    loading={employees.length === 0}
                    checkboxSelection
                    disableSelectionOnClick
                    pageSize={pagination.limit}
                    hideFooterPagination={true}
                    hideFooter={true}
                    autoHeight={true}
                />
            </div>
            <Grid container justifyContent="space-between" spacing={0}>
                <Grid item xs={4}>
                    <Button variant="outlined" onClick={handleOpen}>
                        <Add color="primary" />
                    </Button>
                </Grid>
                <Grid container justifyContent="flex-end" item xs={8} spacing={0}>
                    <Select
                        id="pageSize"
                        variant="standard"
                        autoWidth={true}
                        margin="none"
                        value={Number(pagination.limit)}
                        onChange={handleChange}
                    >
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                        <MenuItem value={pagination.total}>All</MenuItem>
                    </Select>
                    <Pagination
                        page={pagination.page}
                        onChange={onPageChange}
                        count={
                            pagination.total === pagination.limit
                                ? 1
                                : Boolean(pagination.total % pagination.limit) ? parseInt(String(pagination.total / pagination.limit)) + 1 : parseInt(String(pagination.total / pagination.limit))
                            // : parseInt(String(pagination.total / pagination.limit))
                        }
                        shape="rounded"
                        classes={{
                            ul: 'justify-end',
                        }}
                    />
                </Grid>
            </Grid>
        </Container>
    )
})

DashboardComponent.displayName = 'Dashboard'
const mapStateToProps = (state: Reducer) => ({
    employees: state.employee.data,
    pagination: state.employee.pagination,
})
// @ts-ignore
export default connect(mapStateToProps)(DashboardComponent)
