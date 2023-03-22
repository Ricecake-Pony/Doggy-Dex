class SessionsController < ApplicationController

    def create 

        @user = User.find_by(email: params[:email])
        
        if @user&.authenticate(params[:password])

            # This way gives us the token key and all of the user information. Is this so the session remembers all of the user's interactions?
            # auth_token = JWT.encode({auth_token_id: @user.id, email: @user.email}, ENV['JWT_TOKEN'])
            # render json: {auth_token: auth_token, user: @user}, status: :created

            # Line 14 is assigning a token as a variable.
            # Line 15 is saying grab the user's id & their token to login
            logged_user = JWT.encode({user: @user.id},ENV['JWT_TOKEN'])
            user = { id: @user_id, uid: logged_user}
            render json: user, status: :created
            #how does it know what uid is? It understands the value of the obj, but how does it know the key, or does the key just become assigned because we're plugging in the value to the obj?
        else 
            render json: { errors: "Invalid email or password"}, status: :unauthorized
        end
    end
end
