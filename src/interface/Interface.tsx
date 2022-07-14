export interface Data {
    prefName: string
    agePopulation: {
        year: number
        value: number
    }[]
}
export interface Pref {
    prefCode: number
    prefName: string
}
export interface Prefectures {
    prefectures: Pref[]
}
export interface Populations {
    data: {
        data: { year: number; value: number }[]
    }[]
}

export interface Props {
    url: string
    syoriName: string
}
