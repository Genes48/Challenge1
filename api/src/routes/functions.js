const { Income, Category } = require('../db.js')

const getIncomes = async function(){
    try{
    return await Income.findAll({
        /* include:{
            model: Category,
            attributes: ["name"],
            through:{
                attributes: [],
            }
        } */
    })}
    catch(e){
        console.log(e.message)
        res.json(e)
    }
}

const createIncome = async function(concept, amount, date, type /*, category */){
    try{    
    var income = await Income.create({
            concept: concept,
            amount: amount,
            date: date,
            type: type
        })
        /* income.addCategory(category) */
    return income}
    catch(e){
        console.log(e)
    }
}

const modifyIncome = async function(id, concept, amount, date, category){
try{
    if (concept) {
        await Income.update(
          {
            concept: concept,
          },
          {
            where: { id: id },
          }
        );
      }
    if (amount) {
        await Income.update(
          {
            amount: amount,
          },
          {
            where: { id: id },
          }
        );
      }
    if (date) {
        await Income.update(
          {
            date: date,
          },
          {
            where: { id: id },
          }
        );
      }
    if (category){
        let income = await Income.findOne({
            where: {
              id: id,
            },
          });
        const cat = await Category.findOne({
            where: { name: category },
          });
        await income.setCategory(cat);
    }
    res.send("The operation has been updated");
    }
    catch(e){
        res.json(e.message)
    }
}

const deleteIncome = async function(id){
    try{
        var income = await Income.findByPk(id, {
            /* include:{
                model:Category,
                attributes: ["name"],
                through: {
                    attributes:[]
                }
            } */
        })
        await income.destroy()
        res.send("The operation has been deleted")
    }
    catch(e){
        
        res.json(e.message)
    }
}

module.exports = {getIncomes, createIncome, modifyIncome, deleteIncome}