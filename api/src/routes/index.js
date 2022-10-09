const { Router } = require('express');
const { getIncomes, createIncome, deleteIncome, modifyIncome } = require ("./functions")
const { Income, Category } = require("../db")

const router = Router();

router.get("/incomes", async function(req, res){
    try{
        var inc = await getIncomes()
        res.json(inc)
    }
    catch(e){
        res.status(404).json(e)
    }
})

router.post("/incomes", async function(req, res){
    let {concept, amount, date, type/* , category */} = req.body
    try{
        var inc = await createIncome(concept, amount, date, type/* , category */)
        res.send("Operation created")
    }
    catch(e){
        res.send(e)
    }
})

router.delete("/incomes/:id", async function(req, res){
    let{id}=req.params
    try{
        var inc = await deleteIncome(id)
        res.send("Operation deleted")
    }
    catch(e){
        res.send(e)
    }
})

router.put("/incomes/:id", async function(req,res){
    let{id}=req.params
    let {concept, amount, date, type, category} = req.body
    try{
        var inc = await modifyIncome(id, concept, amount, date, category)
        res.send("Operation modified")
    }
    catch(e){
        res.send(e)
    }
})

module.exports = router;
