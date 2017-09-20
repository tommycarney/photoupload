class PhotosController < ApplicationController
  def index
    @photos = Photo.all
    @photo = Photo.new
  end

  def create
    @photo = Photo.create(photo_params)
    @photos = Photo.order('created_at')
  end

  private

  def photo_params
   params.require(:photo).permit(:url, :alt_text)
  end
end
