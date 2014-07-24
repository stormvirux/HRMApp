class EducationsController < ApplicationController
  before_filter :signed_in_user,
                only: [:index, :edit, :update, :destroy,:visa,:show,:new,:create]
  # GET /educations
  # GET /educations.json
  def index
    @educations = Education.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @educations }
      format.csv { render text: @employees.to_csv }
      format.xls #{send_data @employees.to_csv(col_sep: "\t")}
    end
  end

  # GET /educations/1
  # GET /educations/1.json
  def show
    @education = Education.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @education }
    end
  end

  # GET /educations/new
  # GET /educations/new.json
  def new
    @education = Education.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @education }
    end
  end

  # GET /educations/1/edit
  def edit
    @education = Education.find(params[:id])
  end

  # POST /educations
  # POST /educations.json
  def create
    @education = Education.new(params[:education])

    respond_to do |format|
      if @education.save
        format.html { redirect_to @education, notice: 'Education was successfully created.' }
        format.json { render json: @education, status: :created, location: @education }
      else
        format.html { render action: "new" }
        format.json { render json: @education.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /educations/1
  # PUT /educations/1.json
  def update
    @education = Education.find(params[:id])

    respond_to do |format|
      if @education.update_attributes(params[:education])
        format.html { redirect_to @education, notice: 'Education was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @education.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /educations/1
  # DELETE /educations/1.json
end
