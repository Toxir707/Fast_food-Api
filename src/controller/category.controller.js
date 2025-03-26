import { isValidObjectId } from "mongoose";
import categoryModels from "../models/category.models.js";

const getAllCategories = async (req, res) => {
    const categories = await categoryModels.find()

    res.send({
        message: "success",
        data: categories
    })
};

const getOneCategory = async (req, res) => {
    const id = req.params.id;

    if(!isValidObjectId(id)){
        return res.status(400).send({
            message: `Given id: ${id} is not valid`
        });
    };

    const category = await categoryModels.findById(id);

    if(!category){
        return res.status(404).send({
            message: `Category with id: ${id} not found`
        });
    };

    res.send({
        message: "success",
        data: category
    });
};

const createCategory = async (req, res) => {
    const { name } = req.body;

    const foundedCategory = await categoryModels.findOne({ name });

    if (foundedCategory) {
        return res.status(409).send({
            message: `Category: ${name} allaqachon mavjud`,
        });
    }

    const category = await categoryModels.create({ name })

    res.send({
        message: "success",
        data: category
    })
};

const updateCategory = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    if(!isValidObjectId(id)){
        return res.status(400).send({
            message: `Given id: ${id} is not valid`
        });
    };

    const category = await categoryModels.findByIdAndUpdate(id, { name }, { new: true });

    if(!category){
        return res.status(404).send({
            message: `Category with id: ${id} not found`
        });
    };

    res.send({
        message: "success",
        data: category
    });
};

const deleteCategory = async (req, res) => {
    const { id } = req.params;

    if(!isValidObjectId(id)){
        return res.status(400).send({
            message: `Given id: ${id} is not valid`
        });
    };

    const category = await categoryModels.findByIdAndDelete(id);

    if(!category){
        return res.status(404).send({
            message: `Category with id: ${id} not found`
        });
    };

    res.send({
        message: "success",
        data: category
    });
};

export default { getAllCategories, createCategory, getOneCategory, updateCategory, deleteCategory };