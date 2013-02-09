require 'test_helper'

class KokyakusControllerTest < ActionController::TestCase
  setup do
    @kokyaku = kokyakus(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:kokyakus)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create kokyaku" do
    assert_difference('Kokyaku.count') do
      post :create, kokyaku: { address1: @kokyaku.address1, address2: @kokyaku.address2, biko: @kokyaku.biko, fax: @kokyaku.fax, gakko_nm: @kokyaku.gakko_nm, kokyaku_id: @kokyaku.kokyaku_id, kokyaku_nm1: @kokyaku.kokyaku_nm1, kokyaku_nm2: @kokyaku.kokyaku_nm2, kokyaku_nm_kana1: @kokyaku.kokyaku_nm_kana1, kokyaku_nm_kana2: @kokyaku.kokyaku_nm_kana2, koshin_dt: @kokyaku.koshin_dt, koshin_id: @kokyaku.koshin_id, koshinsha_id: @kokyaku.koshinsha_id, post_no: @kokyaku.post_no, seibetsu: @kokyaku.seibetsu, shobyou_cd1: @kokyaku.shobyou_cd1, shobyou_cd2: @kokyaku.shobyou_cd2, shobyou_cd3: @kokyaku.shobyou_cd3, tanjo_dt: @kokyaku.tanjo_dt, tel1: @kokyaku.tel1, tel2: @kokyaku.tel2, toroku_dt: @kokyaku.toroku_dt, torokusha_id: @kokyaku.torokusha_id }
    end

    assert_redirected_to kokyaku_path(assigns(:kokyaku))
  end

  test "should show kokyaku" do
    get :show, id: @kokyaku
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @kokyaku
    assert_response :success
  end

  test "should update kokyaku" do
    put :update, id: @kokyaku, kokyaku: { address1: @kokyaku.address1, address2: @kokyaku.address2, biko: @kokyaku.biko, fax: @kokyaku.fax, gakko_nm: @kokyaku.gakko_nm, kokyaku_id: @kokyaku.kokyaku_id, kokyaku_nm1: @kokyaku.kokyaku_nm1, kokyaku_nm2: @kokyaku.kokyaku_nm2, kokyaku_nm_kana1: @kokyaku.kokyaku_nm_kana1, kokyaku_nm_kana2: @kokyaku.kokyaku_nm_kana2, koshin_dt: @kokyaku.koshin_dt, koshin_id: @kokyaku.koshin_id, koshinsha_id: @kokyaku.koshinsha_id, post_no: @kokyaku.post_no, seibetsu: @kokyaku.seibetsu, shobyou_cd1: @kokyaku.shobyou_cd1, shobyou_cd2: @kokyaku.shobyou_cd2, shobyou_cd3: @kokyaku.shobyou_cd3, tanjo_dt: @kokyaku.tanjo_dt, tel1: @kokyaku.tel1, tel2: @kokyaku.tel2, toroku_dt: @kokyaku.toroku_dt, torokusha_id: @kokyaku.torokusha_id }
    assert_redirected_to kokyaku_path(assigns(:kokyaku))
  end

  test "should destroy kokyaku" do
    assert_difference('Kokyaku.count', -1) do
      delete :destroy, id: @kokyaku
    end

    assert_redirected_to kokyakus_path
  end
end
