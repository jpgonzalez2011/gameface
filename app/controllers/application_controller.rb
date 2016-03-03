class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :current_user, :sign_in, :sign_out

  def current_user
    @session ||= Session.includes({ user: :profile_picture }).find_by(session_token: session[:session_token])
    if @session
      @session.user
    else
      nil
    end
  end

  def sign_in!(user)
    session[:session_token] = SecureRandom::urlsafe_base64(16)
    Session.create!(session_token: session[:session_token], user_id: user.id)
    user
  end

  def sign_out!
    @session = Session.find_by(session_token: session[:session_token])
    @session.destroy!
    session[:session_token] = nil
  end

  def ensure_sign_in
    redirect_to new_session_url unless current_user
  end


end
