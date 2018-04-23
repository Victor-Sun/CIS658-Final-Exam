class ExpensesController < ApplicationController
	before_action :set_trip
	before_action :set_trip_post, only: [:show, :update, :destroy]
	
	# GET /trips/:trip_id/expenses
	def index
		json_response(@trip.expenses)
	end
	
	# GET /trips/:trip_id/expenses/:id
	def show
		json_response(@expense)
	end
	
	# POST /trips/:trip_id/expenses
	def create
		@trip.expenses.create!(expense_params)
	end
	
	# PUT /trips/:trip_id/expenses/:id
	def update
		@expense.update(expense_params)
		head :no_content
	end
	
	# DELETE /trips/:trip_id
	def destroy
		@expense.destroy
		head :no_content
	end
	
	private
	
	def post_params
		params.permit(:expense, :reason)
	end
	
	def set_expense
		@trip = Trip.find(params[:trip_id])
	end
	
	def set_expense_trip
		@expense = @trip.posts.find_by!(id: params[:id]) if @trip
	end
end
