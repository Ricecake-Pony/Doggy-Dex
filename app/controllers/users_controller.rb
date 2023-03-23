class UsersController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    # before_action :authorize!, only: [:update]
    
    def index
       render json: User.all
    end


    def show
        user = find_user
        render json: user, status: :ok

    end

    def create
        new_user = User.create!(params[:user_params])
        render json: new_user, status: :created
        end

    def update
        render json: { messages: ['yeah update!'], user: current_user}, status: :ok
    end
    
    ################################################################
    private

    def user_params
        params.permit( :email, :password, :first_name, :image_url)
    end

    # params.permit is allowing only the listed properties to be permitted to be created/ only the ones we want to be used. This is also known as Strong params and stops mass assignment vulnerabilities by letting only these params through and nothing else.
    # could also use params.require(:user).permit(:email, :password)


    def find_user
        User.find(params[:id])
    end

    def render_not_found_response
        render json: {error: "User Not Found"}, status: :not_found
    end
end
