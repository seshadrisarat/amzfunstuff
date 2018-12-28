'use strict'

const fs = require('fs')

const filepath = __dirname + '/etl/1.json'

const main = () => {

    // load products from file
    let products 

    try{
        products = require(filepath)
    }catch(ex){
        console.log('Error: invalid json')
        process.exit(1)
    }

    console.log('totle products: ', products.length)
}

main()