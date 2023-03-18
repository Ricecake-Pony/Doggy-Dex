class DogProductsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response 

    def index 
        render json: DogProduct.all
    end

    def show
        product = DogProduct.find(params[:id])

        render json: product, status: :ok
    end


    #######################################
    private
    def render_not_found_response
        render json: {error: "Product Not Found"}, status: :not_found
    end
end
