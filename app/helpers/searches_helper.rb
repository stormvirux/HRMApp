module SearchesHelper
  
  def model_fields
    # which fields to display and sort by
    [:id,:empno, :first_name, :last_name, :email,:pedate,:iedate,:iqedate,:vedate,:gender]
  end

  def results_limit
    # max number of search results to display
    100
  end

  def display_query_sql(employee)
    "SQL: #{employee.to_sql}"
  end

  def display_results_header(count)
    if count > results_limit
      "Your first #{results_limit} results out of #{count} total"
    else
      "You have #{pluralize(count, 'result')}"
    end
  end

  def action
    action_name == 'advanced_search' ? :post : :get
  end

  def display_sort_column_headers(search)
    model_fields.each_with_object('') do |field, string|
      string << content_tag(:th,field)
    end
  end

  def display_search_results(objects)
    objects.limit(results_limit).each_with_object('') do |object, string|
      string << content_tag(:tr, display_search_results_row(object))
    end
  end

  def display_search_results_row(object)
    lol=model_fields
    id=lol[0]
    pass=lol[5]
    emp=lol[1]
    empl=0
    idl=0
    ide=0
    model_fields.each_with_object('') do |field, string|
      if field==id
        string << content_tag(:td,content_tag(:a,object.send(field),:href=>employee_path(object.send(field))))
        ide=object.send(field)
      elsif field==emp
        string << content_tag(:td,content_tag(:a,object.send(field),:href=>employee_path(ide)))
        empl=object.send(field)
      elsif field==pass
        idl=find_passport_id(empl)
        print idl
        string << content_tag(:td,content_tag(:a,object.send(field),:href=>document_path(idl)))
      else
        string << content_tag(:td,object.send(field))
      end
    end
    .html_safe
  end

  def find_passport_id(empl)
    Document.find(:all,:select => "id",:conditions =>['empno ILIKE ? ',empl])
  end

end
