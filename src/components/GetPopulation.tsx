import { FetchBase } from './FetchBase'

// 人口取得
export const GetPopulation = async (prefCode: number) => {
    const fetchInfo = {
        url: `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefCode}`,
        syoriName: '都道府県人口',
    }
    let tmp
    await FetchBase(fetchInfo).then((res) => (tmp = res))
    return tmp
}
