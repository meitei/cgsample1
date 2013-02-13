require 'test_helper'

class ByoinsControllerTest < ActionController::TestCase
  setup do
    @byoin = byoins(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:byoins)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create byoin" do
    assert_difference('Byoin.count') do
      post :create, byoin: { byoinCd: @byoin.byoinCd, byoinNm: @byoin.byoinNm, koshinshaId: @byoin.koshinshaId, torokushaId: @byoin.torokushaId }
    end

    assert_redirected_to byoin_path(assigns(:byoin))
  end

  test "should show byoin" do
    get :show, id: @byoin
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @byoin
    assert_response :success
  end

  test "should update byoin" do
    put :update, id: @byoin, byoin: { byoinCd: @byoin.byoinCd, byoinNm: @byoin.byoinNm, koshinshaId: @byoin.koshinshaId, torokushaId: @byoin.torokushaId }
    assert_redirected_to byoin_path(assigns(:byoin))
  end

  test "should destroy byoin" do
    assert_difference('Byoin.count', -1) do
      delete :destroy, id: @byoin
    end

    assert_redirected_to byoins_path
  end
end
