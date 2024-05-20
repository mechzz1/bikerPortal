const CategoryController = {};
// const ExpenseHeadService = require("../services/expenseHead.service.js");
const CategoryService = require("../services/category.service.js");
const db = require('../models/index.js');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);



CategoryController.addCategory = async (req, res) => {
      try {
            const category = await CategoryService.insertOrUpdate(req.body);
            res.status(200).send({
                  code: 200,
                  message: "Category created Successfully",
                  data: category,
            });
      } catch (error) {
            console.log("error", error);
            return res.status(500).send(error);
      }
};

CategoryController.addOrder = async (req, res) => {
      try {
            const product = await stripe.products.create({
                  name : req.body.name,
                  description: req.body.description,
            })
            if(product){
                  var price = await stripe.prices.create({
                        product:`${product.id}`,
                        unit_amount:req.body.price,
                        currency:"usd"
                  })
            }
            if(price.id){
                  const session = await stripe.checkout.sessions.create({
                        payment_method_types: ['card'],
                        line_items: [
                          {
                            price: `${price.id}`,                        
                            quantity: 1,
                          },
                          
                        ],
                        mode: 'payment',
                        shipping_address_collection: {
                              allowed_countries: ['US', 'CA'],
                            },
                        // customer_email:`${req.body.email}`,
                        success_url: "http://bikeportal.syncstaging.com/success",
                        cancel_url: "http://bikeportal.syncstaging.com/fail",
                      }
                      
                      );
                        res.status(200).send({
                              code: 200,
                              message: "Session created Successfully",
                              url: session.url,
                        });
                  }
              
      } catch (error) {
            console.log("error", error);
            return res.status(500).send(error);
      }
};

module.exports = CategoryController;
