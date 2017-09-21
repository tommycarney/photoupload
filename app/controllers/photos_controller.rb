class PhotosController < ApplicationController
  def index
    @photos = Photo.all
    @photo = Photo.new
  end

  def create
    @photo = Photo.new(photo_params)
    if @photo.save
      render json: @photo
    else
      render json: @photo.errors, status: :unprocessable_entity
    end
  end

  private

  def photo_params
   params.require(:photo).permit(:url, :alt_text, :image)
  end
end
