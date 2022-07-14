import { useState, useEffect } from 'react'
import { Pref } from '../interface/Interface'
import { FetchBase } from './FetchBase'

// 県名取得
export const GetPrefecture = () => {
    const [resultData, setResultData] = useState<Pref[]>([])
    const fetchInfo = {
        url: 'https://opendata.resas-portal.go.jp/api/v1/prefectures',
        syoriName: '都道府県名',
    }
    useEffect(() => {
        FetchBase(fetchInfo, setResultData)
    }, [])
    if (!resultData) return
    return resultData
}
