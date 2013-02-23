require 'test_helper'

class ShobyosControllerTest < ActionController::TestCase
  setup do
    @shobyo = shobyos(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:shobyos)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create shobyo" do
    assert_difference('Shobyo.count') do
      post :create, shobyo: { haishiDt: @shobyo.haishiDt, icd10Cd: @shobyo.icd10Cd, koshinshaId: @shobyo.koshinshaId, shobyoNm: @shobyo.shobyoNm, shobyoNmKana: @shobyo.shobyoNmKana, shogyoCd: @shobyo.shogyoCd, shusaiDt: @shobyo.shusaiDt, torokushaId: @shobyo.torokushaId }
    end

    assert_redirected_to shobyo_path(assigns(:shobyo))
  end

  test "should show shobyo" do
    get :show, id: @shobyo
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @shobyo
    assert_response :success
  end

  test "should update shobyo" do
    put :update, id: @shobyo, shobyo: { haishiDt: @shobyo.haishiDt, icd10Cd: @shobyo.icd10Cd, koshinshaId: @shobyo.koshinshaId, shobyoNm: @shobyo.shobyoNm, shobyoNmKana: @shobyo.shobyoNmKana, shogyoCd: @shobyo.shogyoCd, shusaiDt: @shobyo.shusaiDt, torokushaId: @shobyo.torokushaId }
    assert_redirected_to shobyo_path(assigns(:shobyo))
  end

  test "should destroy shobyo" do
    assert_difference('Shobyo.count', -1) do
      delete :destroy, id: @shobyo
    end

    assert_redirected_to shobyos_path
  end
end
