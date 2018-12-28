'use strict'

const fs = require('fs')
const filepath = __dirname + '/etl/images/2'

fs.readdir(filepath, (err, files) => {
    if(err){
        console.err(err)
    }else{
        console.log('total images', files.length)
    }
})