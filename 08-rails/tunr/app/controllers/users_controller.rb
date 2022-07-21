class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    User.create user_params
    redirect_to root_path
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end
