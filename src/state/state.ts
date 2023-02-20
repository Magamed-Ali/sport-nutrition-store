export const state = {
    header : [{id : 1, name : "Доставка"}, {id : 2, name: "Оптовые предложения"}, {id: 3, name: "Услуги"} ,
        { id : 4, name : "Контакты" }],
    menu : [{id : 1, name: "Акции"}, {id : 2, name: "Распродажа"}, { id : 3, name : "Бренды"},
        { id : 4, name : "Спортивное питание"}, { id : 5, name : "Витамины и минералы"},
        {id : 6, name : "Сармы и бустеры тестостерона"}]

}

export type headerType = {
    id : number
    name : string
}