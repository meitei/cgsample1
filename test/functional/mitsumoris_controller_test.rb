require 'test_helper'

class MitsumorisControllerTest < ActionController::TestCase
  setup do
    @mitsumori = mitsumoris(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:mitsumoris)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create mitsumori" do
    assert_difference('Mitsumori.count') do
      post :create, mitsumori: { kokyakuId: @mitsumori.kokyakuId, mitsumoriId: @mitsumori.mitsumoriId }
    end

    assert_redirected_to mitsumori_path(assigns(:mitsumori))
  end

  test "should show mitsumori" do
    get :show, id: @mitsumori
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @mitsumori
    assert_response :success
  end

  test "should update mitsumori" do
    put :update, id: @mitsumori, mitsumori: { kokyakuId: @mitsumori.kokyakuId, mitsumoriId: @mitsumori.mitsumoriId }
    assert_redirected_to mitsumori_path(assigns(:mitsumori))
  end

  test "should destroy mitsumori" do
    assert_difference('Mitsumori.count', -1) do
      delete :destroy, id: @mitsumori
    end

    assert_redirected_to mitsumoris_path
  end
end
