class ArtistsController < ApplicationController
  def index
    @artists = Artist.all
  end

  def new
  end

  def edit
  end

  def show
  end
end
