class EmployeesController < ApplicationController
  before_filter :signed_in_user,
                only: [:index, :edit, :update, :destroy,:docshow,:iqama,:passport,:insurance,:visa,:show,:new,:create]
  # GET /employees
  # GET /employees.json
  def index
    @employees = Employee.all

    respond_to do |format|
      format.html # index.html.erb
      format.csv { render text: @employees.to_csv }
      format.xls #{send_data @employees.to_csv(col_sep: "\t")}
      format.json { render json: @employees }
    end
  end

  # GET /employees/1
  # GET /employees/1.json
  def show
    @employee = Employee.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @employee }
    end
  end

  # GET /employees/new
  # GET /employees/new.json
  def new
    @employee = Employee.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @employee }
    end
  end

  # GET /employees/1/edit
  def edit
    @employee = Employee.find(params[:id])
  end

  # POST /employees
  # POST /employees.json
  def create
    @employee = Employee.new(params[:employee])

    respond_to do |format|
      if @employee.save
        format.html { redirect_to @employee, notice: 'Employee was successfully created.' }
        format.json { render json: @employee, status: :created, location: @employee }
      else
        format.html { render action: "new" }
        format.json { render json: @employee.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /employees/1
  # PUT /employees/1.json
  def update
    @employee = Employee.find(params[:id])

    respond_to do |format|
      if @employee.update_attributes(params[:employee])
        format.html { redirect_to @employee, notice: 'Employee was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @employee.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /employees/1
  # DELETE /employees/1.json
  def destroy
    @employee = Employee.find(params[:id])
    @empno=@employee.empno
    @education = Education.find_by_empno(params[:empno]) #if @empno.present?
    if @education
      @education.destroy
    end
    @contract = Contract.find_by_empno(params[:empno])
    if @contract
      @contract.destroy
    end
    @employee.destroy
    respond_to do |format|
      format.html { redirect_to employees_url }
      format.json { head :no_content }
    end
  end

  def docshow
  end
  
  def passport
    @employees=Employee.all
      #format.json { render json: @employee }
  end
  
  def iqama
    @employees=Employee.all
  end
  
  def visa
    @employees=Employee.all
  end
  
  def insurance
    @employees=Employee.all
  end

  def search
    @employees=Employee.search(params[:keyword].downcase)
    respond_to do |format|
      format.html # index.html.erb
      format.csv { render text: @employees.to_csv }
      format.xls #{send_data @employees.to_csv(col_sep: "\t")}
      format.json { render json: @employees }
    end
  end
end
