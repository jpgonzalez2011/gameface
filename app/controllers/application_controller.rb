class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user, :sign_in, :sign_out

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def sign_in!(user)
    session[:session_token] = user.reset_session_token!
  end

  def sign_out!
    current_user.reset_session_token!
    session_token = nil
  end

  def ensure_sign_in
    redirect_to new_session_url unless current_user
  end


end
