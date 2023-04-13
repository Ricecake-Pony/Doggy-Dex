class UsersController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    before_action :authorize!, except: [:signup]
    
    #Take index out before deployment
    def index
       render json: User.all
    end

    def show
        user = find_user
        render json: user, status: :ok
    end

    def signup
        new_user = User.create!(user_params)
        if new_user.valid?
            new_uid_token = JWT.encode({user_id: new_user.id}, ENV['JWT_TOKEN'])      
            render json: { new_user: UserSerializer.new(new_user)}, status: :created
            # , new_uid_token: new_uid_token
        else 
            render json: {errors: new_user.errors.full_messages}, status: :not_acceptable
        end
    end

    def my_breed_reviews
        render json: current_user.reviewed_breeds, status: :ok
    end

    def update_breed_review
        updated_review = BreedReview.find(params[:review_id])
        updated_review.update!(review_params)
        render json: updated_review , status: :ok
    end

    def delete_breed_review
        review = BreedReview.find(params[:review_id])
        review.destroy
        render json: {}, status: :ok
    end
    
    ################################################################
    private

    def user_params
        params.permit( :id, :email, :password, :username, :first_name, :image_url)
    end

    def review_params
        params.permit(:note )
    end

 # params.permit is allowing only the username and password to be permitted to be created/ only the ones we want to be used. This is also known as Strong params and stops mass assignment vulnerabilities by letting only these params through and nothing else.

    # could also use params.require(:user).permit(:username, :password) but the require will raise an error if you have the user key nested, in that case have the .permit include the user and it's params:
    # params.permit(:email, :first_name, :image_url, :password, user: [:email, :first_name, :image_url])

    def find_user
        User.find(params[:id])
    end

    def render_not_found_response
        render json: {error: "User Not Found"}, status: :not_found
    end
end
