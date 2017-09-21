class PhotosController < ApplicationController
  def index
    @photos = Photo.all.map {|photo| photo.image }
    @photo = Photo.new
  end

  def create
    @photo = Photo.new(image: params[:image])
    if @photo.save
      render json: @photo.image
    else
      render json: @photo.errors, status: :unprocessable_entity
    end
  end

  private

  def photo_params
   params.require(:form).permit(:url, :alt_text, :image)
  end
end
