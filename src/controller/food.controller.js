import foodModel from "../models/food.model.js"

const getAllFoods = async (req, res) => {
    const foods = await foodModel.find().populate("category")

    res.send({
        message: "succes",
        count: foods.length,
        data: foods
    });
};

const createFood = async (req, res) => {
    const { name, price, category, description, imgUrl } = req.body;

    const foundedCategory = await categoryModel.findById(category);

    if (!foundedCategory) {
        return res.status(404).send({
            message: "Category not found"
        });
    }

    const food = new foodModel.create({
        name,
        price,
        category,
        description,
        imgUrl
    })

    await categoryModel.updateOne({ _id: category }, { $push: { foods: food._id } });
    res.status(201).send({
        message: "success",
        data: food
    })
}


export default { getAllFoods, createFood }