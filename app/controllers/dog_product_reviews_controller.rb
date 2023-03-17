class DogProductReviewsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response 

    def index 
        render json: DogProductReview.all
    end

    def show
        product_review = find_product_review

        render json: product, status: :ok
    end

    def create
        new_review = DogProductReview.create!(review_params)

        render json: new_review, status: :created
    end

    def update
        review = find_product_review
        review.update!(review_params)

        render json: review, status: :ok
    end

    def destroy
        product_review = find_product_review
        product_review.destroy

    end

    #########################################################
    private

    def review_params 
        params.permit(:note)
    end

    def find_product_review
    DogProductReview.find(params[:id])
    
    end

    def render_not_found_response
        render json: {error: "Review Not Found"}, status: :not_found
    end

end
