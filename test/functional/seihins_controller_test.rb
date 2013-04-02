require 'test_helper'

class SeihinsControllerTest < ActionController::TestCase
  setup do
    @seihin = seihins(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:seihins)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create seihin" do
    assert_difference('Seihin.count') do
      post :create, seihin: {  }
    end

    assert_redirected_to seihin_path(assigns(:seihin))
  end

  test "should show seihin" do
    get :show, id: @seihin
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @seihin
    assert_response :success
  end

  test "should update seihin" do
    put :update, id: @seihin, seihin: {  }
    assert_redirected_to seihin_path(assigns(:seihin))
  end

  test "should destroy seihin" do
    assert_difference('Seihin.count', -1) do
      delete :destroy, id: @seihin
    end

    assert_redirected_to seihins_path
  end
end
