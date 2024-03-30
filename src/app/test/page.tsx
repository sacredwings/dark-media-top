'use client'

import {useEffect, useState} from "react";
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import {AuthDel, AuthUpdate} from '@/store/reducer/myUser'

export default function ProductName() {

    const myUser = useAppSelector(state => state.myUser)
    const dispatch = useAppDispatch()

    useEffect(() => {
        (async () => {
            dispatch(AuthUpdate({
                _id: '1',
                login: 'login1',
            }))
        })()
    }, [])

    return (
        <>
            {myUser.login}
        </>
    )
}
