'use strict'

const fs = require('fs')
// const filepath = __dirname + '/thisiswhyimbroke/etl/images/4'
const filepath = __dirname + '/cleaned/images'

fs.readdir(filepath, (err, files) => {
    if(err){
        console.err(err)
    }else{
        console.log('total images', files.length)
    }
})