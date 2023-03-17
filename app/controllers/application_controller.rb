class ApplicationController < ActionController::API
    rescue_from ActiveRecord::RecordInvalid, with: :post_validation_error
    ##########################################################
    private

    def post_validation_error(validation_error)
        render json: {errors: validation_error.record.errors.full_messages} 
        # see if this is needed: ,status: :unprocessable_entity
    end


end
