import { Container, Typography, Grid, Button } from '@material-ui/core'
import React, { useState, useCallback } from 'react'
import { connect } from 'react-redux'
import { DECREMENT, DECREMENT_SAGA, INCREMENT, INCREMENT_SAGA, RESET, RESET_SAGA } from 'src/redux/reducers/increment'
import { Reducer } from 'src/redux/types'
import { IncrementTypes } from 'src/types'

const initialData = 0
const IncrementComponent = React.memo((props: IncrementTypes) => {
    const { dispatch, data } = props,
        [dataState, setDataState] = useState<number>(initialData)

    const onIncrement = () => {
        dispatch({
            type: INCREMENT,
        })
    }

    const onReset = () => {
        dispatch({
            type: RESET,
        })
    }
    const onDecrement = () => {
        dispatch({
            type: DECREMENT,
        })
    }

    const onIncrementSaga = () => {
        dispatch({
            type: INCREMENT_SAGA,
        })
    }

    const onResetSaga = () => {
        dispatch({
            type: RESET_SAGA,
        })
    }
    const onDecrementSaga = () => {
        dispatch({
            type: DECREMENT_SAGA,
        })
    }

    const onIncrementState = useCallback(() => {
        setDataState((prevState: number) => prevState + 1)
    }, [])

    const onResetState = useCallback(() => {
        setDataState(initialData)
    }, [])

    const onDecrementState = useCallback(() => {
        setDataState((prevState: number) => prevState - 1)
    }, [])

    return (
        <Container>
            <Grid container justifyContent="center">
                <Typography variant="h3">{data}</Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography variant="h6">With Redux</Typography>
                <Grid container justifyContent="center">
                    <Button variant="outlined" onClick={onDecrement}>
                        Decrement -
                    </Button>
                    <Button variant="outlined" onClick={onReset}>
                        Reset
                    </Button>
                    <Button variant="outlined" onClick={onIncrement}>
                        Increment +
                    </Button>
                </Grid>
            </Grid>

            <Grid container justifyContent="center">
                <Typography variant="h3">{data}</Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography variant="h6">With Redux Saga</Typography>
                <Grid container justifyContent="center">
                    <Button variant="outlined" onClick={onDecrementSaga}>
                        Decrement -
                    </Button>
                    <Button variant="outlined" onClick={onResetSaga}>
                        Reset
                    </Button>
                    <Button variant="outlined" onClick={onIncrementSaga}>
                        Increment +
                    </Button>
                </Grid>
            </Grid>

            <Grid container justifyContent="center">
                <Typography variant="h3">{dataState}</Typography>
            </Grid>
            <Grid container justifyContent="center">
                <Typography variant="h6">With State</Typography>
                <Grid container justifyContent="center">
                    <Button variant="outlined" onClick={onDecrementState}>
                        Decrement -
                    </Button>
                    <Button variant="outlined" onClick={onResetState}>
                        Reset
                    </Button>
                    <Button variant="outlined" onClick={onIncrementState}>
                        Increment +
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
})

IncrementComponent.displayName = 'Increment'
const mapStateToProps = (state: Reducer) => ({
    data: state.increment.data,
})
// @ts-ignore
export default connect(mapStateToProps)(IncrementComponent)
