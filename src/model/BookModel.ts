export interface BookModel {
    id: string,
    author: string,
    title: string,
    kind?: string,
    fullSortKey?: string,
    url?: string,
    cover?: string,
    epoch?: string,
    href?: string,
    hasAudio?: boolean,
    genre?: string,
    simpleThumb?: string,
    slug?: string,
    coverThumb?: string
}
