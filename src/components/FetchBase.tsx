import axios from 'axios'
import { Props } from '../interface/Interface'

// propsで得た情報を基にデータを取得
export const FetchBase = async (props: Props, setResultData?: any) => {
    const { url, syoriName } = props
    let tmp

    await axios
        .get(url, {
            headers: { 'X-API-KEY': 'PosaijR2NJv9JKN1fjBFWJwqLoUdWFu49hnK65jR' },
        })
        .then((res) => (tmp = res.data.result))
        .catch(() => alert({ syoriName } + 'の取得に失敗しました。'))
    if (setResultData) {
        setResultData(tmp)
    } else {
        return tmp
    }
}
