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
    conditions = KonyuRireki.where("konyu_rirekis.\"delFlg\" = ?", 0)
    conditions = add_condition_int(conditions, "konyu_rirekis.\"kokyakuId\"", :kokyakuIdFrom, :kokyakuIdTo)
    conditions = add_condition_int(conditions, "konyu_rirekis.\"hokenShubetsuCd1\"", :hokenShubetsuCd1)
    conditions = add_condition_int(conditions, "konyu_rirekis.\"hokenShubetsuCd2\"", :hokenShubetsuCd2)
    conditions = add_condition_date(conditions, "\"juchuDt\"", :juchuDtFrom, :juchuDtTo)
    conditions = add_condition_name(conditions, "byoins.\"byoinNm\"", :byoinNm)
    conditions = add_condition_date(conditions, "\"kariAwaseDt\"", :kariAwaseDtFrom, :kariAwaseDtTo)
    conditions = add_condition_name(conditions, "kokyakus.\"kokyakuNm1\"", :kokyakuNm1)
    conditions = add_condition_name(conditions, "kokyakus.\"kokyakuNm2\"", :kokyakuNm2)
    conditions = add_condition_name(conditions, "konyu_rirekis.\"shohinNm\"", :shohinNm)
    conditions = add_condition_date(conditions, "\"nohinDt\"", :nohinDtFrom, :nohinDtTo)
    conditions = add_condition_name(conditions, "kokyakus.\"kokyakuNmKana1\"", :kokyakuNmKana1)
    conditions = add_condition_name(conditions, "kokyakus.\"kokyakuNmKana2\"", :kokyakuNmKana2)
    conditions = add_condition_userNm(conditions, "ust", :uketsukeSesakuTantoNm)
    conditions = add_condition_date(conditions, "\"kofuDt\"", :kofuDtFrom, :kofuDtTo)
    conditions = add_condition_str(conditions, "konyu_rirekis.\"shubetsuKn\"", :shubetsuKn)
    conditions = add_condition_userNm(conditions, "kat", :kariAwaseTantoNm)
    conditions = add_condition_date(conditions, "\"nyukinDt\"", :nyukinDtFrom, :nyukinDtTo)
    conditions = add_condition_name(conditions, "seihins.\"hinmeiNm\"", :hinmeiNm)
    conditions = add_condition_userNm(conditions, "nt", :nohinTantoNm)
    conditions = add_condition_date(conditions, "\"oshiinDt\"", :oshiinDtFrom, :oshiinDtTo)
    conditions = add_condition_userNm(conditions, "mt", :mitsumoriTantoEigyoNm)
    conditions = add_condition_date(conditions, "\"kanryoDt\"", :kanryoDtFrom, :kanryoDtTo)
    conditions = add_condition_date(conditions, "\"mitsumoriDt\"", :mitsumoriDtFrom, :mitsumoriDtTo)

    # 検索に必要なSQL文を取得する
    select, joins = get_select_stmt(:select)

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
      :select => select,
      :joins => joins,
      :offset => start,
      :limit => limit,
      :order => "konyu_rirekis.\"kokyakuId\" ASC")

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
    @konyu_rireki = KonyuRireki.new
    @konyu_rireki.class_eval("attr_accessor :kokyakuNm1, :kokyakuNm2, :uketsukeSesakuTantoNm, :byoinNm, :kariAwaseTantoNm, :nohinTantoNm, :mitsumoriTantoEigyoNm, :hinmeiNm")

    # 顧客一覧からの遷移時は顧客IDが渡される
    if params[:kokyakuId].present?
      logger.debug(params[:kokyakuId])
      @kokyaku = Kokyaku.find(:first, :conditions => {:kokyakuId => params[:kokyakuId], :delFlg => 0})
      @konyu_rireki.kokyakuId = @kokyaku.kokyakuId
      @konyu_rireki.kokyakuNm1 = @kokyaku.kokyakuNm1
      @konyu_rireki.kokyakuNm2 = @kokyaku.kokyakuNm2
    end

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
    session.delete(:files) if session.has_key? :files

    # 検索に必要なSQL文を取得する
    select, joins = get_select_stmt(:update)

    @konyu_rireki = KonyuRireki.find(
      params[:id],
      :joins => joins,
      :select => select,
    )

    @hoken_shubetsu = HokenShubetsu.all

    #save to session.
    if not @konyu_rireki.kanseiImgName.blank?
      s_files = [{
        name: @konyu_rireki.kanseiImgName,
        data: @konyu_rireki.kanseiImg
      }]
      session[:files] = s_files
    end

  end

  # POST /konyu_rirekis
  # POST /konyu_rirekis.json
  def create
    logger.debug(params[:konyu_rireki])
    @konyuRireki = KonyuRireki.new(params[:konyu_rireki])
    set_image_to_model

    # 現在日付から年度を取得する
    nend = get_nend()

    # 購入履歴IDの年度内最大値を取得する
    maxId = KonyuRireki.maximum(:konyuRirekiId, :conditions => ["\"konyuRirekiId\" BETWEEN ? AND ?", (nend.to_s + "0000000").to_i, (nend.to_s + "9999999").to_i])
    if maxId.blank? then
      maxId = 0;
    end
    maxId_s = maxId.to_s
    if maxId_s.size > 7 then
      maxId = maxId_s[(maxId_s.size - 7),7].to_i
    end

    # 購入履歴IDを生成する -> 年度下2桁+7桁の連番
    @konyuRireki.konyuRirekiId = "#{nend}#{format("%07d",(maxId + 1))}".to_i

    respond_to do |format|
      if @konyuRireki.save
        format.html { redirect_to action: "index", notice: 'KonyuRireki was successfully created.', reload: 'on' }
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
    set_image_to_model
    respond_to do |format|
      if @konyuRireki.update_attributes(params[:konyu_rireki])
        format.html { redirect_to action: "index", notice: 'KonyuRireki was successfully updated.', reload: 'on' }
        # format.html { redirect_to action: "index", reload: 'on' }
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
    # @konyuRireki.destroy
    logger.debug(@konyuRireki)
    respond_to do |format|
      if @konyuRireki.update_attribute(:delFlg, 1)
        format.html { redirect_to @konyuRireki, notice: 'KonyuRireki was successfully logical deleted.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @konyuRireki.errors, status: :unprocessable_entity }
      end
    end
  end

  # POST /kokyakus/delete_list
  # POST /kokyakus/delete_list.json
  def delete_list
    logger.debug(params[:deleteIdList])

    if params[:deleteIdList].present?
      # 一括削除実行
      KonyuRireki.update_all("\"delFlg\"=1, \"koshinshaId\"=" + params[:koshinshaId], "\"id\" IN (" + params[:deleteIdList] + ")")
    end

    respond_to do |format|
      format.html { redirect_to action: "index", notice: 'KonyuRireki was successfully bulk logical deleted.', reload: 'on' }
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

  def get_select_stmt mode
    main_cols = []
    KonyuRireki.columns.each{|col|
      main_cols << "konyu_rirekis.\"#{col.name}\"" if mode == :update or col.type != :binary
    }
    select = main_cols.join(",")
    select << ",byoins.\"byoinNm\""
    select << ",kokyakus.\"kokyakuNm1\""
    select << ",kokyakus.\"kokyakuNm2\""
    select << ",kokyakus.\"kokyakuNmKana1\""
    select << ",kokyakus.\"kokyakuNmKana2\""
    select << ",#{str_sql_concat("kokyakus.\"kokyakuNm1\"","' '","kokyakus.\"kokyakuNm2\"")} \"kokyakuNm\""
    select << ",#{str_sql_concat("kokyakus.\"kokyakuNmKana1\"","' '","kokyakus.\"kokyakuNmKana2\"")} \"kokyakuNmKana\""
    select << ",#{str_sql_concat("ust.myoji","' '","ust.name")} \"uketsukeSesakuTantoNm\""
    select << ",#{str_sql_concat("kat.myoji","' '","kat.name")} \"kariAwaseTantoNm\""
    select << ",#{str_sql_concat("nt.myoji","' '","nt.name")} \"nohinTantoNm\""
    select << ",#{str_sql_concat("mt.myoji","' '","mt.name")} \"mitsumoriTantoEigyoNm\""
    select << ",seihins.\"hinmeiNm\""
    select << ",hs1.\"hokenShubetsuNm\" \"hokenShubetsuNm1\""
    select << ",hs2.\"hokenShubetsuNm\" \"hokenShubetsuNm2\""
    select << ",mitsumoris.\"id\" AS \"mitsumorisRowId\""
    select << ",CASE \"shubetsuKn\" WHEN 0 THEN '新規' WHEN 1 THEN '修理' ELSE NULL END \"shubetsuKnNm\""

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
    joins << "LEFT OUTER JOIN mitsumoris ON mitsumoris.\"konyuRirekiId\" = konyu_rirekis.\"konyuRirekiId\" AND mitsumoris.\"kokyakuId\" = konyu_rirekis.\"kokyakuId\" "

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
    user_name_stmt = str_sql_concat(tableNm + ".myoji", tableNm + ".name")
    conditions = conditions.where("#{user_name_stmt} LIKE ? ", "%" + itemValue.gsub(/(\s|　)+/, '') + "%") if not itemValue.blank?
    conditions
  end

  def add_condition_date(conditions, columnNm, *itemIds)
    itemValues = []
    itemIds[0..1].each {|itemId|
      itemValues << params[:konyu_rireki][itemId]
    }
    oprs = (itemValues.size == 2) ? [">=", "<="] : ["="]
    itemValues.each_with_index {|itemValue, i|
      if is_date?(itemValue)
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

  def is_date? strDate
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

  def set_image_to_model
    files = session.delete(:files) if session.has_key? :files
    if files != nil and files.size > 0
      @konyuRireki.kanseiImg = files[0][:data]
      @konyuRireki.kanseiImgName = files[0][:name]
    end
  end

  def str_sql_concat *strs
    adapter = Rails.configuration.database_configuration[Rails.env]['adapter']
    if adapter == "mysql2" then
      "concat(#{strs.join(',')})"
    else
      strs.join("||")
    end
  end

  private :get_select_stmt, :get_nend, :add_condition_userNm, :add_condition_date, :is_date?, :set_image_to_model, :str_sql_concat

end
