var express = require('express')
var router  = express.Router()
var pool    = require('./pool')


router.post('/submit_clients',function(req,res,next){
    try
    {
        pool.query("insert into clients (name,lastname,email,mobileno,project,clientid) values (?,?,?,?,?,?) ",[req.body.name, req.body.lastname, req.body.email, req.body.mobileno, req.body.project, req.body.clientid],function(error,result){
            if(error)
            {
                console.log('ERROR',error)
                res.status(500).json({status:false, message:'Server Error: Pls Contact Database Administrator.... '})
            }
            else
            {
                res.status(200).json({status:true, message:'Client Submitted Successfully.... '})
            }
        })
    }
    catch(e)
    {
        console.log('ERROR',e)
        res.status(400).json({status:false, message:'Server Error: Pls Contact Server Administrator.... '})
    }
})



router.get('/display_all_clients',function(req,res,next){
    try
    {
        pool.query("select * from clients",function(error,result){
            if(error)
            {
                console.log('ERROR',error)
                res.status(500).json({status:false, message:'Server Error: Pls Contact Database Administrator.... '})
            }
            else
            {
               
                res.status(200).json({status:true, message:'Success', data:result})
            }
        })
    }
    catch(e)
    {
        console.log('ERROR',e)
        res.status(400).json({status:false, message:'Server Error: Pls Contact Server Administrator.... '})
    }
})


router.post('/edit_clients',function(req,res){
    try
    {
        pool.query("update clients set name=? , lastname=? , email=? , mobileno=? ,project=? where clientid=?",[req.body.name, req.body.lastname, req.body.email, req.body.mobileno, req.body.project, req.body.clientid],function(error,result){
            if(error)
            {
                console.log('ERROR',error)
                res.status(500).json({status:false, message:'Server Error: Pls Contact Database Administrator.... '})
            }
            else
            {
              
                res.status(200).json({status:true, message:'Client Update Successfully....'})
            }
        })
    }
    catch(e)
    {
        console.log('ERROR',e)
        res.status(400).json({status:false, message:'Server Error: Pls Contact Server Administrator.... '})
    }
})







router.post('/delete_clients',function(req,res){
    try
    {
        pool.query("delete from clients where clientid=?",[req.body.clientid],function(error,result){
            if(error)
            {
                res.status(500).json({status:false, message:'Server Error: Pls Contact Database Administrator.... '})
            }
            else
            {
                res.status(200).json({status:true, message:'Client Deleted Successfully'})
            }
        })
    }
    catch(e)
    {
        console.log('ERROR',e)
        res.status(400).json({status:false, message:'Server Error: Pls Contact Server Administrator.... '})
    }
    
})

module.exports = router;