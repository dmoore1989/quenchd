class StaticPagesController < ApplicationController
  before_action :ensure_login, except: [:landing]

  def landing
    @disable_header = true

  end

  def home

  end

  def ensure_login
    unless logged_in?
      redirect_to static_pages_landing_url
    end
  end

end
