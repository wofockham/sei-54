class PagesController < ApplicationController
    def home
    end

    def hamldemo
        @lucky = rand 1..40
    end
end
