import { useState } from 'react'
import { Data, Prefectures, Populations, Pref } from '../interface/Interface'
import styles from '../styles/Home.module.css'
import { GetPopulation } from './GetPopulation'
import { GraphDisp } from './GraphDisp'

export const CheckBox = (props: Prefectures) => {
    const { prefectures } = props
    const [dispData, setDispData] = useState<Data[]>([])

    const OnChangeCheck = async (prefCode: number, prefName: string, checkStatus: boolean) => {
        // チェックした場合、対象データ追加
        if (checkStatus) {
            let tmp: Populations
            await GetPopulation(prefCode).then((res) => (tmp = res!))
            const agePopulation = tmp!.data[0].data
            setDispData([...dispData, { prefName, agePopulation }])
        }

        // チェック外した場合、対象データ削除
        if (!checkStatus) {
            setDispData(dispData.filter((data) => data.prefName !== prefName))
        }
    }

    return (
        <>
            <div className={styles.checkBoxPosition}>
                {prefectures.map((pref: Pref) => (
                    <div key={pref.prefCode} className={styles.checkBoxStyle}>
                        <input
                            type='checkbox'
                            id={pref.prefCode.toString()}
                            onChange={(event) =>
                                OnChangeCheck(pref.prefCode, pref.prefName, event.target.checked)
                            }
                        />
                        <label htmlFor={pref.prefCode.toString()}>{pref.prefName}</label>
                    </div>
                ))}
            </div>
            <div>
                <GraphDisp {...dispData} />
            </div>
        </>
    )
}
