# encoding: utf-8
class KonyuRirekisController < ApplicationController
  # GET /konyu_rirekis
  # GET /konyu_rirekis.json
  def index
    @hoken_shubetsu = HokenShubetsu.all
    respond_to do |format|
      format.html # index.html.erb
      #format.json { render json: @responce }
    end
  end

  # GET /konyu_rirekis/search
  # GET /konyu_rirekis/search.json
  def search
    conditions = KonyuRireki.where("1 = 1")
    # conditions = conditions.where("\"kokyakuId\" >= ?", params[:konyu_rireki][:kokyakuIdFrom].to_i) if params[:konyu_rireki][:kokyakuIdFrom] != ""
    # conditions = conditions.where("\"kokyakuId\" <= ?", params[:konyu_rireki][:kokyakuIdTo].to_i) if params[:konyu_rireki][:kokyakuIdTo] != ""
    conditions = add_condition_int(conditions, "konyu_rirekis.\"kokyakuId\"", :kokyakuIdFrom, :kokyakuIdTo)
    # conditions = conditions.where("\"hokenShubetsuCd1\" = ?", params[:konyu_rireki][:hokenShubetsuCd1]) if params[:konyu_rireki][:hokenShubetsuCd1] != ""
    conditions = add_condition_int(conditions, "konyu_rirekis.\"hokenShubetsuCd1\"", :hokenShubetsuCd1)

    # conditions = conditions.where("\"hokenShubetsuCd2\" = ?", params[:konyu_rireki][:hokenShubetsuCd2]) if params[:konyu_rireki][:hokenShubetsuCd2] != ""
    conditions = add_condition_int(conditions, "konyu_rirekis.\"hokenShubetsuCd2\"", :hokenShubetsuCd2)

    # conditions = conditions.where("\"juchuDt\" >= ?", params[:konyu_rireki][:juchuDtFrom]) if params[:konyu_rireki][:juchuDtFrom] != ""
    # conditions = conditions.where("\"juchuDt\" <= ?", params[:konyu_rireki][:juchuDtTo]) if params[:konyu_rireki][:juchuDtTo] != ""
    conditions = add_condition_date(conditions, "\"juchuDt\"", :juchuDtFrom, :juchuDtTo)

    # conditions = conditions.where("konyu_rirekis.\"byoinCd\" = ?", params[:konyu_rireki][:byoinCd].to_i) if params[:konyu_rireki][:byoinCd] != ""
    conditions = add_condition_name(conditions, "byoins.\"byoinNm\"", :byoinNm)

    # conditions = conditions.where("\"kariAwaseDt\" >= ?", params[:konyu_rireki][:kariAwaseDtFrom]) if params[:konyu_rireki][:kariAwaseDtFrom] != ""
    # conditions = conditions.where("\"kariAwaseDt\" <= ?", params[:konyu_rireki][:kariAwaseDtTo]) if params[:konyu_rireki][:kariAwaseDtTo] != ""
    conditions = add_condition_date(conditions, "\"kariAwaseDt\"", :kariAwaseDtFrom, :kariAwaseDtTo)

    # conditions = conditions.where("\"kokyakuNm\" LIKE ?", "%" + params[:konyu_rireki][:kokyakuNm] + "%") if params[:konyu_rireki][:kokyakuNm] != ""
    conditions = add_condition_name(conditions, "kokyakus.\"kokyakuNm\"", :kokyakuNm)

    # conditions = conditions.where("\"shohinNm\" LIKE ?", "%" + params[:konyu_rireki][:shohinNm] + "%") if params[:konyu_rireki][:shohinNm] != ""
    conditions = add_condition_name(conditions, "konyu_rirekis.\"shohinNm\"", :shohinNm)

    # conditions = conditions.where("\"nohinDt\" >= ?", params[:konyu_rireki][:nohinDtFrom]) if params[:konyu_rireki][:nohinDtFrom] != ""
    # conditions = conditions.where("\"nohinDt\" <= ?", params[:konyu_rireki][:nohinDtTo]) if params[:konyu_rireki][:nohinDtTo] != ""
    conditions = add_condition_date(conditions, "\"nohinDt\"", :nohinDtFrom, :nohinDtTo)

    # conditions = conditions.where("\"kokyakuNmKana\" LIKE ?", "%" + params[:konyu_rireki][:kokyakuNmKana] + "%") if params[:konyu_rireki][:kokyakuNmKana] != ""
    conditions = add_condition_name(conditions, "kokyakus.\"kokyakuNmKana\"", :kokyakuNmKana)

    # conditions = conditions.where("\"uketsukeSesakuTantoCd\" = ?", params[:konyu_rireki][:uketsukeSesakuTantoCd]) if params[:konyu_rireki][:uketsukeSesakuTantoCd] != ""
    conditions = add_condition_userNm(conditions, "ust", :uketsukeSesakuTantoNm)

    # conditions = conditions.where("\"kofuDt\" >= ?", params[:konyu_rireki][:kofuDtFrom]) if params[:konyu_rireki][:kofuDtFrom] != ""
    # conditions = conditions.where("\"kofuDt\" <= ?", params[:konyu_rireki][:kofuDtTo]) if params[:konyu_rireki][:kofuDtTo] != ""
    conditions = add_condition_date(conditions, "\"kofuDt\"", :kofuDtFrom, :kofuDtTo)

    # conditions = conditions.where("\"shubetsuKn\" = ?", params[:konyu_rireki][:shubetsuKn]) if params[:konyu_rireki][:shubetsuKn] != ""
    conditions = add_condition_str(conditions, "konyu_rirekis.\"shubetsuKn\"", :shubetsuKn)

    # conditions = conditions.where("\"kariAwaseTantoCd\" = ?", params[:konyu_rireki][:kariAwaseTantoCd]) if params[:konyu_rireki][:kariAwaseTantoCd] != ""
    conditions = add_condition_userNm(conditions, "kat", :kariAwaseTantoNm)

    # conditions = conditions.where("\"nyukinDt\" >= ?", params[:konyu_rireki][:nyukinDtFrom]) if params[:konyu_rireki][:nyukinDtFrom] != ""
    # conditions = conditions.where("\"nyukinDt\" <= ?", params[:konyu_rireki][:nyukinDtTo]) if params[:konyu_rireki][:nyukinDtTo] != ""
    conditions = add_condition_date(conditions, "\"nyukinDt\"", :nyukinDtFrom, :nyukinDtTo)

    # conditions = conditions.where("\"seihinId\" = ?", params[:konyu_rireki][:seihinId]) if params[:konyu_rireki][:seihinId] != ""
    conditions = add_condition_name(conditions, "seihins.\"hinmeiNm\"", :hinmeiNm)

    # conditions = conditions.where("\"nohinTantoCd\" = ?", params[:konyu_rireki][:nohinTantoCd]) if params[:konyu_rireki][:nohinTantoCd] != ""
    conditions = add_condition_userNm(conditions, "nt", :nohinTantoNm)

    # conditions = conditions.where("\"oshiinDt\" >= ?", params[:konyu_rireki][:oshiinDtFrom]) if params[:konyu_rireki][:oshiinDtFrom] != ""
    # conditions = conditions.where("\"oshiinDt\" <= ?", params[:konyu_rireki][:oshiinDtTo]) if params[:konyu_rireki][:oshiinDtTo] != ""
    conditions = add_condition_date(conditions, "\"oshiinDt\"", :oshiinDtFrom, :oshiinDtTo)

    # conditions = conditions.where("\"mitsumoriTantoEigyoCd\" = ?", params[:konyu_rireki][:mitsumoriTantoEigyoCd]) if params[:konyu_rireki][:mitsumoriTantoEigyoCd] != ""
    conditions = add_condition_userNm(conditions, "mt", :mitsumoriTantoEigyoNm)

    # conditions = conditions.where("\"kanryoDt\" >= ?", params[:konyu_rireki][:kanryoDtFrom]) if params[:konyu_rireki][:kanryoDtFrom] != ""
    # conditions = conditions.where("\"kanryoDt\" <= ?", params[:konyu_rireki][:kanryoDtTo]) if params[:konyu_rireki][:kanryoDtTo] != ""
    conditions = add_condition_date(conditions, "\"kanryoDt\"", :kanryoDtFrom, :kanryoDtTo)

    # conditions = conditions.where("\"mitsumoriDt\" >= ?", params[:konyu_rireki][:mitsumoriDtFrom]) if params[:konyu_rireki][:mitsumoriDtFrom] != ""
    # conditions = conditions.where("\"mitsumoriDt\" <= ?", params[:konyu_rireki][:mitsumoriDtTo]) if params[:konyu_rireki][:mitsumoriDtTo] != ""
    conditions = add_condition_date(conditions, "\"mitsumoriDt\"", :mitsumoriDtFrom, :mitsumoriDtTo)

    #logger.debug(conditions)

    # 検索に必要なSQL文を取得する
    select, joins = get_select_stmt

    records = conditions.count(:joins => joins)
    limit = params[:rows].to_i
    page = params[:page].to_i
    if records > 0
      n = records.quo(limit)
      total_pages = n.ceil
    else
      total_pages = 0
    end
    start = limit * page - limit;

    @konyu_rirekis = conditions.find(
      :all,
      # :joins => "LEFT OUTER JOIN byoins ON byoins.byoinCd = konyu_rirekis.byoinCd",
      # :select => "konyu_rirekis.*, byoins.byoinNm",
      :select => select,
      :joins => joins,

      # :joins => "LEFT OUTER JOIN shobyos ON shobyos.shobyoCd = konyu_rirekis.shobyouCd1",
      # :joins => "LEFT OUTER JOIN shobyos shobyo2 ON shobyos.shobyoCd = konyu_rirekis.shobyouCd2",
      # :joins => "LEFT OUTER JOIN shobyos shobyo3 ON shobyos.shobyoCd = konyu_rirekis.shobyouCd3",
      # :include => [:shobyo],
      :offset => start,
      :limit => limit,
      :order => "\"kokyakuId\" ASC")

    @responce = {
      total: total_pages.to_s,
      page: params[:page],
      records: records.to_s,
      rows: @konyu_rirekis
    }
    logger.debug(@responce)

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @responce }
    end
  end

  # GET /konyu_rirekis/1
  # GET /konyu_rirekis/1.json
  def show
    @konyu_rireki = KonyuRireki.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @konyu_rireki }
    end
  end

  # GET /konyu_rirekis/new
  # GET /konyu_rirekis/new.json
  def new
    # logger.debug(KonyuRireki.new.to_yaml)
    # @konyu_rireki = KonyuRireki.new.attributes
    @konyu_rireki = KonyuRireki.new
    # logger.debug(@konyu_rireki)

    @konyu_rireki.class_eval("attr_accessor :kokyakuNm, :uketsukeSesakuTantoNm, :byoinNm, :kariAwaseTantoNm, :nohinTantoNm, :mitsumoriTantoEigyoNm, :hinmeiNm")

    # add_columns = {
    #   :kokyakuNm => "",
    #   :uketsukeSesakuTantoNm => "",
    #   :byoinNm => "",
    #   :kariAwaseTantoNm => "",
    #   :nohinTantoNm => "",
    #   :mitsumoriTantoEigyoNm => "",
    #   :hinmeiNm => ""
    # }
    # @konyu_rireki.merge add_columns
    # logger.debug(@konyu_rireki)
    @hoken_shubetsu = HokenShubetsu.all
    session.delete(:files) if session.has_key? :files
    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @konyu_rireki }
    end
  end

  # GET /konyu_rirekis/1/edit
  def edit
    logger.debug(params)

    # 検索に必要なSQL文を取得する
    select, joins = get_select_stmt

    @konyu_rireki = KonyuRireki.find(
      params[:id],
      :joins => joins,
      :select => select,
    )

    # # 病院の取得
    # byoin = Byoin.find(@konyu_rireki.byoinCd)
    # @konyu_rireki.byoinNm = byoin.byoinNm

    # # 顧客情報の取得
    # kokyaku = Kokyaku.find(@konyu_rireki.kokyakuId)
    # @konyu_rireki.kokyakuNm = kokyaku.kokyakuNm

    # # 受付制作担当者の取得
    # uketsukeUser = User.find(@konyu_rireki.uketsukeSesakuTantoCd)
    # @konyu_rireki.byoinNm = uketsukeUser.username

    @hoken_shubetsu = HokenShubetsu.all

    #save to session.
    s_files = [{
      name: @konyu_rireki.kanseiImgName,
      data: @konyu_rireki.kanseiImg
    }]
    session[:files] = s_files

  end

  # POST /konyu_rirekis
  # POST /konyu_rirekis.json
  def create
    logger.debug(params[:konyu_rireki])
    @konyuRireki = KonyuRireki.new(params[:konyu_rireki])
    # logger.debug(@konyuRireki.to_yaml)

    # 購入履歴IDの最大を取得する
    maxId = KonyuRireki.maximum(:konyuRirekiId);
    if maxId.blank? then
      maxId = 1;
    end
    maxId_s = maxId.to_s
    if maxId_s.size > 9 then
      maxId = maxId_s[(maxId_s.size - 9),9].to_i
    end

    # 購入履歴IDを生成する
    @konyuRireki.konyuRirekiId = "#{get_nend}#{format("%09d",(maxId + 1))}".to_i

    respond_to do |format|
      if @konyuRireki.save
        format.html { redirect_to action: "index", notice: 'KonyuRireki was successfully created.' }
        format.json { render json: @konyuRireki, status: :created, location: @konyuRireki }
      else
        format.html { render action: "new" }
        format.json { render json: @konyuRireki.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /konyu_rirekis/1
  # PUT /konyu_rirekis/1.json
  def update
    @konyuRireki = KonyuRireki.find(params[:id])
    files = session.delete(:files) if session.has_key? :files
    if files and files.size > 0
      @konyuRireki.kanseiImg = files[0][:data]
      @konyuRireki.kanseiImgName = files[0][:name]
    end
    respond_to do |format|
      if @konyuRireki.update_attributes(params[:konyu_rireki])
        format.html { redirect_to action: "index", notice: 'KonyuRireki was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @konyuRireki.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /konyu_rirekis/1
  # DELETE /konyu_rirekis/1.json
  def destroy
    @konyuRireki = KonyuRireki.find(params[:id])
    @konyuRireki.destroy

    logger.debug(@konyuRireki)
    respond_to do |format|
      format.html { redirect_to @konyuRireki, notice: 'KonyuRireki was successfully deleted.' }
      format.json { head :no_content }
    end
  end

  def file_upload
    logger.debug(params)

    p_files = params[:files]

    files = []
    p_files.each {|f|
      files << {
        name: f.original_filename,
        size: f.size,
        url: "/konyu_rirekis/get_image/#{f.original_filename}",
        thumbnail_url: "/konyu_rirekis/get_image/#{f.original_filename}",
        delete_url: nil,
        delete_type: "DELETE"
      }
    }
    @response = {files: files}
    logger.debug(@response)

    #save to session.
    s_files = []
    p_files.each {|f|
      s_files << {
        name: f.original_filename,
        data: f.read
      }
    }
    session[:files] = s_files

    respond_to do |format|
      format.json { render json: @response }
    end
  end

  def get_image
    logger.debug(params)
    filename = params[:id] + "." + params[:format]
    files = session[:files]
    file = nil
    if files and not files.empty?
      file = files.find{|file| file[:name] == filename}
    end
    send_data(file[:data], :disposition => "inline")
  end

  def get_select_stmt
    select = "konyu_rirekis.*"
    select << ",byoins.\"byoinNm\""
    select << ",kokyakus.\"kokyakuNm\""
    select << ",kokyakus.\"kokyakuNmKana\""
    select << ",ust.myoji||' '||ust.name \"uketsukeSesakuTantoNm\""
    select << ",kat.myoji||' '||kat.name \"kariAwaseTantoNm\""
    select << ",nt.myoji||' '||nt.name \"nohinTantoNm\""
    select << ",mt.myoji||' '||mt.name \"mitsumoriTantoEigyoNm\""
    select << ",seihins.\"hinmeiNm\""
    select << ",hs1.\"hokenShubetsuNm\" \"hokenShubetsuNm1\""
    select << ",hs2.\"hokenShubetsuNm\" \"hokenShubetsuNm2\""
    select << ",CASE \"shubetsuKn\" WHEN 0 THEN '新規' WHEN 1 THEN '修理' ELSE NULL END \"shubetsuKnNm\""
    # select << ",CASE shubetsuKn WHEN 0 THEN 'xx' WHEN 1 THEN 'yy' ELSE NULL END shubetsuKnNm"

    joins = ""
    joins << "LEFT OUTER JOIN byoins ON byoins.\"byoinCd\" = konyu_rirekis.\"byoinCd\" "
    joins << "LEFT OUTER JOIN kokyakus ON kokyakus.\"kokyakuId\" = konyu_rirekis.\"kokyakuId\" "
    joins << "LEFT OUTER JOIN users ust ON ust.\"shainCd\" = konyu_rirekis.\"uketsukeSesakuTantoCd\" "
    joins << "LEFT OUTER JOIN users kat ON kat.\"shainCd\" = konyu_rirekis.\"kariAwaseTantoCd\" "
    joins << "LEFT OUTER JOIN users nt ON nt.\"shainCd\" = konyu_rirekis.\"nohinTantoCd\" "
    joins << "LEFT OUTER JOIN users mt ON mt.\"shainCd\" = konyu_rirekis.\"mitsumoriTantoEigyoCd\" "
    joins << "LEFT OUTER JOIN seihins ON seihins.\"seihinId\" = konyu_rirekis.\"seihinId\" "
    joins << "LEFT OUTER JOIN hoken_shubetsus hs1 ON hs1.\"hokenShubetsuCd\" = konyu_rirekis.\"hokenShubetsuCd1\" "
    joins << "LEFT OUTER JOIN hoken_shubetsus hs2 ON hs2.\"hokenShubetsuCd\" = konyu_rirekis.\"hokenShubetsuCd2\" "

    return select, joins
  end

  def get_nend
    today = Date.today
    # 年度(西暦)
    year = today.year
    case today.month
    when 1..3
      year = today.year - 1
    end
    # 年度(和暦) ※平成固定
    return year - 1988
  end

  def add_condition_userNm(conditions, tableNm, itemId)
    itemValue = params[:konyu_rireki][itemId]
    conditions = conditions.where("#{tableNm}.myoji||#{tableNm}.name LIKE ? ", "%" + itemValue.gsub(/(\s|　)+/, '') + "%") if not itemValue.blank?
    conditions
  end

  # def add_condition_date(conditions, columnId, itemIdFrom, itemIdTo)
  #   itemValueFrom = params[:konyu_rireki][itemIdFrom]
  #   itemValueTo = params[:konyu_rireki][itemIdTo]

  #   dateFrom = Date.strptime(itemValueFrom, "%Y/%m/%d") if isDate(itemValueFrom)
  #   dateTo = Date.strptime(itemValueTo, "%Y/%m/%d") if isDate(itemValueTo)

  #   conditions = conditions.where("\"#{columnId}\" >= ?", dateFrom) if dateFrom
  #   conditions = conditions.where("\"#{columnId}\" <= ?", dateTo) if dateTo
  #   conditions
  # end
  def add_condition_date(conditions, columnNm, *itemIds)
    itemValues = []
    itemIds[0..1].each {|itemId|
      itemValues << params[:konyu_rireki][itemId]
    }
    oprs = (itemValues.size == 2) ? [">=", "<="] : ["="]
    itemValues.each_with_index {|itemValue, i|
      if isDate(itemValue)
        dateValue = Date.strptime(itemValue, "%Y/%m/%d")
        conditions = conditions.where("#{columnNm} #{oprs[i]} ? ", dateValue)
      end
    }
    conditions
  end

  def add_condition_name(conditions, columnNm, itemId)
    itemValue = params[:konyu_rireki][itemId]
    conditions = conditions.where("#{columnNm} LIKE ? ", "%" + itemValue + "%") if not itemValue.blank?
    conditions
  end

  def add_condition_str(conditions, columnNm, itemId)
    itemValue = params[:konyu_rireki][itemId]
    conditions = conditions.where("#{columnNm} = ? ", itemValue) if not itemValue.blank?
    conditions
  end

  def add_condition_int(conditions, columnNm, *itemIds)
    itemValues = []
    itemIds[0..1].each {|itemId|
      itemValues << params[:konyu_rireki][itemId]
    }
    oprs = (itemValues.size == 2) ? [">=", "<="] : ["="]
    itemValues.each_with_index {|itemValue, i|
      if not itemValue.blank? and itemValue =~ /^[0-9]+$/
        conditions = conditions.where("#{columnNm} #{oprs[i]} ? ", itemValue.to_i)
      end
    }
    conditions
  end

  def isDate strDate
    if not strDate.blank? then
      match = /(\d+)\/(\d+)\/(\d+)/.match(strDate)
      if match then
        parts = match.captures
        if parts.size == 3 and Date.valid_date?(parts[0].to_i, parts[1].to_i, parts[2].to_i) then
          return true
        end
      end
    end
  end

  private :get_select_stmt, :get_nend, :add_condition_userNm, :add_condition_date, :isDate

end
