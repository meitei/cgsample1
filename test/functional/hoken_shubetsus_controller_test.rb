require 'test_helper'

class HokenShubetsusControllerTest < ActionController::TestCase
  setup do
    @hoken_shubetsu = hoken_shubetsus(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:hoken_shubetsus)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create hoken_shubetsu" do
    assert_difference('HokenShubetsu.count') do
      post :create, hoken_shubetsu: { hokenShubetsuCd: @hoken_shubetsu.hokenShubetsuCd, hokenShubetsuNm: @hoken_shubetsu.hokenShubetsuNm, hyojiJyun: @hoken_shubetsu.hyojiJyun, koshinshaId: @hoken_shubetsu.koshinshaId, torokushaId: @hoken_shubetsu.torokushaId }
    end

    assert_redirected_to hoken_shubetsu_path(assigns(:hoken_shubetsu))
  end

  test "should show hoken_shubetsu" do
    get :show, id: @hoken_shubetsu
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @hoken_shubetsu
    assert_response :success
  end

  test "should update hoken_shubetsu" do
    put :update, id: @hoken_shubetsu, hoken_shubetsu: { hokenShubetsuCd: @hoken_shubetsu.hokenShubetsuCd, hokenShubetsuNm: @hoken_shubetsu.hokenShubetsuNm, hyojiJyun: @hoken_shubetsu.hyojiJyun, koshinshaId: @hoken_shubetsu.koshinshaId, torokushaId: @hoken_shubetsu.torokushaId }
    assert_redirected_to hoken_shubetsu_path(assigns(:hoken_shubetsu))
  end

  test "should destroy hoken_shubetsu" do
    assert_difference('HokenShubetsu.count', -1) do
      delete :destroy, id: @hoken_shubetsu
    end

    assert_redirected_to hoken_shubetsus_path
  end
end
