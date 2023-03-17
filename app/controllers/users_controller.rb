class UsersController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        render json: User.all
    end

    def show
        user = find_user
        render json: user

    end

    def create
    new_user = User.create!(user_params)
    end

    ################################################################
    private

    def user_params
        params.permit( :username, :password)
    end

    # params.permit is allowing only the username and password to be permitted to be created/ only the ones we want to be used. This is also known as Strong params and stops mass assignment vulnerabilities by letting only these params through and nothing else.

    # could also use params.require(:user).permit(:username, :password)


    def find_user
        User.find(params[:id])
    end

    def render_not_found_response
        render json: {error: "User Not Found"}, status: :not_found
    end
end
