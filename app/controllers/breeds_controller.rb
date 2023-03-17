class BreedsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response 


    def index
        render json: Breed.all
    end
    
    def show
        dog_breed = Breed.find(params[:id])
    
        render json: dog_breed, status: :ok
    end
    
    
    # def create 
        
    # end


        ###################################################################
        private

        # def breed_params
        # params.permit()
        # end

        # def find_breed
        #     Breed.find(params[:id])
        # end

        def render_not_found_response
            render json: {error: "Dog Breed Not Found"}, status: :not_found
        end
end
