module ApplicationHelper
  def full_title(page_title)
    base_title = "HRM System"
    if page_title.empty?
      base_title
    else
      "#{base_title} | #{page_title}"
    end
  end
  def tn(num)
    num.to_s.split(//).map{|r|t("n"+r)}.join
  end
end
