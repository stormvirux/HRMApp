class ExpiryController < ApplicationController
 respond_to :html  
 def expshow
    @search=Employee.search(params[:q])
    #=params[:distinct].to_i.zero? ?
    @employee=@search.result
    #@search.result(distinct: true)
    @search.build_condition
    respond_with @employee
  end
end
