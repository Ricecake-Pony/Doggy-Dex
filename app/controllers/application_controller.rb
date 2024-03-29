class ApplicationController < ActionController::API
    rescue_from ActiveRecord::RecordInvalid, with: :post_validation_error

    def current_user
        auth_token = request.headers['uid']
            if auth_token 
                token = JWT.decode(auth_token, ENV['JWT_TOKEN'])[0]
                return User.find_by(id: token['auth_token_id'])
                #We're saying from the token find the user object and grab the user_id from the decoded JWT token & it's corresponding user.
            else
                return nil
            end
    end

    def authorize!
        unless current_user
            render json: {errors: ["You must be logged in to do that."]}, status: :unauthorized
        end
    end

    ##########################################################
    private

    def post_validation_error(validation_error)
        render json: {errors: validation_error.record.errors.full_messages}, status: :unprocessable_entity
    end
end
