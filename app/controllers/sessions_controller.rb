class SessionsController < ApplicationController

    # Proper syntax of JWT:
    # Encode (like encrypting): 
    # 
    # Can take 3 arguments, 
    # 1: k/v pair(s), 
    # 2: your secret key to unlock this token, it's generally a string.
    # 3: third arg is what type of encryption but it defaults to HS256.
    #                              1         2
    # variable = JWT.encode({number:123}, 'nugget')
    # Calling variable => encrypted data like so nj4324$VJKFNRED#432
    #
    # Decode (like decrypting) 2 arguments
    # Arg 1: variable name
    # Arg 2: the secret key ('nugget' in this example)
    # JWT.decode(variable, 'nugget')
    # The returned decoded data is in an array => [{'number'=>123}, {"alg"=> "HS256"}]
    # good habit is to assign decoded data as a variable to grab specifically our encoded data only like below:
    # token = JWT.decode(variable, 'nugget')[0]
    # token => {"number"=>123}
    # NOTE: JWT doesn't allow array access via hash/symbols, must use strings in bracket notation like so::
    # token['number'] => 123

    def login 
        @user = User.find_by(email: params[:email])
        if @user&.authenticate(params[:password])
            # auth_token = JWT.encode({auth_token_id: @user.id, email: @user.email}, ENV['JWT_TOKEN'])
            # render json: {auth_token: auth_token, user: @user}, status: :created
            logged_user = JWT.encode({user: @user.id},ENV['JWT_TOKEN'])
            user = { user: UserSerializer.new(@user), uid: logged_user}
            render json: user, status: :ok
        else 
            cannot_login
        end
    end

    def existing_user
        auth_token = request.headers['auth-token']
        if auth_token and auth_token != 'undefined'
            token = JWT.decode(auth_token, ENV['JWT_TOKEN'])[0]
            user = User.find_by(id: token['user'])
            render json: user.id, status: :ok
        else
            cannot_login
        end
    end

    ##################################################################################################

    private

    def cannot_login
        render json: { errors: "Invalid email or password"}, status: :unauthorized
    end
end
