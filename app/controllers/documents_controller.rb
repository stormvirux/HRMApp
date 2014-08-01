class DocumentsController < ApplicationController
	before_filter :signed_in_user,
                only: [:index, :edit, :update, :destroy,:show,:new,:create]

  def index
    @documents = Document.all

    respond_to do |format|
      format.html # index.html.erb
      format.csv { render text: @documents.to_csv }
      format.xls #{send_data @documents.to_csv(col_sep: "\t")}
      format.json { render json: @documents }
    end
  end

  # GET /employees/1
  # GET /employees/1.json
  def show
    @document = Document.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @document }
    end
  end

  # GET /employees/new
  # GET /employees/new.json
  def new
    @document = Document.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @document }
    end
  end

  # GET /employees/1/edit
  def edit
    @document = Document.find(params[:id])
  end

  # POST /employees
  # POST /employees.json
  def create
    @document = Document.new(params[:document])

    respond_to do |format|
      if @document.save
        format.html { redirect_to @document, notice: 'Document was successfully created.' }
        format.json { render json: @document, status: :created, location: @document }
      else
        format.html { render action: "new" }
        format.json { render json: @document.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /employees/1
  # PUT /employees/1.json
  def update
    @document = Document.find(params[:id])

    respond_to do |format|
      if @document.update_attributes(params[:document])
        format.html { redirect_to @document, notice: 'Document was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @document.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /employees/1
  # DELETE /employees/1.json
  def destroy
    @document = Document.find(params[:id])
    @document.destroy
    respond_to do |format|
      format.html { redirect_to documents_url }
      format.json { head :no_content }
    end
  end

end
