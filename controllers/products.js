// const productsList = [
//     {
//         "id": 1,
//         "name": "Product 1",
//         "price": 100
//     },
//     {
//         "id": 2,
//         "name": "Product 2",
//         "price": 200
//     },
//     {
//         "id": 3,
//         "name": "Product 3",
//         "price": 300
//     }
// ];



// const getProducts = (req, res) => {
//     let products = productsList
//     if(!products){
//         res.json(
//             {
//                 status: 404,
//                 message: 'there was an error'
//             }
//         )
//     }
//      try {
//         res.status(200).json(
//             {
//                 message: 'products retrieved',
//                 products
//             }
//            ) 
//      } catch (error) {
        
//      }
// }

// module.exports = {
//     getProducts
// }