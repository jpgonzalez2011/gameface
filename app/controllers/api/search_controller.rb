class Api::SearchController < ApplicationController

  def user_search
    @user_multisearch_results = PgSearch
      .multisearch(params[:query])
      .includes(searchable: [:cover_photo, :profile_picture])
    @user_scope_results = User.whose_name_starts_with(params[:query])
    @users_total = @user_multisearch_results.map { |result| result.searchable } + @user_scope_results
    @users = @users_total.uniq 
  end
end
