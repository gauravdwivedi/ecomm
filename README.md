# ecomm

simple CRUD API for product based Ecommerce website

Clone project and install dependencies 
    : npm install

install mongodb and robo 3T to view changes

CRUD functions using Postman
    Add a product in DB:(Method : POST)
        : http://127.0.0.1:8000/api/v1/products/create
        product information in BODY in JSON 
        example:
            {
                "name":"Iphone",
	            "quantity":99
            }
        
    Update quanitity of a product in DB(Method : POST)
        : http://127.0.0.1:8000/api/v1/products/:id/update_quantity/quantity

        example:
        http://127.0.0.1:8000/api/v1/products/5ea9843c0a09db00e0b44532/update_quantity/9000

    Delete a product from databse(Method : DELETE)
        : http://127.0.0.1:8000/api/v1/products/:id

        example:
        http://127.0.0.1:8000/api/v1/products/5ea9843c0a09db00e0b44532
    
    Fetch all products from database(Method : GET)
        :http://127.0.0.1:8000/api/v1/products/
