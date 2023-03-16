class DogProductsController < ApplicationController

    def index 
        render json: DogProduct.all
    end
end
