class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token # This needs to be skipped for APIs.
end
