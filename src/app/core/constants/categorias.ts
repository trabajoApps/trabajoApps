import { Categoria } from "../interfaces/categorias"
export const CATEGORIAS : Categoria[]=[
{
    nombre:"Hamburguesas", 
    id:0, 
    imgUrl:'https://clarin.com/img//2021/06/17/LC25eDtCT_1200x630__1.jpg', 
    productos:[
{
    id:1,
    nombre:'cuarto de libra',
    precio:3500,
    ingredientes:['queso cheddar', 'cebolla', 'medallon de carne' , 'mostaza', 'ketchup' ],
    imagen: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXTUDbN/200/200/original?country=ar"
},
{   id:2,
    nombre:'magnifica',
    precio:3300,
    ingredientes:['queso cheddar', 'cebolla', 'medallon de carne' , 'lechuga', 'tomate' ],
    imagen: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kvXq4z6q/200/200/original?country=uy" 
},
{   id:3,
    nombre:'krispy chiken',
    precio:3100,
    ingredientes:['queso cheddar', 'mayonesa', 'medallon de pollo' , 'lechuga', 'tomate' ],
    imagen:"https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$krX81U77/200/200/original?country=ar" 
}]
},
{
    nombre:"Pizzas", 
    id:1,
    imgUrl:'https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg',
    productos: [
{
    id:4,
    nombre:'especial',
    precio:3000,
    ingredientes:['queso', 'jamon', 'huevo' , 'morron' ],
    imagen: "https://pastasdoncayetano.com/img/categorias/pizzas.jpg"
    
}, 
{
   id:5,
    nombre:'peperoni',
    precio:3400,
    ingredientes:['queso', 'peperoni', ],
    imagen: "https://placeralplato.com/files/2016/01/Pizza-con-pepperoni-640x480.jpg?width=1200&enable=upscale"
},
{
   id:6,
    nombre:'4 quesos',
    precio:3800,
    ingredientes:['queso', 'jamon', 'roquefort', 'parmesano', 'regianito' ],
    imagen: "https://www.pequerecetas.com/wp-content/uploads/2012/11/pizza-4-quesos-1.jpg"
}]
},
{
    nombre:"Postres", 
    id:2,
    imgUrl:'https://previews.123rf.com/images/ladadikart/ladadikart2108/ladadikart210800041/173346584-juego-de-postres-de-dibujos-animados-postres-de-tortas-dulces-y-magdalenas-dulces-frutas-frescas.jpg', 
    productos: [
{
    id:7,
    nombre:'chocotorta',
    precio:2500,
    ingredientes:['crema de leche', 'ddl', 'masita de chcolate' ],
    imagen: "https://www.cronista.com/files/image/307/307256/5ffe2f88d2a71_934_695!.jpg?s=6217bd05f06b1335a98deca25fd5d6a7&d=1654442327"

},
{
    id:8,
    nombre:'tiramisu',
    precio:2500,
    ingredientes:['crema', 'cafe', 'masitas vainillas'],
    imagen: "https://okdiario.com/img/2019/04/18/tiramisu-1.jpg"
},
{
   id:9,
    nombre:'chescake de frutos rojos',
    precio:2500,
    ingredientes:['crema', 'queso mascarpone', 'frutos rojos'],
    imagen: "https://escuelamundopastel.com/wp-content/uploads/2018/11/ORGANIZACI%C3%93N-DE-EVENTOS-10.png"
}]
},
{
    nombre:"Bebidas", 
    id:3,
    imgUrl:'https://villacatalina.com.ar/wp-content/uploads/2023/04/AdobeStock_279492434_Editorial_Use_Only.jpeg', 
    productos: [
{
   id:10,
    nombre:'coca cola',
    precio:700,
    ingredientes:[''],
    imagen: "https://carrefourar.vtexassets.com/arquivos/ids/332158/7790895000232_E02.jpg?v=638211437437130000"
},
{
    id:11,
    nombre:'seven up',
    precio:700,
    ingredientes:[''],
    imagen:"https://http2.mlstatic.com/D_NQ_NP_725905-MLA48002616653_102021-O.webp"  
},
{
    id:12,
    nombre:'fanta',
    precio:700,
    ingredientes:[''],
    imagen:"https://carrefourar.vtexassets.com/arquivos/ids/332199/7790895000256_E02.jpg?v=638211437551170000"
},
{
    id:13,
    nombre:'agua',
    precio:500,
    ingredientes:[''],
    imagen:"https://gematic.adhoc.ar/web/image/product.template/4917/image_1024?unique=7381469"  
}]
}
]