class BreedReviewsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response 
    before_action :authorize!, only: [:update, :create, :destroy]
    
    def index
        render json: BreedReview.all
    end

    def show
        breed_review = find_breed_review
        render json: breed_review, status: :ok
    end

    def create
        new_review = BreedReview.create!(breed_review_params)
        render json: new_review, status: :created
        # debugger
    end

    def update
        breed_review = find_breed_review

        if breed_review.user.id == current_user.id
        breed_review.update!(breed_review_params)
        render json: breed_review, status: :ok
        end
    end

    def destroy
        breed_review = find_breed_review
        breed_review.destroy
        head :no_content
    end

    ########################################################################################
    private

    def breed_review_params
    params.require(:breed_review).permit(:note, :user_id, :breed_id)
    end

    def find_breed_review
        BreedReview.find(params[:id])
    end

    def render_not_found_response
        render json: {error: "Review Not Found"}, status: :not_found
    end

end
