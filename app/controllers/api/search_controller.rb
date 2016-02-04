class Api::SearchController < ApplicationController

  def user_search
    @user_search_results = PgSearch
      .multisearch(params[:query])
      .includes(searchable: [:cover_photo, :profile_picture])
    @users = @user_search_results.map { |result| result.searchable }
  end
end
