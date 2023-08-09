const products = [
    {
        id: "1",
        name: "Nike Air Force 1",
        price: 120,
        category: "Men's Shoes",
        img: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-mens-shoes-jBrhbr.png',
        img2: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a0a300da-2e16-4483-ba64-9815cf0598ac/air-force-1-07-mens-shoes-jBrhbr.png',
        stock: 25,
        description: "Nike Air Force description",
    },

    {
        id: "2",
        name: "Nike Air Jordan 1",
        price: 125,
        category: "Men's Shoes",
        img: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/31ff59e2-89d0-4a83-839a-656618674782/air-jordan-1-mid-mens-shoes-tXSJ73.png',
        img2:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/82d26c28-58a2-464f-881e-b20d2b5eafa8/air-jordan-1-mid-mens-shoes-tXSJ73.png',
        stock: 50,
        description: "Nike Air Force description",
    },

    {
        id: "3",
        name: "Nike Air Max",
        price: 110,
        category: "Men's Shoes",
        img: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f1f42e7b-4f17-4221-ae32-7bea79bf28f1/air-max-90-mens-shoes-DLDWPT.png',
        img2:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b26aaafa-b812-4ad0-aeeb-afac1bbfa3d1/air-max-90-mens-shoes-DLDWPT.png',
        stock: 50,
        description: "Nike Air Force description",
    },

    {
        id: "4",
        name: "Nike InfinityRN 4",
        price: 160,
        category: "Women's Shoes",
        img: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6d33c68e-def9-4231-abdd-64447e58764c/infinityrn-4-womens-road-running-shoes-ZrWGRG.png',
        img2: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c04e99a4-f24d-4cfb-b687-92593870ac6c/infinityrn-4-womens-road-running-shoes-ZrWGRG.png',
        stock: 50,
        description: "Nike Air Force description",

    },

    {
        id: "5",
        name: "Nike Gamma Force",
        price: 90,
        category: "Women's Shoes",
        img: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d83976d3-0d8b-4d00-9583-0b67c817e4ba/gamma-force-womens-shoes-4TR9Xf.png',
        img2: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/53298e7f-9821-4ce2-8631-c4d2f3f9face/gamma-force-womens-shoes-4TR9Xf.png',
        stock: 50,
        description: "Nike Air Force description",
    },

    {
        id: "6",
        name: "Nike Air Huarache",
        price: 125,
        category: "Men's Shoes",
        img: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cbdaea22-7696-4d4a-afec-6cb4f0c901c1/air-huarache-runner-mens-shoes-hkFLHQ.png',
        img2: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/88b24e55-e2f7-45a9-b170-ecee89865f13/air-huarache-runner-mens-shoes-hkFLHQ.png',
        stock: 50,
        description: "Nike Air Force description",
    },
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500
        )
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500
        )
    })
}

export const getProductsByCategory = (categoryid) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category.toLowerCase() === categoryid.toLowerCase()))
        },500)
    })
};