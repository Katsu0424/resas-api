import type { NextPage } from 'next'
import { CheckBox } from '../components/CheckBox'
import { GetPrefecture } from '../components/GetPrefecture'
import { Pref } from '../interface/Interface'
import styles from '../styles/Home.module.css'

const App: NextPage = () => {
    const prefInfo: Pref[] = GetPrefecture()!

    // const aaa = GetPopulation(11).data[0].data
    // console.log(aaa)
    return (
        <>
            <header>
                <h2 className={styles.title}>総人口推移グラフ</h2>
            </header>
            <CheckBox prefectures={prefInfo} />
        </>
    )
}

export default App
