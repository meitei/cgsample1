require 'test_helper'

class KanseiBuhinsControllerTest < ActionController::TestCase
  setup do
    @kansei_buhin = kansei_buhins(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:kansei_buhins)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create kansei_buhin" do
    assert_difference('KanseiBuhin.count') do
      post :create, kansei_buhin: { biko: @kansei_buhin.biko, buhinCd: @kansei_buhin.buhinCd, buhinNm: @kansei_buhin.buhinNm, kakaku: @kansei_buhin.kakaku, katashikiCd: @kansei_buhin.katashikiCd, katashikiNm: @kansei_buhin.katashikiNm, koshinshaId: @kansei_buhin.koshinshaId, shiyoBuhin: @kansei_buhin.shiyoBuhin, torokushaId: @kansei_buhin.torokushaId }
    end

    assert_redirected_to kansei_buhin_path(assigns(:kansei_buhin))
  end

  test "should show kansei_buhin" do
    get :show, id: @kansei_buhin
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @kansei_buhin
    assert_response :success
  end

  test "should update kansei_buhin" do
    put :update, id: @kansei_buhin, kansei_buhin: { biko: @kansei_buhin.biko, buhinCd: @kansei_buhin.buhinCd, buhinNm: @kansei_buhin.buhinNm, kakaku: @kansei_buhin.kakaku, katashikiCd: @kansei_buhin.katashikiCd, katashikiNm: @kansei_buhin.katashikiNm, koshinshaId: @kansei_buhin.koshinshaId, shiyoBuhin: @kansei_buhin.shiyoBuhin, torokushaId: @kansei_buhin.torokushaId }
    assert_redirected_to kansei_buhin_path(assigns(:kansei_buhin))
  end

  test "should destroy kansei_buhin" do
    assert_difference('KanseiBuhin.count', -1) do
      delete :destroy, id: @kansei_buhin
    end

    assert_redirected_to kansei_buhins_path
  end
end
