const products=[

        {id:1654, title: "Pila 9V X 1 Duracell", category: "Pilas", brand:"Duracell", stock:195, price:7600, image:"https://www.lacasadelapila.com.ar/image/cache/data/9vduracell-500x500.jpg"
        },
        {id:7, title: "Pila AAA X 1 Energizer", category: "Pilas", brand:"Energizer", stock:113, price:1620, image:"https://www.lacasadelapila.com.ar/image/cache/data/lr03en1-500x500.jpg"
        },
        {id:2, title: "Pila AA X 2 Energizer", category: "Pilas", brand:"Energizer", stock:110, price:3300, image: "https://www.lacasadelapila.com.ar/image/cache/data/lr6en2-500x500.jpg"
        },
        {id:2657, title: "Pila AA X2 Safety Energy", category: "Pilas",brand:"Safety Energy", stock:32, price:12070, image: "https://www.lacasadelapila.com.ar/image/cache/data/aasafet-500x500.jpg"
        },
    
        {id:3363, title: "Bat. Cel. SAMSUNG YOUNG", category: "Baterias", brand:"Samsung", stock:10, price:19200, image: "https://www.lacasadelapila.com.ar/image/cache/data/smg130sl-500x500.jpg"
        },
        {id:3952, title: "Bat. Cel.  IPHONE 5S", category: "Baterias", brand:"Iphone", stock:15, price: 31400, image: "https://www.lacasadelapila.com.ar/image/cache/data/cs-iph510sl-5-500x500.jpg"
        },
        {id: 4701, title: "Bat. Cel.  MOTO G6", category: "Baterias", brand:"Motorola", stock:10, price:12300, image: "https://www.lacasadelapila.com.ar/image/cache/data/mob855fro-500x500.jpg"
        },
        {id: 3392, title: "Bat. Cel. NOKIA 435", category: "Baterias", brand:"LG", stock:6, price: 18300, image: "https://www.lacasadelapila.com.ar/image/cache/data/cs-nk435sl-5-500x500.jpg",
        },
        
        {id:3055, title: "IRF301 CONTROL REMOTO P/ LCD", category: "Controles", brand:" SAMSUNG", stock:10, price:41376, image: "https://www.lacasadelapila.com.ar/image/cache/data/irf301-500x500.jpg", description: 'Control remoto carcasa original Aire Acondicionado. No se programa. Reemplazo directo del original.Con Garantía'
        },
        {id:4313, title: "AC009 REMOTO AIRE", category: "Controles", brand:"Varias", stock:10, price:13032, image: "https://www.lacasadelapila.com.ar/image/cache/data/ac009-500x500.jpg", description: 'Control remoto carcasa original Aire Acondicionado. No se programa. Reemplazo directo del original.Con Garantía'
        },
        {id:4300, title: "RMC100 CONTROL REMOTO", category: "Controles", brand:"REMOCOM", stock:10, price:24645 ,image: "https://www.lacasadelapila.com.ar/image/cache/data/rmc100-500x500.jpg", description: 'CONTROL REMOTO PARA ALARMA Y PORTONES SE COPIA EL CÓDIGO DEL REMOTO VIEJO (ANDAND) Y SE PROGRAMAN, HASTA 3 CODIGOS POR REMOTO'
        },
        {id:4350, title: "GA20 CONTROL REMOTO", category: "Controles", brand:"REMOCON", stock:10, price:36326 ,image: "https://www.lacasadelapila.com.ar/image/cache/data/ga20-500x500.jpg", description: 'CONTROL REMOTO PARA ALARMA Y PORTONES SE COPIA EL CÓDIGO DEL REMOTO VIEJO (ANDAND) Y SE PROGRAMAN, HASTA 3 CODIGOS POR REMOTO ESTE MODELO COPIA ROLLING CODE'
        },
];




export const getProducts = new Promise ((resolve)=>{
    setTimeout(() => {
        resolve(products)
    }, 2000);
});


export const getProduct = (id)=> {
        return products.find((prod)=>prod.id == id)
    };


export const getCategory = (categoryId)=> {
    return products.filter((prod)=>prod.category === categoryId)
};

