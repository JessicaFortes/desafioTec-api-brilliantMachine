import Joi from 'joi'

const productSchema = Joi.array().items(
  Joi.object({
    id: Joi.number(),
    category: Joi.string(),
    description: Joi.string(),
    image: Joi.string(),
    price: Joi.number(),
    title: Joi.string(),
    rating: Joi.object({
      count: Joi.number(),
      rate: Joi.number(),
    })
  })
)



export default productSchema