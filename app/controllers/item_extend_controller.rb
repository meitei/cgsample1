class ItemExtendController < ApplicationController
  def search
    @id = params[:ID]
    @name = params[:Name]

    @sql = "select * from items where 0=0 "
    if @id != ""
      @sql += " and id = " + @id
    end

    if @name != ""
      @sql += " and name like '%" + @name + "%'"
    end

    #@items = Item.find(:all, :conditions=>[ "id=:id and name like :name", {:id=>@id, :name=> "%"+ @name}])
    #@items = Item.all
    @items =  ActiveRecord::Base.connection.execute(@sql);

    respond_to do |format|
     format.html # index.html.erb
     format.json { render json: @items }
    end
  end
end
