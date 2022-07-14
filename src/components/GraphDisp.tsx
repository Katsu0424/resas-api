import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { Data } from '../interface/Interface'

export const GraphDisp = (props: Data[]) => {
    let series = []
    for (let i in props) {
        let value: number[] = []
        value.push(
            props[i].agePopulation[4].value,
            props[i].agePopulation[6].value,
            props[i].agePopulation[8].value,
            props[i].agePopulation[10].value,
            props[i].agePopulation[12].value,
        )
        series.push({ type: 'line', name: props[i].prefName, data: value })
    }

    const options = {
        title: {
            text: '各都道府県の人口遷移',
        },
        xAxis: {
            title: {
                text: '年度',
            },
            categories: [1980, 1990, 2000, 2010, 2020],
        },
        yAxis: {
            title: {
                text: '人口数',
            },
        },

        //都道府県名とかのレイアウト系
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false,
                },
            },
        },

        series: props.length === 0 ? [{ type: 'line', name: '都道府県名', data: [] }] : series,
    }

    return (
        <>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </>
    )
}
